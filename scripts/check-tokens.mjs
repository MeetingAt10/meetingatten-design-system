// Enforces "keep the colors": components and the site use only semantic, treatment and dimension tokens,
// and treatments are built only from palette and theme tokens. Exits 1 on any violation.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { ROOT, loadTokens } from './lib.mjs';

const bad = [];
const report = (where, msg) => bad.push(`${where}: ${msg}`);

// 1-2. Source files: no color literals, no blends, no primitive color variables.
const SKIP = new Set(['node_modules', '.next', 'out', 'dist']);
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  SKIP.has(e.name) ? [] : e.isDirectory() ? walk(join(dir, e.name)) : /\.(css|tsx?|mdx?)$/.test(e.name) ? [join(dir, e.name)] : []);
const files = ['src', 'site'].map((d) => join(ROOT, d)).filter(existsSync).flatMap(walk);

const PRIMITIVE = /--ds-(brand-[a-z-]+|neutral-[a-z0-9-]+|(?:success|warning|danger|info|secondary|accent)-\d+)\b/g;
const FUNC = /\b(rgba?|hsla?|hwb|lab|lch|oklab|oklch|color-mix|color)\(/g;
const HEX = /#[0-9a-fA-F]{3,8}\b/g;
// Common named colors; extend the list if one slips through review.
const NAMED = new Set('white black red green blue gray grey silver yellow orange purple pink navy teal aqua fuchsia lime maroon olive'.split(' '));
const DECL = /(?:^|[;{\s])([a-z-]+)\s*:\s*([^;{}]+)(?=[;}])/g;

for (const f of files) {
  const rel = relative(ROOT, f);
  const src = readFileSync(f, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  for (const m of src.matchAll(PRIMITIVE)) report(rel, `primitive color variable ${m[0]} (use a semantic or treatment token)`);
  for (const m of src.matchAll(FUNC)) report(rel, `color function ${m[0]} (blends live in tokens/treatments.json)`);
  for (const m of src.matchAll(HEX)) report(rel, `hex color ${m[0]}`);
  if (f.endsWith('.css')) for (const [, , value] of src.matchAll(DECL))
    for (const w of value.toLowerCase().match(/[a-z]+/g) ?? []) if (NAMED.has(w)) report(rel, `named color "${w}" in "${value.trim()}"`);
}

// 3. Treatments: token refs, transparent/none, px geometry, or the tint/highlight/hatch forms.
const { foundations, themes } = loadTokens();
const light = Object.values(themes).find((t) => !t.dark).tokens;
const isRef = (r, kinds = 'color|shadow|radius|motion') => typeof r === 'string' && new RegExp(`^\\{(${kinds})\\.[^}]+\\}$`).test(r)
  && (foundations.has(r.slice(1, -1)) || light.has(r.slice(1, -1)));
const alphaOk = (a) => Number.isFinite(a) && a >= 0 && a <= 100;
function check(v, where) {
  if (Array.isArray(v)) return v.forEach((x, i) => check(x, `${where}[${i}]`));
  if (typeof v === 'string') {
    if (isRef(v) || v === 'transparent' || v === 'none' || /^-?\d+(\.\d+)?px$/.test(v)) return;
    return report(where, `"${v}" is not a token ref, transparent, none or a px length`);
  }
  if (v && typeof v === 'object') {
    const keys = Object.keys(v).sort().join(',');
    if (['alpha,tint', 'alpha,highlight', 'alpha,hatch'].includes(keys) && isRef(v.tint ?? v.highlight ?? v.hatch, 'color') && alphaOk(v.alpha)) return;
  }
  report(where, `invalid treatment value ${JSON.stringify(v)}`);
}
const tr = JSON.parse(readFileSync(join(ROOT, 'tokens/treatments.json'), 'utf8'));
for (const [k, v] of Object.entries(tr)) {
  if (k.startsWith('$')) continue;
  const modes = Object.keys(v).sort().join(',');
  if (modes !== 'all' && modes !== 'dark,light') { report(`treatments.${k}`, 'needs "all", or "light" and "dark"'); continue; }
  for (const [mode, val] of Object.entries(v)) check(val, `treatments.${k}.${mode}`);
}

console.log(`check:tokens: ${files.length} source files, ${Object.keys(tr).filter((k) => !k.startsWith('$')).length} treatments; ${bad.length} problems`);
for (const b of bad) console.error('  ' + b);
process.exit(bad.length ? 1 : 0);

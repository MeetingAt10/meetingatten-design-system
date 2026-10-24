// Shared helpers: load W3C DTCG token files, flatten, resolve {aliases}.
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));

function flatten(node, path, type, out) {
  if (node && typeof node === 'object' && '$value' in node) {
    out.set(path.join('.'), { type: node.$type ?? type, value: node.$value, path });
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$') || typeof v !== 'object') continue;
    flatten(v, [...path, k], node.$type ?? type, out);
  }
}

function resolveAll(map, fallback) {
  const get = (name, seen = []) => {
    const t = map.get(name) ?? fallback?.get(name);
    if (!t) throw new Error(`Unresolved token reference {${name}}`);
    if (typeof t.value === 'string') {
      const m = t.value.match(/^\{([^}]+)\}$/);
      if (m) {
        if (seen.includes(m[1])) throw new Error(`Circular alias ${m[1]}`);
        return get(m[1], [...seen, name]);
      }
    }
    return t;
  };
  for (const [name, t] of map) map.set(name, { ...t, value: get(name).value, type: t.type ?? get(name).type });
  return map;
}

export function loadTokens() {
  const foundations = new Map();
  const fdir = join(ROOT, 'tokens/foundations');
  for (const f of readdirSync(fdir).sort()) flatten(readJson(join(fdir, f)), [], undefined, foundations);
  resolveAll(foundations);
  const themes = {};
  const tdir = join(ROOT, 'tokens/themes');
  for (const f of readdirSync(tdir).sort()) {
    const j = readJson(join(tdir, f));
    const m = new Map();
    flatten(j, [], undefined, m);
    resolveAll(m, foundations);
    themes[f.replace('.json', '')] = { dark: !!j.$extensions?.dark, description: j.$description, tokens: m };
  }
  return { foundations, themes };
}

// "color.blue.800" -> "--ds-blue-800"; "size.radius-card" -> "--ds-radius-card"
export const cssName = (name) => '--ds-' + name.replace(/^(color|size)\./, '').replace(/\./g, '-');

export function cssValue(t) {
  const v = t.value;
  switch (t.type) {
    case 'fontFamily': return v.map((f) => (/\s/.test(f) ? `"${f}"` : f)).join(', ');
    case 'cubicBezier': return `cubic-bezier(${v.join(', ')})`;
    case 'shadow': return (Array.isArray(v) ? v : [v]).map((s) => `${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread} ${s.color}`).join(', ');
    default: return String(v);
  }
}

// ---- WCAG ----
export function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}
export function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

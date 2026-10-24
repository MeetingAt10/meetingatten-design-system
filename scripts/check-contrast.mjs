// WCAG contrast check for declared semantic pairs, per theme. Exits 1 on any NEW failure.
// Failures that come from Figma's own values are listed in tokens/figma-known-failures.json (ACCS themes only)
// and reported as "Figma-inherited"; they are never silently changed or hidden.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadTokens, loadTreatments, contrast } from './lib.mjs';

const { pairs, onWashes = [] } = JSON.parse(readFileSync(join(ROOT, 'tokens/contrast-pairs.json'), 'utf8'));
const washes = Object.entries(loadTreatments()).filter(([k]) => k.startsWith('wash-'));
const kf = join(ROOT, 'tokens/figma-known-failures.json');
const known = existsSync(kf) ? JSON.parse(readFileSync(kf, 'utf8')).failures : [];
const { foundations, themes } = loadTokens();
let count = 0, fails = 0, inherited = 0, min = { r: Infinity };
const perTheme = {};
for (const [tn, th] of Object.entries(themes)) {
  const val = (n) => { const t = th.tokens.get('color.' + n) ?? th.tokens.get('color.' + n.replace('-', '.')); if (!t) throw new Error(`${tn}: unknown token ${n}`); return t.value.slice(0, 7); };
  const hex = (r) => (th.tokens.get(r) ?? foundations.get(r)).value.slice(0, 7); // r = 'color.accent.100'
  const washPairs = washes.flatMap(([k, v]) => onWashes.map((fg) => [fg, k, 4.5, 'text on wash', hex((th.dark ? v.dark : v.light).wash.slice(1, -1))]));
  for (const [fg, bg, req, note, bgHex] of [...pairs, ...washPairs]) {
    const r = contrast(val(fg), bgHex ?? val(bg));
    count++;
    perTheme[tn] = Math.min(perTheme[tn] ?? Infinity, r);
    if (r + 1e-9 >= req) { if (r < min.r) min = { r, tn, fg, bg }; continue; }
    const k = known.find((x) => x.theme === tn && x.fg === fg && x.bg === bg);
    if (k) { inherited++; console.warn(`FIGMA-INHERITED ${tn}: ${fg} on ${bg} = ${r.toFixed(2)} (need ${req}) - ${k.note}`); }
    else { fails++; console.error(`FAIL ${tn}: ${fg} on ${bg} = ${r.toFixed(2)} (need ${req}) ${note ?? ''}`); }
  }
}
console.log(`${count} pair checks across ${Object.keys(themes).length} themes (${pairs.length} pairs + ${washes.length * onWashes.length} text-on-wash each); min passing ratio ${min.r.toFixed(2)} (${min.tn}: ${min.fg} on ${min.bg}); ${inherited} Figma-inherited failures; ${fails} new failures`);
console.log('lowest ratio per theme: ' + Object.entries(perTheme).map(([k, r]) => `${k} ${r.toFixed(2)}`).join(', '));
process.exit(fails ? 1 : 0);

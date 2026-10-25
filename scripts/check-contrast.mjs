// WCAG contrast check for declared semantic pairs, per theme. Exits 1 on any failure.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadTokens, loadTreatments, contrast } from './lib.mjs';

const { pairs, onHighlights = [] } = JSON.parse(readFileSync(join(ROOT, 'tokens/contrast-pairs.json'), 'utf8'));
const highlights = Object.entries(loadTreatments()).filter(([k]) => k.startsWith('highlight-'));
const { foundations, themes } = loadTokens();
let count = 0, fails = 0, min = { r: Infinity };
const perTheme = {};
for (const [tn, th] of Object.entries(themes)) {
  const val = (n) => { const t = th.tokens.get('color.' + n) ?? th.tokens.get('color.' + n.replace('-', '.')); if (!t) throw new Error(`${tn}: unknown token ${n}`); return t.value.slice(0, 7); };
  const hex = (r) => (th.tokens.get(r) ?? foundations.get(r)).value.slice(0, 7); // r = 'color.accent.100'
  const highlightPairs = highlights.flatMap(([k, v]) => onHighlights.map((fg) => [fg, k, 4.5, 'text on highlight', hex((th.dark ? v.dark : v.light).slice(1, -1))]));
  for (const [fg, bg, req, note, bgHex] of [...pairs, ...highlightPairs]) {
    const r = contrast(val(fg), bgHex ?? val(bg));
    count++;
    perTheme[tn] = Math.min(perTheme[tn] ?? Infinity, r);
    if (r + 1e-9 >= req) { if (r < min.r) min = { r, tn, fg, bg }; continue; }
    fails++;
    console.error(`FAIL ${tn}: ${fg} on ${bg} = ${r.toFixed(2)} (need ${req}) ${note ?? ''}`);
  }
}
console.log(`${count} pair checks across ${Object.keys(themes).length} themes (${pairs.length} pairs + ${highlights.length * onHighlights.length} text-on-highlight each); min passing ratio ${min.r.toFixed(2)} (${min.tn}: ${min.fg} on ${min.bg}); ${fails} failures`);
console.log('lowest ratio per theme: ' + Object.entries(perTheme).map(([k, r]) => `${k} ${r.toFixed(2)}`).join(', '));
process.exit(fails ? 1 : 0);

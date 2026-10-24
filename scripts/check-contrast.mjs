// WCAG 2.2 contrast check for declared semantic pairs, per theme. Exits 1 on any failure.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadTokens, contrast, luminance } from './lib.mjs';

const pairs = JSON.parse(readFileSync(join(ROOT, 'tokens/contrast-pairs.json'), 'utf8')).pairs;
const { themes } = loadTokens();
let count = 0, fails = 0, min = { r: Infinity };
const solid = (hex) => hex.slice(0, 7);

for (const [tn, th] of Object.entries(themes)) {
  const val = (n) => { const t = th.tokens.get('color.' + n); if (!t) throw new Error(`${tn}: unknown token ${n}`); return solid(t.value); };
  for (const [fg, bg, req, note] of pairs) {
    const r = contrast(val(fg), val(bg));
    count++;
    if (r < min.r) min = { r, tn, fg, bg };
    if (r + 1e-9 < req) { fails++; console.error(`FAIL ${tn}: ${fg} on ${bg} = ${r.toFixed(2)} (need ${req}) ${note ?? ''}`); }
  }
  // sequential ramps must be monotonic in luminance
  const seq = [1, 2, 3, 4, 5].map((i) => luminance(val('viz-seq-' + i)));
  const asc = seq.every((x, i) => i === 0 || x > seq[i - 1]), desc = seq.every((x, i) => i === 0 || x < seq[i - 1]);
  count++;
  if (!asc && !desc) { fails++; console.error(`FAIL ${tn}: viz-seq ramp is not monotonic in luminance`); }
}
console.log(`${count} checks across ${Object.keys(themes).length} themes (${pairs.length} pairs each + ramp check); min ratio ${min.r.toFixed(2)} (${min.tn}: ${min.fg} on ${min.bg}); ${fails} failures`);
process.exit(fails ? 1 : 0);

// Regenerates the Figma-sourced DTCG files from figma/variables-styles.json.
// Source of truth: Figma file HhZBfgDKt4aMudftxOP4Jg, "ACCS 2026 / *" collections and text styles.
// Names are kept as Figma wrote them: "color/action/default" -> path color.action.default.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './lib.mjs';

let d = JSON.parse(readFileSync(join(ROOT, 'figma/variables-styles.json'), 'utf8'));
if (typeof d === 'string') d = JSON.parse(d);
const col = (n) => d.collections.find((c) => c.name.startsWith(n));
const write = (f, o) => writeFileSync(join(ROOT, 'tokens', f), JSON.stringify(o, null, 2) + '\n');
const setPath = (root, path, leaf) => {
  let o = root;
  path.slice(0, -1).forEach((k) => (o = o[k] ??= {}));
  o[path.at(-1)] = leaf;
};
const ref = (s) => `{color.${s.slice(1)}}`.replace(/\//g, '.');

// Primitives (Base)
const prim = { $description: 'Figma "ACCS 2026 / Primitives" (mode Base). Names and values exactly as in Figma.', color: { $type: 'color' } };
for (const v of col('ACCS 2026 / Primitives').vars) setPath(prim.color, v.name.split('/'), { $value: v.vals.Base.toUpperCase() });
write('foundations/color.json', prim);

// Semantic (LIGHT / DARK)
const sem = col('ACCS 2026 / Semantic');
for (const [mode, file, desc] of [['LIGHT', 'accs-light', 'Figma "ACCS 2026 / Semantic" mode LIGHT. Used by accs-landing and accs-admin.'], ['DARK', 'accs-dark', 'Figma "ACCS 2026 / Semantic" mode DARK. Used by accs-admin-dark.']]) {
  const t = { $description: desc, $extensions: { dark: mode === 'DARK', figmaMode: mode }, color: { $type: 'color' } };
  for (const v of sem.vars) {
    const raw = v.vals[mode];
    setPath(t.color, v.name.split('/').slice(1), { $value: raw.startsWith('→') ? ref(raw) : raw });
  }
  write(`themes/${file}.json`, t);
}

// Dimensions
const dim = { space: { $type: 'dimension', $description: 'Figma "ACCS 2026 / Dimensions". Key = pixel value (space/16 = 16px). Tailwind p-4 equals space/16.' },
  radius: { $type: 'dimension', $description: '0 tables, 4 chips, 6 controls, 8 cards, 12 overlays (Figma 03.2).' } };
for (const v of col('ACCS 2026 / Dimensions').vars) { const [g, k] = v.name.split('/'); dim[g][k] = { $value: `${v.vals['Mode 1']}px` }; }
write('foundations/spacing.json', { space: dim.space });
write('foundations/radius.json', { radius: dim.radius });

// Text styles ("ACCS 2026 / Body large" -> type.body-large)
const wmap = { Regular: 400, Medium: 500, 'Semi Bold': 600, SemiBold: 600, Bold: 700 };
const fam = { 'Plus Jakarta Sans': 'display', Inter: 'body', 'JetBrains Mono': 'mono' };
const type = { $description: 'Figma "ACCS 2026 / *" text styles. Sizes converted px -> rem (1rem = 16px) so user text scaling is preserved.', type: {} };
const rem = (px) => `${px / 16}rem`;
for (const s of d.textStyles.filter((x) => x.name.startsWith('ACCS 2026 / '))) {
  const name = s.name.replace('ACCS 2026 / ', '').toLowerCase().replace(/ /g, '-');
  const m = s.font.match(/^(.*?) (Regular|Medium|Semi Bold|SemiBold|Bold)$/);
  type.type[name] = {
    'font-family': { $type: 'fontFamily', $value: `{font.family.${fam[m[1]]}}` },
    'font-weight': { $type: 'fontWeight', $value: wmap[m[2]] },
    size: { $type: 'dimension', $value: rem(s.size) },
    'line-height': { $type: 'dimension', $value: rem(s.lh.value) },
    'letter-spacing': { $type: 'dimension', $value: `${s.ls.value}%`.replace(/^0%$/, '0em') },
  };
}
write('foundations/type.json', type);
console.log('imported from Figma:', prim.color && 'primitives', 'semantic light+dark', 'dimensions', Object.keys(type.type).length + ' text styles');

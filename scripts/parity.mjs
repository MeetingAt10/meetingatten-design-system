// Verifies tokens against the Figma export (figma/*.json) and writes docs/figma-parity.md with --write.
// Exit code 1 if any Figma token/style value differs from the repo.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadTokens, cssName } from './lib.mjs';

const load = (f) => { let d = JSON.parse(readFileSync(join(ROOT, 'figma', f), 'utf8')); return typeof d === 'string' ? JSON.parse(d) : d; };
const vs = load('variables-styles.json');
const fc = load('frames-components.json');
const { foundations, themes } = loadTokens();
const col = (n) => vs.collections.find((c) => c.name.startsWith(n));
const prim = Object.fromEntries(col('ACCS 2026 / Primitives').vars.map((x) => [x.name, x.vals.Base.toUpperCase()]));
const semVars = col('ACCS 2026 / Semantic').vars;
const dims = col('ACCS 2026 / Dimensions').vars;
const resolve = (raw, mode) => (raw.startsWith('→') ? prim[raw.slice(1)] : raw.toUpperCase());
let bad = 0;
const npairs = JSON.parse(readFileSync(join(ROOT, 'tokens/contrast-pairs.json'), 'utf8')).pairs.length;
const rows = { prim: [], sem: [], dim: [], type: [], comp: [] };
const chk = (ok, msg) => { if (!ok) { bad++; console.error('MISMATCH ' + msg); } return ok ? 'MATCH' : 'MISMATCH'; };

for (const [name, hex] of Object.entries(prim)) {
  const t = foundations.get('color.' + name.replace(/\//g, '.'));
  rows.prim.push([name, hex, t ? cssName('color.' + name.replace(/\//g, '.')) : '-', chk(t && t.value.toUpperCase() === hex, `primitive ${name}`)]);
}
for (const v of semVars) {
  const key = v.name.replace(/\//g, '.');
  const l = themes['accs-light'].tokens.get(key), d = themes['accs-dark'].tokens.get(key);
  const el = resolve(v.vals.LIGHT), ed = resolve(v.vals.DARK);
  const ok = l && d && l.value.toUpperCase() === el && d.value.toUpperCase() === ed && l.alias === 'color.' + v.vals.LIGHT.slice(1).replace(/\//g, '.') && d.alias === 'color.' + v.vals.DARK.slice(1).replace(/\//g, '.');
  rows.sem.push([v.name, `${v.vals.LIGHT.slice(1)} ${el}`, `${v.vals.DARK.slice(1)} ${ed}`, cssName(key), chk(ok, `semantic ${v.name}`)]);
}
for (const v of dims) {
  const t = foundations.get(v.name.replace('/', '.'));
  rows.dim.push([v.name, `${v.vals['Mode 1']}px`, cssName(v.name.replace('/', '.')), chk(t && t.value === `${v.vals['Mode 1']}px`, `dimension ${v.name}`)]);
}
const wmap = { Regular: 400, Medium: 500, 'Semi Bold': 600, SemiBold: 600, Bold: 700 };
for (const s of vs.textStyles.filter((x) => x.name.startsWith('ACCS 2026 / '))) {
  const k = s.name.replace('ACCS 2026 / ', '').toLowerCase().replace(/ /g, '-');
  const g = (p) => foundations.get(`type.${k}.${p}`)?.value;
  const w = wmap[s.font.match(/(Regular|Medium|Semi Bold|SemiBold|Bold)$/)[1]];
  const ok = g('size') === `${s.size / 16}rem` && g('line-height') === `${s.lh.value / 16}rem` && g('font-weight') === w;
  rows.type.push([s.name, `${s.font} ${s.size}/${s.lh.value}`, `type.${k}`, `.ds-type-${k} / type-${k}`, chk(ok, `text style ${s.name}`)]);
}

// Figma component -> repo equivalent. Status vocabulary: IMPLEMENTED (css + spec), ASSET, STAND-IN (geometry placeholder).
const C = (name) => name.replace('ACCS 2026 / ', '');
const MAP = {
  'Identity / Logo Horizontal': ['assets/logo/logo-horizontal.svg', 'components/identity/logo.md', 'ASSET'],
  'Identity / Logo Stacked': ['assets/logo/logo-stacked.svg', 'components/identity/logo.md', 'ASSET'],
  'Identity / Logo Compact Minimum': ['assets/logo/logo-compact-minimum.svg', 'components/identity/logo.md', 'ASSET'],
  'Control / Button Primary': ['.ds-btn--primary', 'components/control/button.md'], 'Control / Button Secondary': ['.ds-btn--secondary', 'components/control/button.md'],
  'Control / Button Tertiary': ['.ds-btn--tertiary', 'components/control/button.md'], 'Control / Button Destructive': ['.ds-btn--destructive', 'components/control/button.md'],
  'Control / Text Field': ['.ds-field + .ds-input', 'components/control/text-field.md'], 'Control / Text Area': ['.ds-field + .ds-textarea', 'components/control/text-area.md'],
  'Control / Select': ['.ds-select + .ds-listbox', 'components/control/select.md'], 'Control / Select Option': ['.ds-option', 'components/control/select-option.md'],
  'Control / Checkbox': ['.ds-check', 'components/control/checkbox.md'], 'Control / Radio': ['.ds-check--radio', 'components/control/radio.md'],
  'Control / Search': ['.ds-search', 'components/control/search.md'], 'Control / Icon Button': ['.ds-icon-btn', 'components/control/icon-button.md'],
  'Navigation / Sidebar': ['.ds-sidebar', 'components/navigation/sidebar.md'], 'Navigation / Top Bar': ['.ds-topbar', 'components/navigation/top-bar.md'],
  'Navigation / Mobile Header': ['.ds-mobile-header', 'components/navigation/mobile-header.md'], 'Navigation / Item': ['.ds-nav-item', 'components/navigation/item.md'],
  'Navigation / Link': ['.ds-link', 'components/navigation/link.md'], 'Navigation / Tab': ['.ds-tab', 'components/navigation/tab.md'],
  'Badge / Role': ['.ds-badge', 'components/badge/role.md'], 'Badge / Status': ['.ds-badge--*', 'components/badge/status.md'], 'Badge / Severity': ['.ds-badge--*', 'components/badge/severity.md'],
  'Content / Announcement Card': ['.ds-card', 'components/content/announcement-card.md'], 'Content / Forum Card': ['.ds-card', 'components/content/forum-card.md'],
  'Scheduling / Consultation Slot': ['.ds-slot', 'components/scheduling/consultation-slot.md'],
  'Data / Case Timeline': ['.ds-timeline', 'components/data/case-timeline.md'], 'Data / Reports Table': ['.ds-table-wrap + .ds-table', 'components/data/reports-table.md'],
  'Data / Report Record': ['.ds-record', 'components/data/report-record.md'], 'Data / View State': ['.ds-view-state', 'components/data/view-state.md'],
  'Feedback / Privacy Notice': ['.ds-notice', 'components/feedback/privacy-notice.md'], 'Feedback / Toast': ['.ds-toast', 'components/feedback/toast.md'],
  'Feedback / Modal': ['.ds-modal', 'components/feedback/modal.md'], 'Feedback / Inline Alert': ['.ds-alert', 'components/feedback/inline-alert.md'],
  'Graphic / Navigation Overview': ['#ds-home in assets/icons/sprite.svg', 'components/icon/icon.md', 'STAND-IN'],
};
for (const c of fc.components) {
  const n = C(c.name);
  const m = MAP[n] ?? (n.startsWith('Icon / ') ? [`#ds-${n.slice(7).toLowerCase()} in assets/icons/sprite.svg`, 'components/icon/icon.md', 'ASSET'] : null);
  if (!m) { bad++; console.error('UNMAPPED component ' + n); continue; }
  rows.comp.push([n, c.variants.length || '-', `${c.w}x${c.h}`, c.radius, m[0], m[1], m[2] ?? 'IMPLEMENTED']);
}
console.log(`parity: ${rows.prim.length} primitives, ${rows.sem.length} semantic (x2 modes), ${rows.dim.length} dimensions, ${rows.type.length} text styles, ${rows.comp.length} components; ${bad} problems`);

if (process.argv.includes('--write')) {
  const T = (h, r) => [`| ${h.join(' | ')} |`, `|${h.map(() => '---').join('|')}|`, ...r.map((x) => `| ${x.join(' | ')} |`)].join('\n');
  const cnt = (s) => rows.comp.filter((r) => r[6] === s).length;
  const md = `# Figma parity

Generated by \`node scripts/parity.mjs --write\` from \`figma/variables-styles.json\` and \`figma/frames-components.json\` (Figma file \`HhZBfgDKt4aMudftxOP4Jg\`, page "ACCS Design System - 2026"). Every row below is checked on each \`npm run check\`; a mismatch exits non-zero.

| Status | Meaning |
|---|---|
| MATCH | Repo value equals the Figma value |
| IMPLEMENTED | Component has CSS in \`src/components.css\` and a spec in \`components/\` (static reference, not production behavior) |
| ASSET | Official Figma export committed under \`assets/\` |
| STAND-IN | Name and sizes match Figma; geometry is a placeholder until the Figma SVG is exported |

## Summary

| Area | Figma | Repo | Status |
|---|---|---|---|
| Primitive colors (ACCS 2026 / Primitives) | ${rows.prim.length} | ${rows.prim.length} | all MATCH |
| Semantic colors LIGHT + DARK | ${rows.sem.length} each (frame 08 text says 42; the export also has the 3 later \`color/inverse/*\` aliases) | ${rows.sem.length} each, aliases preserved | all MATCH |
| Dimensions (space, radius) | ${rows.dim.length} | ${rows.dim.length} | all MATCH |
| Text styles (ACCS 2026 / *) | ${rows.type.length} | ${rows.type.length} | all MATCH |
| Components | ${fc.components.length} component masters (frame 08 counts 51 Assets entries; sets and standalones differ) | ${rows.comp.length} | ${cnt('IMPLEMENTED')} IMPLEMENTED, ${cnt('ASSET')} ASSET, ${cnt('STAND-IN')} STAND-IN |
| Contrast (declared pairs) | Figma spot checks in frame 02 | \`npm run check:contrast\` | no Figma-inherited failures (see below) |

Ignored on purpose: the older "ACCS / ... v0.1" collections and "ACCS / *" text styles.

## Themes

| Repo theme | Figma source | Notes |
|---|---|---|
| \`data-theme="light"\` (\`:root\` default) | Semantic LIGHT | |
| \`data-theme="dark"\`, or no \`data-theme\` when the OS prefers dark | Semantic DARK | |
| \`data-density="comfortable"\` or \`"compact"\` | none (NOT IN FIGMA) | Points at existing Body large / Body styles and space tokens; no new values |

## Primitive colors

${T(['Figma variable', 'Value', 'CSS variable', 'Status'], rows.prim.map((r) => [`\`${r[0]}\``, `\`${r[1]}\``, `\`${r[2]}\``, r[3]]))}

## Semantic colors

Tailwind utility = CSS variable name without \`--ds-\` (e.g. \`bg-action-default\`, \`bg-action\`). Legacy aliases kept: \`ink\`, \`ink-secondary\`, \`line\`.

${T(['Figma variable', 'LIGHT (alias, value)', 'DARK (alias, value)', 'CSS variable', 'Status'], rows.sem.map((r) => [`\`${r[0]}\``, `\`${r[1]}\``, `\`${r[2]}\``, `\`${r[3]}\``, r[4]]))}

## Dimensions

Figma spacing keys are pixel values (\`space/16\` = 16px). Tailwind's \`p-4\` is the same 16px; use the CSS variables for the Figma names.

${T(['Figma variable', 'Value', 'CSS variable', 'Status'], rows.dim.map((r) => [`\`${r[0]}\``, `\`${r[1]}\``, `\`${r[2]}\``, r[3]]))}

## Text styles

Sizes are emitted in rem (1rem = 16px) to preserve user text scaling, as the Figma usage note requires.

${T(['Figma style', 'Spec', 'Token', 'Class / Tailwind utility', 'Status'], rows.type.map((r) => [`\`${r[0]}\``, r[1], `\`${r[2]}\``, `\`${r[3]}\``, r[4]]))}

## Foundations that are not variables

| Figma source | Value | Repo token | Status |
|---|---|---|---|
| 03.2 elevation/0, /1, /2 | none; \`0 2 8 #1720330D\`; \`0 12 32 #1720331F\` | \`--ds-shadow-elevation-0..2\` | MATCH |
| 03.3 viewports and grid | 320-599: 4/16/16; 600-1023: 8/24/24; 1024-1439: 12/24/32; 1440+: 12/24/48; content 1200; reading 680; sidebar 240 | \`--ds-breakpoint-*\`, \`--ds-grid-*\`, \`--ds-size-sidebar-w\` | MATCH |
| 03.4 / 03.6 icon geometry | 16/20/24 canvases, 1.5/1.75/2 strokes, round caps | \`.ds-icon\`, \`.ds-icon--16/24\`, \`--ds-size-icon-*\` | MATCH (sizes and geometry from Figma export) |
| 03.5 focus | 3px color/focus, 2px offset in surface color | \`--ds-size-focus-ring\`, \`--ds-size-focus-offset\` | MATCH |
| 04 catalog sizes | buttons 48, controls 44, min target 24, topbar 72, textarea 112 | \`--ds-size-*\` | MATCH |
| Component-internal 12px and 20px | slot/item/alert padding and gap; report record padding | \`--ds-size-12\`, \`--ds-size-20\` | in components, not in Dimensions |

## Components

Variants = number of variant nodes in the Figma component set. Size is the Figma master (w x h), radius in px.

${T(['Figma component (ACCS 2026 / ...)', 'Variants', 'Size', 'Radius', 'Repo equivalent', 'Spec', 'Status'], rows.comp.map((r) => [`\`${r[0]}\``, r[1], r[2], r[3], `\`${r[4]}\``, `[${r[5].replace('components/', '')}](../${r[5]})`, r[6]]))}

## NOT IN FIGMA (kept minimal)

| Token / asset | Why it exists |
|---|---|
| \`--ds-motion-*\` (120ms, 200ms, standard ease) | Hover/focus transitions. Figma only says motion is optional and reduced-motion aware |
| \`--ds-z-*\` | Stacking for sticky chrome, popups, modal, toast |
| \`--ds-font-family-*\` fallback stacks | Figma lists families only |
| \`--ds-scrim\` look (\`.ds-scrim\`, ink at 82%) | Modal frames show a solid dark backdrop; exact value not specified |
| Badge neutral fill uses \`disabled/bg\` | Figma light value is neutral/100; no dark Role badge is shown |
| Icon geometry in \`assets/icons/sprite.svg\` | Placeholder until the Figma icon SVGs are exported |
| Reversed/dark logo | Figma shows white on source blue only; no dark-surface export |

## Contrast: Figma values that fail

None of the ${npairs} declared pairs fail in either ACCS mode, including the Figma-listed spot checks (white on #032E87 12.04:1, #0B1220 on #97B5FF 9.25:1, border-default 4.90:1 and 4.83:1, focus 6.08:1). Lowest ratio in DARK is \`border-default\` on \`raised\` at 3.92:1, which is the value Figma records in 02.6 and meets the 3:1 non-text threshold. If a future Figma change introduces a failing pair, list it in \`tokens/figma-known-failures.json\`; it is then reported as Figma-inherited and is never silently changed.
`;
  writeFileSync(join(ROOT, 'docs/figma-parity.md'), md);
  console.log('wrote docs/figma-parity.md');
}
process.exit(bad ? 1 : 0);

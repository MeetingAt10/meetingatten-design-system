# Color

Three layers: **primitives** (scales, never used in product code) -> **semantic tokens** (per theme, what you use) -> **component styles**.

## Anchors (fixed from Figma)

| Swatch | Hex | Scale step |
|---|---|---|
| Blue | `#032E87` | `blue-800` |
| Navy ink | `#172033` | `ink-900` |
| White | `#FFFFFF` | `white` |

## Primitive scales (50-950)

| Scale | Role | 50 | 500 | 800 | 950 |
|---|---|---|---|---|---|
| `blue` | Brand, actions, info | `#EEF4FF` | `#3A63E0` | `#032E87` | `#08173F` |
| `ink` | Neutrals (cool slate) | `#F6F8FB` | `#6A7589` | `#273148` | `#0C111D` |
| `teal` | ACCS accent (only accent) | `#E6F8F5` | `#14958A` | `#0A4E4B` | `#042625` |
| `sun` | Meeting At 10 accent | `#FFF6EC` | `#E8650A` | `#81350D` | `#3A1506` |
| `paper` | Meeting At 10 warm neutrals (50-300) | `#FBF8F3` | - | - | - |
| `green` `amber` `red` | Status only | full 50-950 | | | |
| `rose` `olive` `sky` | Data visualization only (400/600/700) | | | | |

Purple is removed from the system.

## Semantic tokens

Same names in every theme; values differ. Tailwind utility = `bg-<name>`, `text-<name>`, `border-<name>`. CSS = `var(--ds-<name>)`.

| Token | Use |
|---|---|
| `canvas` | Page background |
| `surface` / `surface-raised` | Cards, panels / popovers, modals |
| `surface-sunken` | Alternating bands, table headers, hover rows |
| `ink` / `ink-secondary` / `ink-muted` | Primary / supporting / hint text (all 4.5:1 on every surface) |
| `line` | Decorative dividers (exempt from contrast) |
| `line-strong` | Input and control borders (3:1) |
| `action`, `action-hover`, `on-action` | Primary button and filled controls |
| `action-subtle`, `action-subtle-fg` | Selected nav, selected row, role badge |
| `link` | Inline links (4.5:1) |
| `focus` | Focus ring (3:1) |
| `accent`, `on-accent`, `accent-bg`, `accent-fg` | Single accent: teal (ACCS) or sun (Meeting At 10) |
| `info-*`, `success-*`, `warning-*`, `danger-*` | `-bg` / `-fg` for badges and alerts; bare `success`/`warning`/`danger` for icons, dots, borders |
| `on-danger` | Text on solid `danger` |
| `inverse`, `inverse-ink`, `inverse-ink-muted` | Footer and dark bands |
| `overlay` | Modal scrim |
| `viz-cat-1..7`, `viz-seq-1..5`, `viz-div-1..5` | Charts, see [data-visualization](../docs/data-visualization.md) |

## Rules

| Rule | Why |
|---|---|
| Never use a primitive in components | Themes would stop working |
| Never convey meaning by color alone | Pair with text or icon (badges carry a label) |
| One accent per surface | Teal for ACCS, sun for Meeting At 10, never both |
| Status colors are for status | Not decoration |
| Add a pair to `tokens/contrast-pairs.json` for any new text/background token | `npm run check:contrast` enforces AA |

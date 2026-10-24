---
demo: Swatches
---
# Color

Source: Figma "ACCS 2026 / Primitives" (54 colors) and "ACCS 2026 / Semantic" (LIGHT / DARK). Full value tables: [docs/figma-parity.md](../docs/figma-parity.md). Use purpose, not hex, in product UI. All choices are **PROPOSED** in Figma; institutional color approval is pending.

## Source palette (preserved exactly)

| Token | Hex | Role |
|---|---|---|
| `brand/source-blue` | `#032E87` | Primary identity and light-theme actions |
| `brand/source-ink` | `#172033` | Primary text and dark-theme surface |
| `brand/source-white` | `#FFFFFF` | Base surface and reversed identity |

## Primitive families

| Family | Steps | Notes |
|---|---|---|
| `neutral` | 0, 50, 100, 200, 500, 700, 900, 950 + `dark-raised`, `dark-secondary`, `dark-border` | Deliberate steps, not equal interpolation |
| `brand` | `source-*`, `hover`, `pressed`, `dark-default/hover/pressed`, `focus-light` | Dark uses lighter blue actions with dark `on-action` text, not a naive inversion |
| `success`, `warning`, `info` | 50, 300, 700, 950 | Status is always paired with text or an icon |
| `danger` | 50, 100, 300, 400, 700, 800, 900, 950 | 100/400/800/900 back the destructive action aliases |
| `secondary` (teal) | 50, 100, 300, 600, 700, 800, 950 | Hierarchy variant, not automatic teal; never permission or confidentiality. Do not use /600 as foreground without testing |
| `accent` (purple) | 50, 100, 300, 600, 700, 800, 950 | Optional category; never permission or confidentiality. Source blue stays the dominant primary action |

## Semantic tokens (LIGHT / DARK)

Names are Figma's (`color/action/default` -> `--ds-action-default`, Tailwind `bg-action` / `bg-action-default`).

| Group | Tokens |
|---|---|
| Surfaces | `canvas`, `surface`, `raised` |
| Text | `text-primary`, `text-secondary` |
| Borders | `border-default` (control boundary), `border-strong`, `border-subtle` (decorative divider only) |
| Action | `action/default`, `action/hover`, `action/pressed`, `on-action`, `focus` |
| Disabled | `disabled/bg`, `disabled/fg` (labels stay readable) |
| Status | `success/fg|bg`, `warning/fg|bg`, `danger/fg|bg`, `info/fg|bg`, `success/on-inverse` |
| Secondary | `secondary/default|hover|pressed|on-solid|bg|fg|border` |
| Accent | `accent/default|hover|pressed|on-solid|bg|fg|border` |
| Destructive | `danger/action|action-hover|action-pressed|on-action` |
| Inverse (toast, inverse icon button) | `inverse/hover`, `inverse/pressed`, `inverse/focus` |

## Rules (Figma 02.3)

| Rule | Detail |
|---|---|
| Boundaries | Default control boundaries use `border-default`, not the decorative `neutral/200` divider |
| Disabled | Keeps readable labels, non-interactive; explain why where the reason is not obvious |
| Dark | Raised is distinguished by border and surface tone before shadow |
| Status | Never color alone: words or symbols |
| Roles | A role badge is neither a privacy nor a status signal; never style roles as severity |
| Validation | Spot checks are not certification; test all implemented states and adjacent surfaces |

Decorative washes, card and overlay shadows and the scrim are treatments built from these colors: see [treatments.md](treatments.md).

Contrast gate: `npm run check:contrast` (50 pairs plus 9 text-on-wash checks per theme). Figma spot checks (frame 02): white on `#032E87` 12.04:1, secondary `#46516A` on white 7.94:1, boundary `#65718A` on white 4.90:1; dark `#0B1220` on `#97B5FF` 9.25:1, boundary `#7D8DA6` on `#172033` 4.83:1; light focus 6.08:1.

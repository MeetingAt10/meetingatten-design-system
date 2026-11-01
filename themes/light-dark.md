# Light and dark

Two themes from the pinned semantic mapping: `light` is the default and `dark` is a remapping, not an inversion. With no attribute, the page follows the OS.

Every surface (ACCS landing, ACCS portal and admin, Meeting At 10) uses the same two themes. Density is a separate setting ([density.md](density.md)).

## Choosing a theme

| Markup | Result |
|---|---|
| no `data-theme` | Follows the OS (`prefers-color-scheme`); light when there is no preference |
| `data-theme="light"` | Always light |
| `data-theme="dark"` | Always dark |

`data-theme` works on any element, so a subtree can show the other theme (the design system site shows every demo on a light and a dark sheet side by side). Each theme block also sets `color-scheme`, so native scrollbars and form parts follow.

## What changes

| Token | Light | Dark |
|---|---|---|
| Canvas / surface / raised | `#F7F6F1` / `#FFFFFF` / `#FFFFFF` | `#070D1C` / `#0C1730` / `#121C35` |
| Text primary / secondary | `#0C1730` / `#4A5570` | `#F7F6F1` / `#A3ADC4` |
| Border default / strong / subtle | `#6B7590` / `#4A5570` / `#E4E1D6` | `#7D8AA8` / `#A3ADC4` / `#121C35` |
| Action default / hover / pressed | `#032E87` / `#022568` / `#011B4F` | `#7C9BFF` / `#A3B8FF` / `#5F82F5` |
| On-action / focus | `#FFFFFF` / `#2F5BEA` | `#070D1C` / `#7C9BFF` |
| Plate bg / fg | `#032E87` / `#FFFFFF` (navy plate) | `#7C9BFF` / `#070D1C` (pale blue plate) |
| Now | `#B42318` | `#FDA29B` |
| Inverse bg / fg / muted | `#0C1730` / `#F7F6F1` / `#A3ADC4` | `#F7F6F1` / `#0C1730` / `#4A5570` |
| Hatch ink | `#6B7590` | `#7D8AA8` |

The full mapping is in [color.md](../foundations/color.md).

## Treatments in dark

| Treatment | Dark behavior |
|---|---|
| Overlays | Sit on `raised` with a 1px top highlight; shadows are deeper and black |
| Solid blocks and plates | Keep a thin top highlight so their edge reads on the dark canvas |
| Highlighter washes | Use the 950 steps (and dark raised for neutral) instead of the 50 and 100 steps |
| Hatching | Heavier: hatch ink at 55% instead of 45% |
| Today's column | Dark raised instead of info 50 |
| Scrim | Neutral 950 at 72% instead of source ink at 48% |

Lane fills switch to their pale steps (emerald 300, amber 300, blue `#7C9BFF`) with dark text on top. Raised surfaces are told apart by tone and edge before shadow; avoid luminous or colored shadows.

## Remembering a choice

Set the attribute before first paint, and store only an explicit choice so "no choice" keeps following the OS:

```js
const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null
if (saved) document.documentElement.dataset.theme = saved;
```

In Next.js, put this in an inline script in the root layout's `<head>` and add `suppressHydrationWarning` to `<html>`.

## Checks

| Check | How |
|---|---|
| Contrast | `npm run check:contrast` runs every declared pair in both themes |
| Real pages | Review every state in both themes; run axe on light and dark |
| Forced colors | Windows High Contrast ignores both themes and uses system colors ([accessibility checklist](../docs/accessibility-checklist.md)) |

# Color

The pinned ACCS palette (54 primitives), its light and dark semantic mapping, the four lanes and the Office Hours additions.

The palette and the semantic mapping are pinned by the user (decision 2026-10-25). They change only by an explicit decision, never as a side effect of a redesign. Product code uses semantic and treatment tokens (`--ds-surface`, `--ds-highlight-consult`), never primitives or hex. `npm run check:tokens` rejects hex, color functions and primitive variables in `src/` and `site/`.

## Pinned palette

| Family | Steps |
|---|---|
| `brand` | `source-blue` `#032E87`, `source-ink` `#172033`, `source-white` `#FFFFFF`, `hover` `#022568`, `pressed` `#011B4F`, `dark-default` `#97B5FF`, `dark-hover` `#B8CDFF`, `dark-pressed` `#729AFF`, `focus-light` `#3157D5` |
| `neutral` | `0` `#FFFFFF`, `50` `#F5F7FB`, `100` `#EDF1F7`, `200` `#DCE2EC`, `500` `#65718A`, `700` `#46516A`, `900` `#172033`, `950` `#0B1220`, `dark-raised` `#22304A`, `dark-secondary` `#B8C4D9`, `dark-border` `#7D8DA6` |
| `success` | `50` `#F0FDF4`, `300` `#86EFAC`, `700` `#166534`, `950` `#052E16` |
| `warning` | `50` `#FFFBEB`, `300` `#FCD34D`, `700` `#854D0E`, `950` `#451A03` |
| `danger` | `50` `#FEF3F2`, `100` `#FEE4E2`, `300` `#FDA29B`, `400` `#F97066`, `700` `#B42318`, `800` `#9C1F16`, `900` `#801A13`, `950` `#55160C` |
| `info` | `50` `#EFF4FF`, `300` `#97B5FF`, `700` `#032E87`, `950` `#011B4F` |
| `secondary` (teal) | `50` `#E8FAF7`, `100` `#C8F2E9`, `300` `#5EEAD4`, `600` `#0D9488`, `700` `#08746E`, `800` `#075D59`, `950` `#042F2E` |
| `accent` (violet) | `50` `#F4EEFF`, `100` `#E9DDFF`, `300` `#C4B5FD`, `600` `#7040C7`, `700` `#55309B`, `800` `#45257D`, `950` `#2E1065` |

Source: `tokens/foundations/color.json`. Primitives are emitted as `--ds-<family>-<step>` for the design system's own treatments only.

## Identity colors

The Meeting At 10 logo has four colors of its own (`tokens/foundations/identity.json`, user decision 2026-10-25). They are not part of the 54 primitives and never interface color: they paint only the logo artwork, through the `logo-*` treatments ([treatments](treatments.md)).

| Token | Value | Paints |
|---|---|---|
| `color.identity.m10-navy` | `#031B38` | Calendar frame and binding tabs on light grounds; the page on dark grounds |
| `color.identity.m10-paper` | `#F7F8FA` | Calendar page on light grounds |
| `color.identity.m10-blue` | `#0075FF` | Appointment block, on every ground |
| `color.identity.m10-frost` | `#E8EEF7` | Calendar frame and binding tabs on dark grounds |

The numeral is `brand.source-white`. Like the primitives, the identity colors are emitted as `--ds-identity-<name>` for the treatments only; the [Logo](../components/identity/logo.md) reads `--ds-logo-*`.

## Semantic tokens

`data-theme="light"` is the `:root` default; `data-theme="dark"` or an OS dark preference switches the mapping ([light-dark.md](../themes/light-dark.md)). Each token is `--ds-<name>` in CSS and `<name>` in Tailwind (`bg-surface`, `text-text-primary`, `bg-action`).

| Token | Light | Dark | Use |
|---|---|---|---|
| `canvas` | `#F5F7FB` neutral 50 | `#0B1220` neutral 950 | The cool canvas under every sheet |
| `surface` | `#FFFFFF` | `#172033` source ink | Sheets, cards, inputs |
| `raised` | `#FFFFFF` | `#22304A` dark raised | Overlays in dark (modal, drawer, popover) |
| `text-primary` | `#172033` | `#F5F7FB` | Body and headings |
| `text-secondary` | `#46516A` | `#B8C4D9` | Meta, help text, hour labels |
| `border-default` | `#65718A` | `#7D8DA6` | Control boundaries (3:1) |
| `border-strong` | `#46516A` | `#B8C4D9` | Hovered controls |
| `border-subtle` | `#DCE2EC` | `#22304A` | Hairline rules only, never a control boundary |
| `action-default` / `-hover` / `-pressed` | `#032E87` / `#022568` / `#011B4F` | `#97B5FF` / `#B8CDFF` / `#729AFF` | Primary actions, links, the schedule lane, current items |
| `on-action` | `#FFFFFF` | `#0B1220` | Text on action fills |
| `focus` | `#3157D5` | `#97B5FF` | Focus ring |
| `disabled-bg` / `disabled-fg` | `#EDF1F7` / `#46516A` | `#22304A` / `#B8C4D9` | Disabled ground; labels stay readable |
| `success-fg` / `-bg` / `-on-inverse` | `#166534` / `#F0FDF4` / `#86EFAC` | `#86EFAC` / `#052E16` / `#166534` | Done, saved |
| `warning-fg` / `-bg` | `#854D0E` / `#FFFBEB` | `#FCD34D` / `#451A03` | Needs attention |
| `danger-fg` / `-bg` | `#B42318` / `#FEF3F2` | `#FDA29B` / `#55160C` | Errors |
| `danger-action` / `-hover` / `-pressed` / `danger-on-action` | `#B42318` / `#9C1F16` / `#801A13` / `#FFFFFF` | `#FDA29B` / `#FEE4E2` / `#F97066` / `#0B1220` | Destructive buttons |
| `info-fg` / `-bg` | `#032E87` / `#EFF4FF` | `#97B5FF` / `#011B4F` | Neutral information |
| `secondary-default` / `-hover` / `-pressed` | `#08746E` / `#075D59` / `#042F2E` | `#5EEAD4` / `#C8F2E9` / `#E8FAF7` | The consult lane |
| `secondary-on-solid` / `-bg` / `-fg` / `-border` | `#FFFFFF` / `#E8FAF7` / `#075D59` / `#08746E` | `#0B1220` / `#042F2E` / `#5EEAD4` / `#5EEAD4` | Text on teal, tints, outlines |
| `accent-default` / `-hover` / `-pressed` | `#55309B` / `#45257D` / `#2E1065` | `#C4B5FD` / `#E9DDFF` / `#F4EEFF` | The community lane |
| `accent-on-solid` / `-bg` / `-fg` / `-border` | `#FFFFFF` / `#F4EEFF` / `#45257D` / `#55309B` | `#0B1220` / `#2E1065` / `#C4B5FD` / `#C4B5FD` | Text on violet, tints, outlines |
| `inverse-hover` / `-pressed` / `-focus` | `#46516A` / `#032E87` / `#97B5FF` | `#EDF1F7` / `#DCE2EC` / `#032E87` | Controls on the inverse sheet |

## Office Hours additions

The redesign added theme tokens only. No primitive changed.

| Token | Light | Dark | Use |
|---|---|---|---|
| `now` | `#B42318` danger 700 | `#FDA29B` danger 300 | The now-line, its dot and time label, today dots, unread dots |
| `hatch-ink` | `#65718A` neutral 500 | `#7D8DA6` dark border | Ink for hatching on taken or restricted areas |
| `inverse-bg` | `#172033` | `#F5F7FB` | Toast and tooltip sheet, code blocks |
| `inverse-fg` | `#F5F7FB` | `#172033` | Text on the inverse sheet |
| `inverse-muted` | `#B8C4D9` | `#46516A` | Secondary text on the inverse sheet |
| `plate-bg` | `#032E87` | `#97B5FF` | Door plate, today's date plate, plate bands |
| `plate-fg` | `#FFFFFF` | `#0B1220` | Text on the plate |

`now` shares the danger hue. The now-line always carries its time label, and error messages always carry words, so the two never rely on color to be told apart.

## Lanes

A lane is a kind of time in the college week. Its color owns the whole block at full strength; it is never sprinkled as an accent.

| Lane | Solid block | Text on block | Outline (open, pending) | Highlighter | Holds |
|---|---|---|---|---|---|
| `schedule` (default) | `action-default` (navy) | `on-action` | `action-default` | `highlight-schedule` | Classes, department schedule, the brand |
| `community` | `accent-default` (violet) | `accent-on-solid` | `accent-border` | `highlight-community` | Forum, announcements, events |
| `consult` | `secondary-default` (teal) | `secondary-on-solid` | `secondary-border` | `highlight-consult` | Consultations and support |
| `restricted` | `surface` with `--ds-hatch` | `text-primary` | `border-default` | `highlight-neutral` | Reports and restricted records |

The restricted lane has no hue on purpose: color never signals confidentiality or permission. It is drawn with hatching and always labeled in words ("Reports: your own records only").

## Highlighter washes

Flat washes for hover rows, search hits, selection and emphasis ([treatments.md](treatments.md)).

| Treatment | Light | Dark |
|---|---|---|
| `--ds-highlight-schedule` | info 50 | info 950 |
| `--ds-highlight-community` | accent 100 | accent 950 |
| `--ds-highlight-consult` | secondary 100 | secondary 950 |
| `--ds-highlight-neutral` | neutral 100 | dark raised |
| `--ds-highlight-mark` | warning 300 | warning 950 |

Tailwind exposes them as `bg-highlight-schedule` and so on. `::selection` uses the mark wash.

## Rules

| Rule | Detail |
|---|---|
| Purpose, not hex | Pick the semantic token for the job; never a primitive in product code |
| Color reinforces, never carries | Status, severity and availability always have words, and line forms where they apply |
| Boundaries | Controls use `border-default` (3:1); `border-subtle` is for hairline rules only |
| Lanes are not permissions | Violet, teal and navy never mean access level or confidentiality |
| Dark is a mapping, not an inversion | Actions turn pale blue with dark `on-action` text; overlays sit on `raised` |
| Status families stay apart | `success`, `warning`, `danger`, `info` keep their meaning; do not reuse them as lane or chart colors |

## Contrast checks

`npm run check:contrast` checks every pair in `tokens/contrast-pairs.json` (61 pairs) plus `text-primary`, `text-secondary` and `action-default` on each of the five highlighter washes, in both themes. Text pairs need 4.5:1; boundaries, the focus ring, the now-line and graphics need 3:1. Any failure exits 1 and blocks CI.

| Pair | Light | Dark | Needs |
|---|---|---|---|
| `text-primary` on `surface` | 16.27 | 15.17 | 4.5 |
| `text-secondary` on `surface` | 7.94 | 9.25 | 4.5 |
| `border-default` on `surface` | 4.90 | 4.83 | 3 |
| `focus` on `surface` | 6.08 | 8.03 | 3 |
| `on-action` on `action-default` | 12.04 | 9.25 | 4.5 |
| `secondary-on-solid` on `secondary-default` | 5.62 | 12.66 | 4.5 |
| `accent-on-solid` on `accent-default` | 9.20 | 10.14 | 4.5 |
| `now` on `surface` | 6.57 | 8.38 | 3 |
| `plate-fg` on `plate-bg` | 12.04 | 9.25 | 4.5 |
| `inverse-fg` on `inverse-bg` | 15.17 | 15.17 | 4.5 |
| `inverse-muted` on `inverse-bg` | 9.25 | 7.40 | 4.5 |
| `hatch-ink` on `surface` | 4.90 | 4.83 | 3 |
| `text-secondary` on `highlight-community` | 6.14 | 8.66 | 4.5 |

Hatching is drawn at 45% (light) or 55% (dark) of `hatch-ink`, so it is a texture, not the signal. The word next to it carries the state. Passing ratios are not a certification; test real states in context ([accessibility checklist](../docs/accessibility-checklist.md)).

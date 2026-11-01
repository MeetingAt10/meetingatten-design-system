# Color

The pinned ACCS palette (54 primitives), its light and dark semantic mapping, the four lanes and the Office Hours additions.

The palette and the semantic mapping are pinned by the user (decision 2026-10-25). They change only by an explicit decision, never as a side effect of a redesign. Product code uses semantic and treatment tokens (`--ds-surface`, `--ds-highlight-consult`), never primitives or hex. `npm run check:tokens` rejects hex, color functions and primitive variables in `src/` and `site/`.

## Pinned palette

| Family | Steps |
|---|---|
| `brand` | `source-blue` `#032E87`, `source-ink` `#0C1730`, `source-white` `#FFFFFF`, `hover` `#022568`, `pressed` `#011B4F`, `dark-default` `#7C9BFF`, `dark-hover` `#A3B8FF`, `dark-pressed` `#5F82F5`, `focus-light` `#2F5BEA` |
| `neutral` | `0` `#FFFFFF`, `50` `#F7F6F1`, `100` `#EFEDE5`, `200` `#E4E1D6`, `500` `#6B7590`, `700` `#4A5570`, `900` `#0C1730`, `950` `#070D1C`, `dark-raised` `#121C35`, `dark-secondary` `#A3ADC4`, `dark-border` `#7D8AA8` |
| `success` | `50` `#E6F5EE`, `300` `#3CCB98`, `700` `#0A6B49`, `950` `#062B1E` |
| `warning` | `50` `#FFF6E0`, `300` `#F5C451`, `700` `#8A4B06`, `950` `#3A2003` |
| `danger` | `50` `#FEF3F2`, `100` `#FEE4E2`, `300` `#FDA29B`, `400` `#F97066`, `700` `#B42318`, `800` `#9C1F16`, `900` `#801A13`, `950` `#55160C` |
| `info` | `50` `#EAF0FF`, `300` `#7C9BFF`, `700` `#032E87`, `950` `#011B4F` |
| `secondary` (emerald) | `50` `#E6F5EE`, `100` `#CDEBDD`, `300` `#3CCB98`, `600` `#0E9467`, `700` `#0A7A55`, `800` `#075C41`, `950` `#04271C` |
| `accent` (amber) | `50` `#FCF1DF`, `100` `#F8E3BC`, `300` `#F2B154`, `600` `#B25E09`, `700` `#9A5008`, `800` `#7C3F06`, `950` `#3A1D03` |

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
| `canvas` | `#F7F6F1` neutral 50 | `#070D1C` neutral 950 | The cool canvas under every sheet |
| `surface` | `#FFFFFF` | `#0C1730` source ink | Sheets, cards, inputs |
| `raised` | `#FFFFFF` | `#121C35` dark raised | Overlays in dark (modal, drawer, popover) |
| `text-primary` | `#0C1730` | `#F7F6F1` | Body and headings |
| `text-secondary` | `#4A5570` | `#A3ADC4` | Meta, help text, hour labels |
| `border-default` | `#6B7590` | `#7D8AA8` | Control boundaries (3:1) |
| `border-strong` | `#4A5570` | `#A3ADC4` | Hovered controls |
| `border-subtle` | `#E4E1D6` | `#121C35` | Hairline rules only, never a control boundary |
| `action-default` / `-hover` / `-pressed` | `#032E87` / `#022568` / `#011B4F` | `#7C9BFF` / `#A3B8FF` / `#5F82F5` | Primary actions, links, the schedule lane, current items |
| `on-action` | `#FFFFFF` | `#070D1C` | Text on action fills |
| `focus` | `#2F5BEA` | `#7C9BFF` | Focus ring |
| `disabled-bg` / `disabled-fg` | `#EFEDE5` / `#4A5570` | `#121C35` / `#A3ADC4` | Disabled ground; labels stay readable |
| `success-fg` / `-bg` / `-on-inverse` | `#0A6B49` / `#E6F5EE` / `#3CCB98` | `#3CCB98` / `#062B1E` / `#0A6B49` | Done, saved |
| `warning-fg` / `-bg` | `#8A4B06` / `#FFF6E0` | `#F5C451` / `#3A2003` | Needs attention |
| `danger-fg` / `-bg` | `#B42318` / `#FEF3F2` | `#FDA29B` / `#55160C` | Errors |
| `danger-action` / `-hover` / `-pressed` / `danger-on-action` | `#B42318` / `#9C1F16` / `#801A13` / `#FFFFFF` | `#FDA29B` / `#FEE4E2` / `#F97066` / `#070D1C` | Destructive buttons |
| `info-fg` / `-bg` | `#032E87` / `#EAF0FF` | `#7C9BFF` / `#011B4F` | Neutral information |
| `secondary-default` / `-hover` / `-pressed` | `#0A7A55` / `#075C41` / `#04271C` | `#3CCB98` / `#CDEBDD` / `#E6F5EE` | The consult lane |
| `secondary-on-solid` / `-bg` / `-fg` / `-border` | `#FFFFFF` / `#E6F5EE` / `#075C41` / `#0A7A55` | `#070D1C` / `#04271C` / `#3CCB98` / `#3CCB98` | Text on emerald, tints, outlines |
| `accent-default` / `-hover` / `-pressed` | `#9A5008` / `#7C3F06` / `#3A1D03` | `#F2B154` / `#F8E3BC` / `#FCF1DF` | The community lane |
| `accent-on-solid` / `-bg` / `-fg` / `-border` | `#FFFFFF` / `#FCF1DF` / `#7C3F06` / `#9A5008` | `#070D1C` / `#3A1D03` / `#F2B154` / `#F2B154` | Text on amber, tints, outlines |
| `inverse-hover` / `-pressed` / `-focus` | `#4A5570` / `#032E87` / `#7C9BFF` | `#EFEDE5` / `#E4E1D6` / `#032E87` | Controls on the inverse sheet |

## Office Hours additions

The redesign added theme tokens only. No primitive changed.

| Token | Light | Dark | Use |
|---|---|---|---|
| `now` | `#B42318` danger 700 | `#FDA29B` danger 300 | The now-line, its dot and time label, today dots, unread dots |
| `hatch-ink` | `#6B7590` neutral 500 | `#7D8AA8` dark border | Ink for hatching on taken or restricted areas |
| `inverse-bg` | `#0C1730` | `#F7F6F1` | Toast and tooltip sheet, code blocks |
| `inverse-fg` | `#F7F6F1` | `#0C1730` | Text on the inverse sheet |
| `inverse-muted` | `#A3ADC4` | `#4A5570` | Secondary text on the inverse sheet |
| `plate-bg` | `#032E87` | `#7C9BFF` | Door plate, today's date plate, plate bands |
| `plate-fg` | `#FFFFFF` | `#070D1C` | Text on the plate |

`now` shares the danger hue. The now-line always carries its time label, and error messages always carry words, so the two never rely on color to be told apart.

## Lanes

A lane is a kind of time in the college week. Its color owns the whole block at full strength; it is never sprinkled as an accent.

| Lane | Solid block | Text on block | Outline (open, pending) | Highlighter | Holds |
|---|---|---|---|---|---|
| `schedule` (default) | `action-default` (navy) | `on-action` | `action-default` | `highlight-schedule` | Classes, department schedule, the brand |
| `community` | `accent-default` (amber) | `accent-on-solid` | `accent-border` | `highlight-community` | Forum, announcements, events |
| `consult` | `secondary-default` (emerald) | `secondary-on-solid` | `secondary-border` | `highlight-consult` | Consultations and support |
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
| Lanes are not permissions | Amber, emerald and navy never mean access level or confidentiality |
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

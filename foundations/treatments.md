# Treatments and materials

The Office Hours materials (sheet, rules, blocks, hatch, highlighter, plate, scrim, art shadow, dim) as repo-owned treatment tokens built only from palette and theme tokens.

Treatments live in `tokens/treatments.json`. The build emits each one as `--ds-<name>` inside every theme block of `dist/tokens.css`, so a dark subtree resolves the dark value. Components read treatments; they never blend colors themselves.

## Materials

| Material | Tokens | Classes | What it is |
|---|---|---|---|
| Sheet | `--ds-sheet-bg` (surface), `--ds-sheet-rule` (border subtle), `--ds-radius-sheet` | `.ds-sheet` (`--pad`, `--flush`), `.ds-card`, `.ds-timetable`, `.ds-table-wrap` | Paper on the cool canvas: flat, one 1px rule, no shadow at rest |
| Rules | `--ds-size-rule` (1px), `border-subtle`, `--ds-rule-minor` (border subtle at 60%) | `.ds-rule`, `.ds-divider`, `hr` | Hairlines. Where a grid is drawn it is a real, labeled time grid: hour rules and lighter half-hour rules |
| Block | Lane tokens, `--ds-radius-block`, `--ds-block-shadow`, `--ds-btn-highlight` | `.ds-block`, `.ds-tile`, `.ds-card__lane`, `.ds-agenda__chip` | The lane color owns the whole fill at full strength |
| Hatch | `--ds-hatch` (hatch ink at 45% light, 55% dark), `--ds-hatch-strong` (80%, 90%) | `background-image: var(--ds-hatch)` | Diagonal hairlines every 7px on taken or restricted areas, always next to a word |
| Highlighter | `--ds-highlight-schedule`, `-community`, `-consult`, `-neutral`, `-mark` | `.ds-highlight`, hover rows, `::selection` | Flat washes behind text and rows; swiped in from the left |
| Plate | `--ds-plate-bg`, `--ds-plate-fg`, `--ds-radius-plate`, `--ds-plate-shadow` | `.ds-plate`, `.ds-section--plate`, `.ds-btn--plate` | The door plate: navy with white display type (pale blue with dark type in dark) |
| Today | `--ds-today-bg` | `.ds-timetable__day.is-today` | Today's column tint on the week sheet |
| Scrim | `--ds-scrim` (source ink at 48% light, neutral 950 at 72% dark) | `.ds-modal-overlay`, `.ds-drawer-overlay` | Dims the page behind dialogs and drawers |
| Art shadow | `--ds-art-shadow` (source ink at 30% light, neutral 950 at 70% dark) | `.ds-art` | The ink shadow under a floating brand render, which follows its alpha edge |
| Dim | `--ds-dim` (surface at 45%) | none yet | A paper veil over content; available, not used by a component yet |

Elevation and radius treatments are covered in [elevation.md](elevation.md) and [radius.md](radius.md).

## All treatments

| Treatment | Light | Dark | Use |
|---|---|---|---|
| `sheet-bg` | `surface` | `surface` | Sheet and card ground |
| `sheet-rule` | `border-subtle` | `border-subtle` | Sheet and card rule |
| `block-shadow` | `shadow.lift` | `shadow.lift-dark` | Lifted blocks, hovered linked cards |
| `overlay-bg` | `surface` | `raised` | Menus, popovers, dialogs, drawers |
| `overlay-shadow` | `shadow.overlay` | `shadow.overlay-dark` + 1px top highlight (dark border, 35%) | Floating surfaces |
| `plate-shadow` | none | 1px top highlight (dark hover blue, 60%) | Door plate edge in dark |
| `btn-highlight` | 1px top highlight (white, 14%) | white, 35% | Top edge of solid buttons, current items, the chosen day |
| `rule-minor` | border subtle at 60% | same | Half-hour rules |
| `highlight-schedule` | info 50 | info 950 | Schedule wash, hover on options, rows and secondary buttons |
| `highlight-community` | accent 100 | accent 950 | Community wash |
| `highlight-consult` | secondary 100 | secondary 950 | Consult wash |
| `highlight-neutral` | neutral 100 | dark raised | Neutral hover, counts, segmented track |
| `highlight-mark` | warning 300 | warning 950 | Search hits, text selection, the default Highlight |
| `today-bg` | info 50 | dark raised | Today's column |
| `hatch` | hatch ink, 45% | hatch ink, 55% | Taken and restricted fills |
| `hatch-strong` | hatch ink, 80% | hatch ink, 90% | Small hatched markers (restricted lane chips, legend swatches, timeline markers) |
| `scrim` | source ink, 48% | neutral 950, 72% | Dialog backdrop |
| `art-shadow` | source ink, 30% | neutral 950, 70% | Soft shadow under the [brand renders](imagery.md) (`.ds-art`, drawn with `drop-shadow`) |
| `dim` | surface, 45% | same | Paper veil |
| `lift` | -2px | same | Hover translate |
| `drop` | -6px | same | Block drop start |
| `rise` | 8px | same | Overlay rise start |
| `radius-sheet` / `-block` / `-control` / `-chip` / `-overlay` / `-plate` | 12 / 6 / 8 / 4 / 16 / 6 | same | Radius by material |
| `logo-frame` | m10 navy | m10 frost | Logo frame and binding tabs |
| `logo-page` | m10 paper | m10 navy | Logo page |
| `logo-frame-inverse` | m10 frost | m10 navy | Logo frame on an inverse ground |
| `logo-page-inverse` | m10 navy | m10 paper | Logo page on an inverse ground |
| `logo-block` | m10 blue | same | Logo appointment block |
| `logo-numeral` | source white | same | The 10 on the logo block |

## Grammar

Each treatment has an `all` value, or a `light` and a `dark` value. A value is one of:

| Form | Example | Emits |
|---|---|---|
| Token reference | `"{color.surface}"`, `"{shadow.lift}"`, `"{radius.12}"` | `var(--ds-surface)` |
| Keyword | `"transparent"`, `"none"` | as written |
| Length | `"-2px"` | as written (geometry only) |
| Tint | `{ "tint": "{color.border-subtle}", "alpha": 60 }` | `color-mix(in srgb, var(--ds-border-subtle) 60%, transparent)` |
| Highlight | `{ "highlight": "{color.brand.source-white}", "alpha": 14 }` | `inset 0 1px 0` in that color (a 1px top line) |
| Hatch | `{ "hatch": "{color.hatch-ink}", "alpha": 45 }` | `repeating-linear-gradient(135deg, <ink at alpha> 0 1px, transparent 1px 7px)` |
| Layers | `["{shadow.overlay-dark}", { "highlight": "...", "alpha": 35 }]` | The parts, comma-separated |

Colors come only from palette or theme tokens (the `logo-*` treatments use the [identity colors](color.md)), and blend only with `transparent`. `npm run check:tokens` validates every value against this grammar and rejects raw colors in `src/` and `site/` (system colors are allowed only in `src/css/base/forced-colors.css`). A new `highlight-*` treatment is contrast-checked automatically against `text-primary`, `text-secondary` and `action-default`.

## Line forms

State in line form, always paired with a word or an icon.

| Form | Means | Drawn as | Words |
|---|---|---|---|
| Solid | Open, active, scheduled, done | Solid fill, solid outline or solid marker | "Open", "Resolved", "Done" |
| Dashed | Pending, draft, waiting | Dashed outline or dashed marker | "Awaiting confirmation", "Review pending", "Draft" |
| Hatched | Taken, restricted | Diagonal hatch | "Booked", "Restricted" |
| Struck | Disabled, closed, withdrawn | Strike-through text or a struck marker | "Unavailable", "Cancelled", "Withdrawn" |

Used by [Badge](../components/badge/status.md), [TimeBlock](../components/scheduling/time-block.md), the [consultation slot picker](../components/scheduling/consultation-slot.md), [CaseTimeline](../components/data/case-timeline.md) and [Stepper](../components/navigation/stepper.md). Form controls (inputs, selects, checkboxes, radios, tags, secondary buttons) show disabled as a dashed edge on the disabled ground and keep a readable label; say why the control is unavailable nearby.

## Tailwind

| Utility | Material |
|---|---|
| `hatch`, `hatch-strong` | Hatch background |
| `plate` | Plate colors and radius |
| `bg-highlight-schedule`, `-community`, `-consult`, `-neutral`, `-mark` | Highlighter washes |
| `shadow-block`, `shadow-overlay` | Lift and overlay shadows |
| `rounded-sheet`, `-block`, `-control`, `-chip`, `-overlay`, `-plate` | Radius by material |

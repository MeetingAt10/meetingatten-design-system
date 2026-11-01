# Radius

A short radius scale and a fixed mapping from material to step: sheets 16, blocks 8, controls 10, chips full, overlays 20, plates 10, frames 24.

Components never pick a raw step. They use the treatment for their material, so a block looks like a block everywhere and a sheet like a sheet.

## Scale

| Token | Value |
|---|---|
| `--ds-radius-0` | 0 |
| `--ds-radius-2` | 2px |
| `--ds-radius-4` | 4px |
| `--ds-radius-6` | 6px |
| `--ds-radius-8` | 8px |
| `--ds-radius-10` | 10px |
| `--ds-radius-12` | 12px |
| `--ds-radius-16` | 16px |
| `--ds-radius-20` | 20px |
| `--ds-radius-24` | 24px |
| `--ds-radius-full` | 9999px |

Source: `tokens/foundations/radius.json`.

## Treatments mapping

| Treatment | Step | Material | Used by |
|---|---|---|---|
| `--ds-radius-sheet` | 16 | Paper sheets | Sheet card, Timetable, Privacy notice, drop zone, Popover, Toast, large Tile |
| `--ds-radius-block` | 8 | Blocks | Time block, consultation slot, listbox option, calendar day, Tooltip, alert icon block, small Tile |
| `--ds-radius-control` | 10 | Controls | Button, IconButton, inputs, select trigger, date field, nav item, tab (top corners), page button, segment, Alert, file row, Tile |
| `--ds-radius-chip` | full | Chips | Badge, card lane chip, Tag, counts, now-line label, inline code |
| `--ds-radius-overlay` | 20 | Floating dialogs | Modal, bottom sheet (top corners), overlay Card |
| `--ds-radius-plate` | 10 | Door plates | DoorPlate, today's date in the timetable |
| `--ds-radius-frame` | 24 | Large frames | Framed product previews on marketing and documentation pages |
| `--ds-radius-tick` | 4 | Tiny parts | Checkbox box, Kbd, skeleton lines, meter track |
| `--ds-radius-full` | round | Round parts | Avatar, radio ring, Switch, Spinner, now-line dot, progress track, step markers |

The tint card and the table wrapper use `--ds-radius-12` directly, one step under the sheet, so a flat list item reads as lighter than a raised sheet.

Source: `tokens/treatments.json`. Change a material's step there, never in a component.

## Rules

| Rule | Detail |
|---|---|
| One radius per material | Controls are 10px and sheets are 16px, so a control stays tighter than the sheet it sits on |
| Pills are for chips | Full radius is for chips, badges and round parts, not for buttons or cards |
| Nested corners | A block inside a sheet uses the block radius; it does not inherit the sheet radius |
| Hatching and plates keep their radius | Restricted blocks, plates and lane chips follow their material like any other |

## Tailwind

`rounded-sheet`, `rounded-block`, `rounded-control`, `rounded-chip`, `rounded-overlay`, `rounded-plate`. The `plate` utility also sets the plate colors and radius in one class.

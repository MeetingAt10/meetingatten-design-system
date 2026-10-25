# Radius

A small radius scale and a fixed mapping from material to step: sheets 12, blocks 6, controls 8, chips 4, overlays 16, plates 6.

Components never pick a raw step. They use the treatment for their material, so a block looks like a block everywhere and a sheet like a sheet.

## Scale

| Token | Value |
|---|---|
| `--ds-radius-0` | 0 |
| `--ds-radius-2` | 2px |
| `--ds-radius-4` | 4px |
| `--ds-radius-6` | 6px |
| `--ds-radius-8` | 8px |
| `--ds-radius-12` | 12px |
| `--ds-radius-16` | 16px |
| `--ds-radius-full` | 9999px |

Source: `tokens/foundations/radius.json`.

## Treatments mapping

| Treatment | Step | Material | Used by |
|---|---|---|---|
| `--ds-radius-sheet` | 12 | Paper sheets | Sheet, Card, Timetable, Table wrapper, Privacy notice, drop zone, Popover, Toast, large Tile |
| `--ds-radius-block` | 6 | Blocks | Time block, consultation slot, listbox option, Tag, calendar day, Tooltip, agenda chip, alert icon block, small Tile |
| `--ds-radius-control` | 8 | Controls | Button, IconButton, inputs, select trigger, date field, nav item, tab (top corners), page button, segment, Alert, file row, block radio, Tile |
| `--ds-radius-chip` | 4 | Chips | Badge, card lane chip, checkbox box, Kbd, counts, now-line label, skeleton lines, meter track, inline code |
| `--ds-radius-overlay` | 16 | Floating dialogs | Modal, bottom sheet (top corners), overlay Card |
| `--ds-radius-plate` | 6 | Door plates | DoorPlate, today's date in the timetable |
| `--ds-radius-full` | round | Round parts | Avatar, radio ring, Switch, Spinner, now-line dot, progress track, step markers |

Source: `tokens/treatments.json`. Change a material's step there, never in a component.

## Rules

| Rule | Detail |
|---|---|
| One radius per material | Do not mix a 12px card with 12px buttons; controls stay crisper than the sheet they sit on |
| Pills are rare | Full radius is for round parts and counts, not for buttons or cards |
| Nested corners | A block inside a sheet uses the block radius; it does not inherit the sheet radius |
| Hatching and plates keep their radius | Restricted blocks, plates and lane chips follow their material like any other |

## Tailwind

`rounded-sheet`, `rounded-block`, `rounded-control`, `rounded-chip`, `rounded-overlay`, `rounded-plate`. The `plate` utility also sets the plate colors and radius in one class.

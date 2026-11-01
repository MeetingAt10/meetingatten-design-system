# Elevation

Surfaces declare one elevation: a hairline ring, or a ring inside layered shadows. They never carry a 1px border plus a large soft shadow.

## Levels

| Level | Look | Used by |
|---|---|---|
| Ring | `--ds-ring-shadow`, a 1px ink hairline at 8% to 14% | Tint cards, tables, the secondary button, inputs on hover |
| Sheet | `--ds-sheet-shadow`, a ring plus a 1px and a 12px soft layer | Sheet cards at rest, the timetable, framed previews |
| Lift | `--ds-block-shadow`, a deeper ring and layers | Hovered blocks and slots, hovered linked cards, the chosen segment, the switch thumb, tooltips |
| Overlay | `--ds-overlay-shadow`, the deepest layers | Menus, listboxes, popovers, dialogs, drawers, toasts, overlay cards |
| Button | `--ds-btn-shadow`, a navy-tinted layer | Primary buttons, with a 1px top highlight |

A page should not show one of these everywhere. A feed of announcements rests on the ring (tint cards), one featured post can rest on the sheet, and items inside a section need only a rule (open cards).

## Tokens

| Token | Light | Dark |
|---|---|---|
| `--ds-shadow-ring` | `0 0 0 1px` ink at 8% | `ring-dark`, light ink at 12% |
| `--ds-shadow-sheet` | ring, `0 1px 2px`, `0 12px 32px -16px` | `sheet-dark`, deeper black layers |
| `--ds-shadow-lift` | ring, `0 2px 4px`, `0 20px 40px -16px` | `lift-dark` |
| `--ds-shadow-overlay` | ring, `0 4px 8px`, `0 8px 16px -8px`, `0 28px 64px -24px` | `overlay-dark` |
| `--ds-shadow-btn` | `0 1px 2px` and `0 8px 16px -8px` in navy | `btn-dark` |

Components read the treatments (`--ds-ring-shadow`, `--ds-sheet-shadow`, `--ds-block-shadow`, `--ds-overlay-shadow`, `--ds-btn-shadow`), which pick the right value per theme. Light shadows are tinted with the ink color `#0C1730`. Dark shadows are black with a light ink ring, because a shadow alone barely reads on a dark canvas.

## Rules

| Rule | Detail |
|---|---|
| Declared once | Each element has one elevation: a ring or layered shadows |
| Earned by motion | A block gets the lift only while hovered, dragged or chosen |
| Not a trust signal | Elevation shows hierarchy and interaction, not importance, security or privacy |
| No nesting | A card never sits inside a card. Detail pages use sections, rules and headings |
| No glow | No colored shadows. The spotlight glow in the expressive layer is the only exception and appears on hover |

## Tailwind

`shadow-block` and `shadow-overlay`.

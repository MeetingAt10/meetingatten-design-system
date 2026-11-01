# Elevation

Sheets rest flat with a hairline rule; shadows are only for blocks that lift and overlays that float.

Elevation is declared once: a rule border or a shadow, never both.

## Levels

| Level | Look | Used by |
|---|---|---|
| Flat | `surface` with a 1px `border-subtle` rule, no shadow | Sheets, cards at rest, timetable, tables, inputs |
| Lift | Ink-tinted offset shadow, `--ds-block-shadow` | Hovered or dragged blocks, linked cards on hover, hovered primary buttons, the segmented chip, switch thumb |
| Overlay | Deeper offset shadow, `--ds-overlay-shadow` | Menus, listboxes, popovers, dialogs, drawers, toasts, overlay cards |

A linked card trades its rule for the lift shadow on hover (`border-color: transparent`), so it never shows both. Overlays have no rule at all.

## Shadows

| Token | Light | Dark |
|---|---|---|
| `--ds-shadow-lift` | `0 1px 2px` ink at 8% + `0 6px 16px` ink at 10% | (light only) |
| `--ds-shadow-overlay` | `0 2px 6px` ink at 8% + `0 18px 40px` ink at 16% | (light only) |
| `--ds-shadow-lift-dark` | (dark only) | `0 1px 2px` black at 40% + `0 8px 20px` black at 35% |
| `--ds-shadow-overlay-dark` | (dark only) | `0 2px 8px` black at 50% + `0 24px 48px` black at 50% |

Components read the treatments, which pick the right shadow per theme:

| Treatment | Light | Dark |
|---|---|---|
| `--ds-block-shadow` | `shadow.lift` | `shadow.lift-dark` |
| `--ds-overlay-shadow` | `shadow.overlay` | `shadow.overlay-dark` plus a 1px top highlight (dark border at 35%) |
| `--ds-overlay-bg` | `surface` | `raised` |
| `--ds-plate-shadow` | none | 1px top highlight (dark hover blue at 60%) |
| `--ds-btn-highlight` | 1px top highlight, white at 14% | white at 35% |

Shadows are ink-tinted (`#0C1730`) in light and plain black in dark, with an offset and a soft blur. No glow, no colored shadow, no glass.

## Dark theme

In dark, overlays sit on `raised` and carry a 1px top highlight, because a shadow alone barely reads on a dark canvas. Solid blocks and plates get the same thin highlight along their top edge.

## Rules

| Rule | Detail |
|---|---|
| Declared once | Rule border or shadow, never both on the same element |
| Earned by motion | A block gets the lift shadow only while it is hovered, dragged or picked up |
| Never a trust signal | Elevation shows hierarchy and interaction, not importance, security or privacy |
| No nesting | A card never sits inside a card; detail pages use sections, rules and headings |

## Tailwind

`shadow-block` and `shadow-overlay`.

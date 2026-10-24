# Spacing

4px grid. Token key = multiplier of `0.25rem`; Tailwind `p-4` equals `--ds-space-4`. `p` is the decimal point (`space-1p5` = 6px).

| Token | px | Typical use |
|---|---|---|
| `space-1` | 4 | Icon-to-label gap in dense UI |
| `space-2` | 8 | Badge padding, tight stacks |
| `space-3` | 12 | Control padding, nav item gap |
| `space-4` | 16 | Card padding (admin), form gap |
| `space-6` | 24 | Card padding (public), page gutter |
| `space-8` | 32 | Group separation |
| `space-12` | 48 | Between blocks in a section |
| `space-16` | 64 | Footer padding |
| `space-24` | 96 | Section rhythm (landing) |

Full scale: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32.

## Theme density tokens

| Token | accs-landing | accs-admin | meetingatten |
|---|---|---|---|
| `control-h` | 48 | 36 | 44 |
| `row-h` (tables) | 56 | 40 | 48 |
| `section-y` | 96 | 24 | 80 |
| `container` | 72rem | 90rem | 64rem |

Whitespace rule: public pages use at least `section-y` between sections; admin tightens rows, not touch targets (minimum 24px target, 36px preferred).

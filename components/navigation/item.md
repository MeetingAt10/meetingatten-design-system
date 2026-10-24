# Navigation / Item

Sidebar item. Selected=False/True x five states, 192 x 48. The sidebar exposes four instances.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Navigation / Item` | 192 x 48 | 6 | 0 / 12 / 0 / 12 | 12 | `#FFFFFF` |

Variant axes:
- Selected: False / True; State: Default / Hover / Pressed / Focus / Disabled (10 variants)

## Anatomy

| Part | Spec |
|---|---|
| Row | height 48, padding 0 / 12, gap 12, radius 6, `Label` 14/20 / 600 |
| Icon | 20px: Overview (Navigation Overview graphic), Forum, Calendar, Report |

## States

| State | Treatment (tokens) |
|---|---|
| Default | `color/text-primary` text |
| Hover | `color/info/bg` |
| Pressed | `color/info/bg` + 1px `color/border-default` |
| Focus | 3px focus ring |
| Disabled | `color/disabled/bg`, `color/disabled/fg` |
| Selected=True | `color/info/bg` fill, `color/action/default` text, 3px left bar in `color/action/default` |

## Accessibility

- `aria-current="page"` on the current link; selected state includes a bar and weight/color change, not color alone.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<a class="ds-nav-item" href="#" aria-current="page"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-home"/></svg>Overview</a>
```

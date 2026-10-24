---
title: Nav Item
description: One sidebar destination, 48px, with icon, current-page bar and tint.
react: NavItem
---
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

## React

```tsx
<NavItem href="/overview" icon="home" isCurrent>Overview</NavItem>
<NavItem href="/reports" icon="report">My reports</NavItem>
```

`isCurrent` sets `aria-current="page"` (the left bar and tint follow from it).

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<a class="ds-nav-item" href="#" aria-current="page"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-home"/></svg>Overview</a>
```

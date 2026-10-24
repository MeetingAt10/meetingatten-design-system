# Navigation / Link

Five states, 240 x 44. Card and table links expose this family ("Read update →", "View draft →"). Route errors and loading belong to the destination. Bare action links and breadcrumbs use 44px minimum-height wrappers.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Navigation / Link` | 240 x 44 | 6 | 0 / 12 / 0 / 12 | 12 | `#FFFFFF` |

Variant axes:
- State: Default / Hover / Pressed / Focus / Disabled (5 variants)

## States

| State | Treatment (tokens) |
|---|---|
| Default | `color/action/default` text, `Label` 14/20 / 600, arrow icon 16 |
| Hover | `color/info/bg` fill, underline |
| Pressed | `color/info/bg` + 1px `color/border-default` |
| Focus | 3px focus ring |
| Disabled | `color/disabled/bg`, `color/disabled/fg` |

## Figma copy

"Open sample", "Read update →", "Join the conversation →", "View draft →", "← My reports / DEMO-024".

## Accessibility

- Native `<a href>`; the accessible name describes the destination; links navigate, buttons act.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<a class="ds-link" href="#">Read update <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-chevron"/></svg></a>
```

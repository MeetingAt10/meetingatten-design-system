# Feedback / Toast

Noncritical confirmation only, 777 x 76. Alerts persist when action is required.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Feedback / Toast` | 777 x 76 | 8 | 16 / 16 / 16 / 16 | 12 | `#172033` |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Container | `radius-tile` (8), `overlay-shadow`, padding 16, gap 12, fill `color/text-primary` (inverse), text `color/canvas` |
| Glyph | `Icon / Check` in `color/success/on-inverse` (adapts per mode) |
| Dismiss | Icon Button Inverse when timed |

## Figma copy

"Display preference saved".

## Accessibility

- Announce with a polite live region; do not steal focus; keep essential feedback inline.
- A timed toast needs an accessible dismissal and adequate reading time.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<div class="ds-toast" role="status"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-check"/></svg>Display preference saved</div>
```

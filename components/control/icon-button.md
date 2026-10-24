---
title: Icon Button
description: 44x44 button with an icon and a required accessible name; standard and inverse appearances.
react: IconButton
---
# Control / Icon Button

Standard and Inverse x five states, 44 x 44. Used by headers, modal close and toast. Icons are not touch targets; the wrapper provides the 44px target.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Control / Icon Button` | 44 x 44 | 6 | 0 / 0 / 0 / 0 | 12 | `#FFFFFF` |

Variant axes:
- Appearance: Standard / Inverse; State: Default / Hover / Pressed / Focus / Disabled (10 variants)

## States

| State | Treatment (tokens) |
|---|---|
| Standard default | `color/surface` fill, `color/action/default` glyph |
| Standard hover / pressed | `color/info/bg`; pressed adds `color/border-strong` |
| Inverse default | `color/text-primary` fill, `color/canvas` glyph |
| Inverse hover / pressed | `color/inverse/hover` / `color/inverse/pressed` |
| Inverse focus | ring in `color/inverse/focus` |
| Disabled | `color/disabled/bg`, `color/disabled/fg` |

## Accessibility

- Icon-only actions need an accessible name (`aria-label`); tooltips supplement, never replace it.
- Decorative glyph is `aria-hidden`.

## React

```tsx
<IconButton icon="bell" label="Notifications" onPress={open} />
<IconButton icon="close" label="Dismiss" inverse />
```

`label` is required and becomes the accessible name.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<button class="ds-icon-btn" aria-label="Close"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-close"/></svg></button>
<button class="ds-icon-btn ds-icon-btn--inverse" aria-label="Close"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-close"/></svg></button>
```

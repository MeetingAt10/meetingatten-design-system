---
title: Select Option
description: One row in a Select or ComboBox list, with a check mark when selected.
react: SelectOption
---
# Control / Select Option

Option row exposed inside expanded Selects. Selected x five states (no Error/Loading: those belong to the popup).

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Control / Select Option` | 328 x 44 | 6 | 0 / 12 / 0 / 12 | 12 | `#FFFFFF` |

Variant axes:
- Selected: False / True; State: Default / Hover / Pressed / Focus / Disabled (10 variants)

## Anatomy

| Part | Spec |
|---|---|
| Row | height 44, padding 0 / 12, gap 12, radius 6, label 14/20 / 600 |
| Check | `Icon / Check` 16 when selected |

## States

| State | Treatment (tokens) |
|---|---|
| Default | transparent |
| Hover | `color/info/bg` |
| Pressed | `color/info/bg` + 1px `color/border-default` |
| Focus | 3px focus ring |
| Disabled | `color/disabled/bg`, `color/disabled/fg` |
| Selected=True | `color/info/bg` fill + check |

## Accessibility

- `role="option"` with `aria-selected`; active option exposed via `aria-activedescendant`.

## React

```tsx
<SelectOption id="planning">Course planning</SelectOption>
```

Pass `textValue` when the children are not plain text (used for type-ahead and filtering).

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<li class="ds-option" role="option" aria-selected="true"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-check"/></svg>Course planning</li>
```

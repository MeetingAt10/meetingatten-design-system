---
title: Search
description: Compact search box with a clear button; Escape clears.
react: Search
---
# Control / Search

Five states. Results use Data / View State for loading, empty and error.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Control / Search` | 280 x 44 | 6 | 0 / 12 / 0 / 12 | 12 | `#F5F7FB` |

Variant axes:
- State: Default / Hover / Pressed / Focus / Disabled (5 variants)

## Anatomy

| Part | Spec |
|---|---|
| Container | width 280, height 44, padding 0 / 12, gap 12, radius 6, `color/canvas` fill, 1px `color/border-default` |
| Icon | `Icon / Search` 16 |
| Input | `Body small` 13/20, placeholder "Search community" |

## States

| State | Treatment (tokens) |
|---|---|
| Default | canvas fill |
| Hover | `color/info/bg` |
| Pressed | `color/border-strong` edge |
| Focus | 3px focus ring, surface fill |
| Disabled | `color/disabled/bg` |

## Accessibility

- `<input type="search">` with an accessible name (visible label or `aria-label`); results region announced politely.

## React

```tsx
<Search label="Search community" placeholder="Search community" onSubmit={runSearch} />
```

`label` is required (the box has no visible label).

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<label class="ds-search"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-search"/></svg><input type="search" placeholder="Search community" aria-label="Search community"></label>
```

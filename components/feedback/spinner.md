---
title: Spinner
description: 16px loading indicator in currentColor; stops rotating under reduced motion.
react: Spinner
---
# Feedback / Spinner

Shown inside the Loading state of buttons and while a view loads. Figma defines it as part of the Button Loading variant (16px, `currentColor`).

## Anatomy

| Part | Spec |
|---|---|
| Ring | 16px (`size-icon-16`), 2px `currentColor` border with a transparent segment, 0.9s linear rotation |
| Reduced motion | no rotation; static partial ring |

## Accessibility

- Inside a labeled control (a loading Button), the spinner is decorative (`aria-hidden`); the button announces the pending state.
- Standalone, give it a label: it becomes a `role="status"` live region.

## React

```tsx
<Spinner label="Loading reports" />
<Spinner />  {/* decorative */}
```

## Reference markup

```html
<span class="ds-spinner" role="status" aria-label="Loading reports"></span>
```

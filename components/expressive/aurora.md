---
title: Aurora
description: Three slow, blurred lane-colored glows behind a hero or band, decorative and still under reduced motion.
react: Aurora
---
# Aurora

Aurora is a colored ground for a marketing hero: three soft glows in the schedule, community and consultation highlighter colors that drift slowly (24 seconds a lap) behind the content. It belongs to the [expressive layer](../../foundations/motion.md) and pairs with [GridBackdrop](grid-backdrop.md).

## When to use

- Use it once per page, behind the hero or a plate band, in a parent with `position: relative; isolation: isolate`.
- Layer a [GridBackdrop](grid-backdrop.md) over it so the glow reads as light on the ruled sheet.
- Don't use it behind forms, tables or long reading text, and don't use it in the portal.
- Don't tint it: the three colors are the three lanes, and a glow never signals access or state.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Aurora | `.ds-aurora` | Absolute, `inset: 0`, `z-index: -1`, clipped, no pointer events |
| Blob | `.ds-aurora__blob` | 52% wide circle with a radial gradient in `--ds-highlight-schedule`, `-community` or `-consult`, blurred 48px, drifting by `--dx` and `--dy` |

## States

| State | Looks | Set by |
|---|---|---|
| Drifting | Blobs move and swell slowly, 8 seconds apart | default |
| Still | Blobs sit at their start positions | reduced motion |
| Hidden | Not drawn | forced colors |

## Behavior and accessibility

- Decorative: `aria-hidden="true"`, no text, not focusable.
- The glows are highlighter washes, so text over them keeps the contrast of the canvas pairs the contrast check covers.
- The drift animates `translate` and `scale` on blurred elements; keep it to one per page to protect low-power devices.

## React

```tsx
import { Aurora } from '@meetingat10/design-system/react';

<section style={{ position: 'relative', isolation: 'isolate' }}>
  <Aurora />
  ...
</section>
```

Aurora has no hooks, so it also renders in React Server Components.

## Plain CSS

```html
<div class="ds-aurora" aria-hidden="true">
  <span class="ds-aurora__blob"></span>
  <span class="ds-aurora__blob"></span>
  <span class="ds-aurora__blob"></span>
</div>
```

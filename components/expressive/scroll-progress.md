---
title: ScrollProgress
description: A 2px bar across the top edge that fills as the page scrolls, shown only where scroll-driven animation is supported.
react: ScrollProgress
---
# ScrollProgress

ScrollProgress is a hairline bar fixed to the top of the window that grows from the start edge to the end as the page scrolls. It is driven by the root scroll timeline (`animation-timeline: scroll(root)`), so it needs no JavaScript. It belongs to the [expressive layer](../../foundations/motion.md).

## When to use

- Use it once, at the top of a long marketing or showcase page.
- Don't use it on short pages, in the portal or on pages that already show progress (a [Stepper](../navigation/stepper.md), a [Progress](../feedback/progress.md)).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Bar | `.ds-scroll-progress` | Fixed, 2px high, `action-default` color, `scale` 0 to 1 from the start edge; one step above sticky headers |

## States

| State | Looks | Set by |
|---|---|---|
| Filling | Grows with the scroll position | scroll |
| Hidden | Not drawn | browsers without `animation-timeline: scroll()`, and reduced motion |

## Behavior and accessibility

- Decorative: `aria-hidden="true"`, no pointer events, not focusable. It never replaces a real progress control.
- The bar is a visual extra for the long page; nothing depends on it.
- It uses the action color, which has enough contrast on the canvas in both themes.

## React

```tsx
import { ScrollProgress } from '@meetingat10/design-system/react';

<ScrollProgress />
```

ScrollProgress has no hooks, so it also renders in React Server Components.

## Plain CSS

```html
<div class="ds-scroll-progress" aria-hidden="true"></div>
```

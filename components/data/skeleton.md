---
title: Skeleton
description: Decorative placeholders in the shape of the content that is loading; the region announces the loading state in words.
react: Skeleton
---
# Skeleton

A skeleton holds the place of content while it loads, in the shape of what is coming: text lines and titles pulse on the neutral wash, and block placeholders are dashed outlines (the pending line form). Skeletons are decoration; the region they sit in says "Loading" in words.

## When to use

- Use it when the layout of the coming content is known and the wait is short.
- Use `block` for blocks, cards or images that are on their way.
- Don't use it as the only loading signal; mark the region busy and show or announce text such as "Loading reports" ([View State](view-state.md) does both).
- Don't use it for actions in progress; use the pending state of the [Button](../control/button.md) or a [Spinner](../feedback/spinner.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Text line | `.ds-skeleton` | 0.875em tall, full width unless `--w` is set, radius 4, neutral wash, pulsing |
| Title line | `.ds-skeleton--title` | 1.25em tall, 45% wide by default |
| Block | `.ds-skeleton--block` | `--h` tall (default 4rem), dashed subtle outline on no fill, radius 6 |
| Circle | `.ds-skeleton--circle` | `--w` square (default 36px), round (avatar placeholder) |
| Group | `.ds-skeleton-group` | Stacks placeholders with an 8px gap |

## States

| State | Looks | Set by |
|---|---|---|
| Loading | Lines pulse between full and 55% opacity; blocks show a dashed outline | default |
| Sized | Custom width or height | `width` (`--w`), `height` (`--h`) |

## Behavior and accessibility

- Every skeleton is hidden from assistive tech (`aria-hidden="true"`).
- Put `aria-busy="true"` on the loading region and announce loading once in text; do not announce every update or move focus.
- Replace skeletons with the content, or with an honest empty or error state, as soon as the data settles.
- Reduced motion: the pulse stops; placeholders stay still.
- Forced colors: wash-filled lines drop out; dashed block outlines stay visible.

## React

```tsx
import { Skeleton } from '@meetingat10/design-system/react';

<div className="ds-skeleton-group" aria-busy="true">
  <span className="ds-visually-hidden" role="status">Loading reports</span>
  <Skeleton shape="title" />
  <Skeleton width="92%" />
  <Skeleton width="60%" />
  <Skeleton shape="block" height="3.5rem" width="10rem" />
  <Skeleton shape="circle" />
</div>
```

`shape` is `text` (default), `title`, `block` or `circle`. `width` applies to text, title and circle; `height` to blocks.

## Plain CSS

```html
<div class="ds-skeleton-group" aria-busy="true">
  <span class="ds-visually-hidden" role="status">Loading reports</span>
  <span class="ds-skeleton ds-skeleton--title" aria-hidden="true"></span>
  <span class="ds-skeleton" style="--w: 60%" aria-hidden="true"></span>
  <span class="ds-skeleton ds-skeleton--block" style="--h: 3.5rem" aria-hidden="true"></span>
</div>
```

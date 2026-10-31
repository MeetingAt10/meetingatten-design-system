---
title: Reveal
description: Content that eases in as it scrolls into view, visible by default and static where scroll-driven animation is unsupported or motion is reduced.
react: Reveal
---
# Reveal

Reveal wraps a block of a marketing page so it rises (or fades, grows or slides) into place as it enters the viewport. It uses CSS scroll-driven animation (`animation-timeline: view()`), so there is no scroll listener and no JavaScript on the client. It belongs to the [expressive layer](../../foundations/motion.md): marketing surfaces only.

## When to use

- Use it on the sections, cards and list items of a landing or showcase page, one effect per page region.
- Use `index` to stagger siblings: each step starts its entrance 4% of the scroll range later.
- Don't use it in the portal, on forms or on anything a task depends on.
- Don't reveal the hero's first line; that is the job of [WordReveal](word-reveal.md) on load.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Reveal | `.ds-reveal` | Rises 24px and settles from 98.5% scale, from opacity 0, over the first part of the element's entry |
| Fade | `.ds-reveal--fade` | Opacity only |
| Scale | `.ds-reveal--scale` | Grows from 92% |
| Start, end | `.ds-reveal--start`, `.ds-reveal--end` | Slides in from the inline-start or inline-end side; the sides swap in right-to-left text |
| Stagger | `--ds-reveal-index` | A number; set by the `index` prop |

## States

| State | Looks | Set by |
|---|---|---|
| Animating | Eases in while the element crosses the lower part of the viewport | scroll position |
| Resting | Fully visible, in place | after entry, and always where the feature is unsupported |
| Reduced motion | Fully visible, in place; no animation is declared | `prefers-reduced-motion: reduce` |

## Behavior and accessibility

- Content is in the DOM and visible by default. The animation starts from a hidden state only inside `@supports (animation-timeline: view())` and `@media (prefers-reduced-motion: no-preference)`.
- Elements high in the first viewport are already past the entry range on load and render in their final state.
- Only `opacity`, `translate` and `scale` change, so layout never shifts and focus order is unchanged.
- It adds no role or label; the element keeps its own semantics (`section`, `li`, `article`).

## React

```tsx
import { Reveal } from '@meetingat10/design-system/react';

<Reveal as="section" variant="fade">...</Reveal>
{items.map((item, i) => <Reveal as="li" key={item.id} index={i}>...</Reveal>)}
```

`as` is `div` (default), `section`, `li`, `article`, `header`, `p` or `span`. Reveal has no hooks, so it also renders in React Server Components.

## Plain CSS

```html
<section class="ds-reveal ds-reveal--fade">...</section>
<li class="ds-reveal" style="--ds-reveal-index: 2">...</li>
```

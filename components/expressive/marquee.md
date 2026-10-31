---
title: Marquee
description: An endless slow line of short labels, paused on hover and focus, wrapped into a plain list under reduced motion.
react: Marquee
---
# Marquee

Marquee slides a line of short items (component names, lane chips) across the page, one lap every 48 seconds. The items are rendered twice and the track moves by exactly one copy, so the loop has no seam. It belongs to the [expressive layer](../../foundations/motion.md): marketing surfaces only.

## When to use

- Use it for a list of names that is true but not needed to act: the components in the package, the lanes, the apps it serves.
- Keep the items short and decorative-feeling; they are read once, in the first copy.
- Don't put links, buttons or anything a task depends on in a marquee, and don't use it for announcements or status.
- Don't use ids inside the items: they are rendered twice.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Marquee | `.ds-marquee` | Clipped, with an edge fade mask (transparent to ink to transparent) |
| Track | `.ds-marquee__track` | Flex, `width: max-content`, slides to -50% in `--ds-marquee-duration` (default 48s) |
| Group | `.ds-marquee__group` | One lap of items; the second group is `aria-hidden` and `inert`. Its trailing padding is the gap between laps |
| Reverse | `.ds-marquee--reverse` | Slides the other way |

## States

| State | Looks | Set by |
|---|---|---|
| Moving | Slides at a steady pace | default |
| Paused | Stops where it is | pointer over it, or focus inside it |
| Reduced motion | No movement; the first group wraps into rows, the copy is hidden, the edge fade is removed | `prefers-reduced-motion: reduce` |

## Behavior and accessibility

- The second copy is `aria-hidden="true"` and `inert`: screen readers and keyboard users meet each item once.
- With `label`, the marquee is a `region` with that name; without it, it has no role.
- It pauses on hover and focus, and stops under reduced motion. The motion is a slow ambient loop of non-essential content; do not use it where users must read every item (WCAG 2.2.2).
- Everything in the first group stays readable in order: with reduced motion the list simply wraps.

## React

```tsx
import { Marquee, Badge } from '@meetingat10/design-system/react';

<Marquee label="Components in the package" duration={60}>
  {names.map((n) => <Badge key={n}>{n}</Badge>)}
</Marquee>
```

`reverse` slides the other way. Marquee has no hooks, so it also renders in React Server Components.

## Plain CSS

```html
<div class="ds-marquee">
  <div class="ds-marquee__track">
    <div class="ds-marquee__group"><span class="ds-badge">Button</span><span class="ds-badge">Card</span></div>
    <div class="ds-marquee__group" aria-hidden="true" inert><span class="ds-badge">Button</span><span class="ds-badge">Card</span></div>
  </div>
</div>
```

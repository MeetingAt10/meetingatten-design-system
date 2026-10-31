---
title: ParallaxScene
description: A container that tracks the pointer over itself and gives the floating art inside it depth.
react: ParallaxScene
---
# ParallaxScene

ParallaxScene turns pointer position into two numbers, `--ds-px` and `--ds-py`, between -1 and 1 across its box. Every [FloatingArt](floating-art.md) inside multiplies them by its own `depth` (px), so nearer renders travel farther and the group feels like a constellation in depth. It belongs to the [expressive layer](../../foundations/motion.md).

## When to use

- Use it around the hero's constellation of renders, once per page region.
- Set a different `depth` on each render: about 12 for far, 24 for middle, 40 for near.
- Use `strength` below 1 to calm the effect on a large scene.
- Don't wrap content that must stay put (text, forms, actions) in a scene; give the scene to the art alone.

## Anatomy

| Part | Name | Notes |
|---|---|---|
| Scene | the element chosen with `as` | Position it yourself (`position: relative` for an absolutely placed constellation) |
| Pointer x, y | `--ds-px`, `--ds-py` | -1 to 1, written with `requestAnimationFrame`; they inherit into the renders |
| Travel | FloatingArt `--ds-depth` | `translate` = pointer value x depth, in px |

## States

| State | Looks | Set by |
|---|---|---|
| Tracking | Renders glide toward the pointer on the smooth spring | fine pointer moving over the scene |
| Rest | Renders back at their places | pointer leaves the scene |
| Off | No effect | touch screens (`pointer: coarse`) and reduced motion |

## Behavior and accessibility

- Decorative. It adds no role, label or focusable element, and nothing depends on the effect.
- The pointer check runs on every move, so a change of the OS reduced-motion setting takes effect at once.
- The scene has no event handlers of your own to keep: it owns `onPointerMove` and `onPointerLeave`.
- Keep interactive content outside the scene; renders have `pointer-events: none`, so links beneath them still work.

## React

```tsx
import { ParallaxScene, FloatingArt } from '@meetingat10/design-system/react';

<ParallaxScene className="relative min-h-[28rem]">
  <FloatingArt src={a} width={720} height={700} depth={40} />
  <FloatingArt src={b} width={720} height={670} depth={16} delay={-4} />
</ParallaxScene>
```

`as` is `div` (default), `section`, `figure`, `header` or `span`. ParallaxScene is a client component.

## Plain CSS

The component is a pointer listener around two custom properties. In plain CSS, set `--ds-px` and `--ds-py` from your own `pointermove` handler on any element that contains `.ds-art` images with a `--ds-depth`.

---
title: Parallax
description: An element that drifts against the scroll while it crosses the viewport, static where scroll-driven animation is unsupported or motion is reduced.
react: Parallax
---
# Parallax

Parallax moves its content a little against the scroll: it starts `depth` px below its resting place when it enters the viewport and ends `depth` px above it when it leaves. It uses CSS scroll-driven animation, so there is no scroll listener. It belongs to the [expressive layer](../../foundations/motion.md); for pointer-driven depth see [ParallaxScene](parallax-scene.md).

## When to use

- Use it on decorative art and large display type of a marketing page, with a depth between 20 and 80.
- Give neighbors different depths so the page has layers.
- Don't use it on reading text, tables, forms or the hero's actions.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Parallax | `.ds-parallax` | Animates `translate` over the element's whole pass through the viewport (`animation-range: cover`) |
| Depth | `--ds-depth` | Unitless px, default 40 |

## States

| State | Looks | Set by |
|---|---|---|
| Drifting | Moves from `+depth` to `-depth` on the Y axis | scroll position |
| Resting | In its place | unsupported browsers and reduced motion |

## Behavior and accessibility

- Only `translate` animates, so layout never shifts and nothing is clipped by the animation itself. Put it inside a container with `overflow: clip` if the drift should not spill.
- It adds no role or label. Keep it off content that must be read while it moves.
- `@supports (animation-timeline: view())` and `prefers-reduced-motion: no-preference` gate the animation; otherwise the element renders at rest.

## React

```tsx
import { Parallax } from '@meetingat10/design-system/react';

<Parallax depth={60}><FloatingArt src={a} width={720} height={700} /></Parallax>
```

`as` is `div` (default), `section`, `figure` or `span`. Parallax has no hooks, so it also renders in React Server Components.

## Plain CSS

```html
<div class="ds-parallax" style="--ds-depth: 60">...</div>
```

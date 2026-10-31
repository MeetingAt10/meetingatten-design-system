---
title: FloatingArt
description: A transparent 3D brand render with a soft ink shadow, a slow bob and optional pointer parallax.
react: FloatingArt
---
# FloatingArt

FloatingArt places one of the [brand renders](../../foundations/imagery.md) on a marketing page. The render floats on a soft shadow that follows its alpha edge, bobs slowly and, inside a [ParallaxScene](parallax-scene.md), moves with the pointer by its `depth`. It belongs to the [expressive layer](../../foundations/motion.md).

## When to use

- Use three to five renders in a constellation beside the product, never instead of it.
- Give each its own `delay` (a negative number of seconds also works in CSS) so they do not bob in step, and a larger `depth` to the one meant to feel nearer.
- Use `priority` for the one or two renders in the first viewport only.
- Don't use a render as a logo, an icon, a status or a lane signal, and don't stretch it past its size.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Image | `.ds-art` | Block image, `width: 100%`, `height: auto`, a `drop-shadow` from `--ds-art-shadow`, no pointer events, not selectable |
| Float | `.ds-art--float` | Bobs 10px up and down and tilts 1.5 degrees over 9 seconds, alternating |
| Depth | `--ds-depth` | Pointer travel in px at the edge of a ParallaxScene |
| Delay | `--ds-art-delay` | Start offset of the bob |

## States

| State | Looks | Set by |
|---|---|---|
| Floating | Slow bob and tilt | `float` (default) |
| Following | Glides toward the pointer on the smooth spring | `depth` inside a ParallaxScene, fine pointer |
| Still | No bob, no travel | `float={false}`, touch screens, reduced motion |

## Behavior and accessibility

- The render is decorative: `alt=""` by default. Pass `alt` only when the image is the content of the page.
- `width` and `height` are required and always rendered, so the image reserves its space and causes no layout shift. CSS scales it with `width: 100%`.
- Loads lazily with async decoding; `priority` switches to eager loading with high fetch priority.
- The float uses `transform` and the parallax uses `translate`, so they compose. Both are off under reduced motion.
- Forced colors: the image stays as it is; it is decoration.

## React

```tsx
import { FloatingArt, imagery } from '@meetingat10/design-system/react';
import sphere from '@meetingat10/design-system/assets/imagery/neural-sphere.webp';

const { width, height } = imagery['neural-sphere'];

<FloatingArt src={sphere.src} width={width} height={height} depth={24} delay={-3} priority />
```

FloatingArt has no hooks, so it also renders in React Server Components.

## Plain CSS

```html
<img class="ds-art ds-art--float" src="neural-sphere.webp" alt="" width="720" height="700" style="--ds-depth: 24; --ds-art-delay: -3s" loading="lazy" decoding="async">
```

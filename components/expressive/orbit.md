---
title: Orbit
description: Items on a dashed hairline ring that turns slowly while every item stays upright.
react: Orbit
---
# Orbit

Orbit spreads items evenly around a dashed hairline ring, the first at the top, with an optional center. The ring turns once every 24 seconds and each item turns the other way, so the items stay upright. The dashed edge is the system's line form for a path that is not a promise. It belongs to the [expressive layer](../../foundations/motion.md).

## When to use

- Use it for a small set (three to eight) of related, non-interactive things around one idea: the lanes around "Office hours", the apps around the package.
- Use [Tile](../content/tile.md)s or short badges as items, and a brand render or a [Logo](../identity/logo.md) in the center.
- Don't put links or buttons on the ring: they move.
- Don't use it for data. Position carries no meaning.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Orbit | `.ds-orbit` | Square, `calc(var(--ds-orbit-radius) * 2px)` wide; the radius is set with `radius` (default 140) |
| Core | `.ds-orbit__core` | The center content |
| Ring | `.ds-orbit__ring` | 1px dashed `border-subtle` circle, turns over `drift` (24s) |
| Item | `.ds-orbit__item` | Zero-size anchor placed by `--angle` |
| Upright | `.ds-orbit__upright` | Centers the item on the anchor and counter-turns it |

## States

| State | Looks | Set by |
|---|---|---|
| Turning | The ring turns clockwise; items stay upright | default |
| Still | Items rest at their angles, upright | reduced motion |

## Behavior and accessibility

- The items are in the DOM in order, so assistive technology reads them as a sequence. Give purely decorative items `aria-hidden="true"` yourself.
- Nothing on the ring should be focusable.
- Fix the size with `radius`; the component is `2 x radius` px wide, so check it on a 320px screen and use a smaller radius there.

## React

```tsx
import { Orbit, Tile, Logo } from '@meetingat10/design-system/react';

<Orbit radius={150} items={[<Tile icon="chats" tone="community" />, <Tile icon="chalkboard" tone="consult" />, <Tile icon="calendar" />]}>
  <Logo markOnly size="xl" label="Meeting At 10" />
</Orbit>
```

Orbit has no hooks, so it also renders in React Server Components.

## Plain CSS

```html
<div class="ds-orbit" style="--ds-orbit-radius: 150">
  <div class="ds-orbit__core">...</div>
  <div class="ds-orbit__ring">
    <div class="ds-orbit__item" style="--angle: -90deg"><div class="ds-orbit__upright">...</div></div>
    <div class="ds-orbit__item" style="--angle: 30deg"><div class="ds-orbit__upright">...</div></div>
    <div class="ds-orbit__item" style="--angle: 150deg"><div class="ds-orbit__upright">...</div></div>
  </div>
</div>
```

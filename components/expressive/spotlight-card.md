---
title: SpotlightCard
description: A card whose lane-colored glow follows the pointer, optionally tilting toward it, as one link or a plain sheet.
react: SpotlightCard
---
# SpotlightCard

SpotlightCard is a [Card](../content/card.md) with a highlighter-colored glow that follows the pointer and an edge that picks up the lane color on hover. With `tilt` it turns up to 6 degrees toward the pointer and lifts. It keeps the paper sheet, the hairline and the 12px corners. It belongs to the [expressive layer](../../foundations/motion.md).

## When to use

- Use it for a short row of entry points on a marketing page: a title and a sentence each, three or four cards.
- Use `lane` to match the destination's lane: schedule (default, navy), `community` (amber) or `consult` (emerald). The color marks a topic, never a permission.
- Don't put controls inside a card with `href`: the whole card is one link.
- Don't use it for items in a collection (use [Card](../content/card.md)) or in the portal.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Card | `.ds-card .ds-spotlight` | The card surface, with `isolation: isolate`; `.ds-card--link` is added with `href` |
| Glow | `.ds-spotlight::before` | A 24rem radial gradient in the lane's highlighter color at `--ds-sx`, `--ds-sy`; opacity 0 to 1 over 120ms |
| Lane | `.ds-spotlight--community`, `--consult` | Switch the glow (`--ds-spot`) and the hover edge (`--ds-spot-edge`) |
| Tilt | `.ds-spotlight--tilt` | `perspective(900px)` with rotateX and rotateY from `--ds-ty`, `--ds-tx` (-1 to 1) times 6 degrees |

## States

| State | Looks | Set by |
|---|---|---|
| Rest | A plain card | default |
| Hover, focus within | Glow under the pointer (centered for keyboard focus), edge in the lane color | `:hover`, `:focus-within` |
| Tilting | Turns toward the pointer, lifts 2px | `tilt` with a fine pointer |
| Reduced motion, touch | No tilt, no pointer glow follow; the glow still appears centered on hover or focus | `prefers-reduced-motion`, `pointer: coarse` |

## Behavior and accessibility

- With `href` the card renders an `a`, so its whole text is the link's name. Keep it to a title and one sentence, or leave `href` out and put a [CardTitle](../content/card.md) with `href` inside for a link named by its title alone.
- The glow and tilt are hover decoration; the focus ring comes from the card as for any linked card.
- Pointer tracking is skipped on touch screens and under reduced motion; no information depends on it.
- Forced colors: the card keeps its edge in the system text color.

## React

```tsx
import { SpotlightCard, CardTitle, CardBody } from '@meetingat10/design-system/react';

<SpotlightCard href="/components/" lane="community" tilt>
  <strong>Components</strong>
  <span>Every component on a light and a dark sheet.</span>
</SpotlightCard>
```

`as` is `div` (default), `article` or `li` when there is no `href`. SpotlightCard is a client component.

## Plain CSS

```html
<a class="ds-card ds-card--link ds-spotlight ds-spotlight--community ds-spotlight--tilt" href="/components/">...</a>
```

Set `--ds-sx` and `--ds-sy` (px) on `pointermove`, and `--ds-tx` and `--ds-ty` (-1 to 1) for the tilt.

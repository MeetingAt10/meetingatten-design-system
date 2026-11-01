---
title: Tile
description: A small solid block in a lane or status color holding one icon, duotone by default.
react: Tile
---
# Tile

A tile is a small solid block that holds one icon: the lane color owns the whole block and the icon sits on it in the duotone weight, whose 20% layer reads as a highlighter. Use it beside a heading or in a view state to mark the lane or category. It is decorative unless you give it a label.

## When to use

- Use it to mark a lane or category next to visible text (a section heading, a view state title).
- Use the status tones (`success`, `warning`, `danger`) only next to words that state the status.
- Use `label` when the tile stands alone and carries meaning.
- Don't make it interactive; it is not a button. Use [IconButton](../control/icon-button.md).
- Don't line tiles up as same-size icon cards for page structure; use [Agenda](../layout/agenda.md) rows.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Block | `.ds-tile` | 40px, radius 8; schedule lane (navy) with an on-action icon by default |
| Small | `.ds-tile--sm` | 32px, radius 6, 16px icon |
| Large | `.ds-tile--lg` | 56px, radius 12, 32px icon |
| Lane tones | `.ds-tile--community`, `--consult` | Amber and emerald fills |
| Restricted | `.ds-tile--restricted` | Hatched paper with an ink rule and an ink icon, no hue |
| Neutral | `.ds-tile--neutral` | Neutral highlighter wash with an ink icon |
| Status tones | `.ds-tile--success`, `--warning`, `--danger` | Status ink fill with the status ground as the icon color |
| Icon | `.ds-icon` | 20px (16 small, 32 large), duotone by default |

## States

| State | Looks | Set by |
|---|---|---|
| Decorative | Hidden from assistive tech | no `label` (`aria-hidden="true"`) |
| Labeled | Announced as an image with its name | `label` (`role="img"`, `aria-label`) |

## Behavior and accessibility

- A tile has no keyboard behavior.
- Color never carries the meaning alone: pair every tile with visible words, or give it a `label`.
- The restricted tone is hatched ink, because color never signals confidentiality.
- Forced colors: the fill drops out and the tile keeps a `CanvasText` edge around the icon.

## React

```tsx
import { Tile } from '@meetingat10/design-system/react';

<Tile icon="calendar" />
<Tile icon="chats" tone="community" />
<Tile icon="chalkboard" tone="consult" />
<Tile icon="lock" tone="restricted" label="Restricted" />
<Tile icon="tray" tone="neutral" size="lg" />
<Tile icon="check-circle" tone="success" size="sm" />
```

`tone` defaults to `schedule`, `size` to `md` and `weight` to `duotone`. `icon` takes a name from the curated icon vocabulary.

## Plain CSS

```html
<span class="ds-tile ds-tile--community" aria-hidden="true">
  <svg class="ds-icon"><use href="sprite.svg#ds-chats-duotone"/></svg>
</span>
<span class="ds-tile ds-tile--restricted" role="img" aria-label="Restricted">
  <svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-lock-duotone"/></svg>
</span>
<span class="ds-tile ds-tile--lg ds-tile--neutral" aria-hidden="true">
  <svg class="ds-icon"><use href="sprite.svg#ds-tray-duotone"/></svg>
</span>
```

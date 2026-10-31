---
title: GridBackdrop
description: The Office Hours ruled sheet as a ground: hour and half-hour hairlines that fade out toward the edges.
react: GridBackdrop
---
# GridBackdrop

GridBackdrop draws the weekly timetable's ruling behind a marketing hero: hour rules every 96px across and down, half-hour rules every 48px down the sheet, all hairlines, fading out toward the edges with a radial mask. It belongs to the [expressive layer](../../foundations/motion.md) and ties a landing page back to the [Timetable](../scheduling/timetable.md).

## When to use

- Use it behind the hero, alone or over an [Aurora](aurora.md), in a parent with `position: relative; isolation: isolate`.
- Don't use it behind a real Timetable: two grids that do not line up read as a mistake.
- Don't use it in the portal or behind long text.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Backdrop | `.ds-grid-backdrop` | Absolute, `inset: 0`, `z-index: -1`, no pointer events |
| Hour rules | `--ds-border-subtle` | 1px every 96px, both directions |
| Half-hour rules | `--ds-rule-minor` | 1px every 48px, horizontal only |
| Fade | mask | A radial mask (ink to transparent) centered 40% from the top |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Static hairlines, strongest at the middle | always |
| Hidden | Not drawn | forced colors |

## Behavior and accessibility

- Decorative: `aria-hidden="true"`, static, no motion of its own.
- The hairlines use the same tokens as every other rule, so they follow the light and dark themes.

## React

```tsx
import { GridBackdrop } from '@meetingat10/design-system/react';

<section style={{ position: 'relative', isolation: 'isolate' }}>
  <GridBackdrop />
  ...
</section>
```

GridBackdrop has no hooks, so it also renders in React Server Components.

## Plain CSS

```html
<div class="ds-grid-backdrop" aria-hidden="true"></div>
```

---
title: Spinner
description: A small clock face whose hand sweeps while work runs, drawn in the current text color.
react: Spinner
---
# Spinner

The spinner is a clock face with a sweeping hand, drawn in `currentColor`. It shows that work is running where the result will appear: inside a pending button, in a loading view, beside "Checking availability". Pair it with words; the spinner alone never carries the state.

## When to use

- Use it for a short wait tied to one control or region, next to visible text ("Loading reports").
- Use `label` when the spinner itself must name the wait.
- Don't add one to a pending [Button](../control/button.md); `loading` already shows it and announces the state.
- Don't use it for long or measurable work; use [Progress](progress.md) with a value.
- Don't use it for a whole list or page; use [Skeleton](../data/skeleton.md) placeholders or a loading [View State](../data/view-state.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Face | `.ds-spinner` | 16px by default; a 1.5px `currentColor` ring at 40% opacity |
| Hand | `::after` | 1.5px wide, 38% of the face, one turn every 1.1s |
| Size | `.ds-spinner--20`, `--24`, `--32` | 24 and 32 draw a 2px ring and hand |

## States

| State | Looks | Set by |
|---|---|---|
| Running | The hand sweeps around the face | default |
| Reduced motion | The hand rests at the top; the words carry the state | `prefers-reduced-motion: reduce` |
| Named | Exposed as a status named by the label | `label` (renders `role="status"` and `aria-label`) |
| Decorative | Hidden from assistive tech | no `label` (renders `aria-hidden="true"`) |

## Behavior and accessibility

- Without `label` the spinner is hidden from assistive tech; put the words in visible text or in the busy control.
- With `label` it renders `role="status"` named by the label. Support for a live region that has a name but no text varies between screen readers, so also show the words when the wait matters.
- It takes the surrounding text color, so it reads on navy, danger and inverse fills.
- Reduced motion: the hand stops; nothing else changes.
- Forced colors: the ring and hand follow the forced text color.

## React

```tsx
import { Spinner } from '@meetingat10/design-system/react';

<p role="status"><Spinner /> Checking availability</p>
<Spinner size={24} label="Loading reports" />
<Spinner size={32} />
```

`size` is 16 (default), 20, 24 or 32.

## Plain CSS

```html
<p role="status"><span class="ds-spinner" aria-hidden="true"></span> Checking availability</p>
<span class="ds-spinner ds-spinner--24" role="status" aria-label="Loading reports"></span>
```

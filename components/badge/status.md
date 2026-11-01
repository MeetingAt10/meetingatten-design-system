---
title: Status Badge
description: A word plus a small marker whose line form carries the state, with a tone that only reinforces.
react: Badge
---
# Status Badge

A status badge is a word plus a small square marker: "Review pending", "Resolved", "Withdrawn". The marker's line form carries the state (solid, dashed, hatched, struck) and the tone only reinforces it. Status is its own family: never mix it with a [Role Badge](role.md) or [Severity](severity.md) in one chip.

## When to use

- Use it for the state of a record, a request or a post, always with a word.
- Pick the `form` from the state first, then a `tone` if it helps: `pending` for drafts and reviews, `restricted` for restricted records, `closed` for withdrawn or closed items.
- Use `outline` with `marker={false}` for a plain label such as "Archived".
- Don't let the tone or the marker stand alone; the word is required.
- Don't use it for a role, a severity or a lane; use [Role Badge](role.md), [Severity](severity.md) or a lane chip ([Card](../content/card.md)).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Chip | `.ds-badge` | 24px tall, radius 4, 8px padding, caption type (Inter 500 12/16), neutral highlighter wash |
| Marker | `.ds-badge__mark` | 8px square whose line form carries the state; decorative |
| Tone | `.ds-badge--info`, `--success`, `--warning`, `--danger`, `--community`, `--consult` | Tints the chip and colors the word and marker; neutral has no modifier |
| Outline | `.ds-badge--outline` | No tint; a 1px `border-subtle` inset ring |

## States

| State | Looks | Set by |
|---|---|---|
| Solid: open, active, done | Filled square | `form="solid"` (default), no modifier |
| Pending: pending, draft | Dashed square outline | `form="pending"`, `.ds-badge--pending` |
| Restricted | Hatched square with an outline | `form="restricted"`, `.ds-badge--restricted` |
| Taken | Hatched square with an outline (the same mark as restricted) | `form="taken"`, `.ds-badge--taken` |
| Closed: closed, withdrawn | Outlined square struck through on the diagonal | `form="closed"`, `.ds-badge--closed` |
| Label only | The word without a marker | `marker={false}` |

Common pairs:

| Word | `form` | `tone` |
|---|---|---|
| Draft, Review pending | `pending` | `warning` |
| Submitted | `solid` | `info` |
| Resolved | `solid` | `success` |
| Restricted review | `restricted` | `neutral` |
| Booked | `taken` | `consult` |
| Withdrawn | `closed` | `neutral` |

## Behavior and accessibility

- A badge is text, not a control: no focus and no role. The marker is `aria-hidden`, so screen readers read the word.
- The word carries the state, the line form keeps it readable without color, and the tone reinforces.
- Tones never mean permission or confidentiality. Restricted records use the `restricted` form and a word, not a hue.
- No motion.
- Forced colors: the chip keeps a `CanvasText` edge and the solid mark fills with `CanvasText`; the other marks become `Canvas` squares with a `CanvasText` outline (pending stays dashed). The hatch drops out, so the word carries restricted and taken.

## React

```tsx
import { Badge } from '@meetingat10/design-system/react';

<Badge tone="warning" form="pending">Review pending</Badge>
<Badge tone="success">Resolved</Badge>
<Badge form="restricted">Restricted review</Badge>
<Badge tone="consult" form="taken">Booked</Badge>
<Badge form="closed">Withdrawn</Badge>
<Badge tone="info">Submitted</Badge>
<Badge outline marker={false}>Demo</Badge>
```

`tone` is `neutral` (default), `info`, `success`, `warning`, `danger`, `community` or `consult`. `form` is `solid` (default), `pending`, `restricted`, `taken` or `closed`.

## Plain CSS

```html
<span class="ds-badge ds-badge--warning ds-badge--pending"><span class="ds-badge__mark" aria-hidden="true"></span>Review pending</span>
<span class="ds-badge ds-badge--success"><span class="ds-badge__mark" aria-hidden="true"></span>Resolved</span>
<span class="ds-badge ds-badge--restricted"><span class="ds-badge__mark" aria-hidden="true"></span>Restricted review</span>
<span class="ds-badge ds-badge--closed"><span class="ds-badge__mark" aria-hidden="true"></span>Withdrawn</span>
<span class="ds-badge ds-badge--outline">Demo</span>
```

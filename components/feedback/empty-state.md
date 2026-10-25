---
title: Empty State
description: Open content for a region with nothing to show yet, drawn as an empty ruled sheet, with the reason and one next step.
react: EmptyState
---
# Empty State

An empty state fills a region that has nothing to show yet: no consultations booked, no posts saved. It is open content, not a card: a small empty ruled sheet drawn as geometry (a week grid with dashed, unfilled slots and one waiting block), a title that says what is missing, one line on why, and one next step.

## When to use

- Use it when a list, table or schedule has no items yet and the person can do something about it.
- Say what is missing in the title ("No consultations booked yet") and why in one line.
- Offer one next step, or say plainly that there is nothing to do.
- Don't use it for errors, loading or restricted regions; use a [View State](../data/view-state.md).
- Don't wrap it in a card or swap in an illustration; the drawn sheet is the art.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Root | `.ds-empty` | Centered grid, 48px 24px padding, 8px gap |
| Art | `.ds-empty__art` | 132x92px SVG; decorative |
| Sheet | `.ds-empty__sheet` | Paper fill with a `border-subtle` stroke |
| Rules | `.ds-empty__rule` | `border-subtle` hairlines of the week grid |
| Slots | `.ds-empty__slot` | Dashed `border-default` outlines: unfilled time |
| Block | `.ds-empty__block` | One waiting block: schedule wash with a navy stroke |
| Title | `.ds-empty__title` | h4 style (Plus Jakarta Sans 700 17/24); `h2` by default |
| Body | `.ds-empty__body` | Body small, secondary, up to 26rem |
| Actions | `.ds-empty__actions` | One next step, centered |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Art, title and body | `title`, `description` |
| With next step | A centered action row under the body | `action`, `.ds-empty__actions` |
| Nested heading | The title renders as `h3` | `level={3}` |

## Behavior and accessibility

- The art is `aria-hidden`; the title and body carry the message.
- The title is a real heading (`h2` by default, `h3` with `level={3}`); match it to the surrounding outline.
- It is not a live region. When it replaces results after a filter or search, say so in text through the region that owns the results ("No posts match. Try another word.").
- Keep the next step honest: "Book a time" is fine; a promise to find a slot is not.
- No motion.

## React

```tsx
import { Button, EmptyState } from '@meetingat10/design-system/react';

<EmptyState
  level={3}
  title="No consultations booked yet"
  description="Booked times appear here once faculty confirm them."
  action={<Button icon="calendar-check" href="/consultations">Book a time</Button>}
/>
```

## Plain CSS

```html
<div class="ds-empty">
  <svg class="ds-empty__art" viewBox="0 0 132 92" aria-hidden="true" focusable="false">
    <rect class="ds-empty__sheet" x="0.5" y="0.5" width="131" height="91" rx="8"/>
    <line class="ds-empty__rule" x1="1" x2="131" y1="22" y2="22"/>
    <line class="ds-empty__rule" x1="1" x2="131" y1="46" y2="46"/>
    <line class="ds-empty__rule" x1="1" x2="131" y1="70" y2="70"/>
    <line class="ds-empty__rule" x1="34" x2="34" y1="1" y2="91"/>
    <line class="ds-empty__rule" x1="66" x2="66" y1="1" y2="91"/>
    <line class="ds-empty__rule" x1="98" x2="98" y1="1" y2="91"/>
    <rect class="ds-empty__slot" x="38" y="26" width="24" height="16" rx="3"/>
    <rect class="ds-empty__slot" x="70" y="50" width="24" height="16" rx="3"/>
    <rect class="ds-empty__slot" x="6" y="50" width="24" height="16" rx="3"/>
    <rect class="ds-empty__block" x="102" y="26" width="24" height="40" rx="3"/>
  </svg>
  <h3 class="ds-empty__title">No consultations booked yet</h3>
  <p class="ds-empty__body">Booked times appear here once faculty confirm them.</p>
  <div class="ds-empty__actions"><a class="ds-btn ds-btn--primary" href="/consultations">Book a time</a></div>
</div>
```

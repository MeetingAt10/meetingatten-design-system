---
title: Stepper
description: Progress through a short flow drawn as a timeline, with done steps on a solid line, the current step marked, and upcoming steps on a dashed line, each with its state in words.
react: Stepper
---
# Stepper

A stepper shows progress through a short flow (book a time, add details, review) as a timeline. Done steps sit on a solid line with a check, the current step carries a dot, and upcoming steps sit on a dashed line. Every step says its state in words.

## When to use

- Use it for flows of three to five steps where people benefit from seeing what is left.
- Use a step `description` for the honest state of a step ("Pending policy decision").
- Don't use it for views of one page; use [Tabs](tab.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| List | `.ds-stepper` | Ordered list; vertical on phones, a horizontal timeline from 600px |
| Step | `.ds-step` + `--done`, `--current` | Upcoming steps have no modifier |
| Track | `.ds-step::before` | 2px line to the next marker: solid navy after a done step, dashed otherwise |
| Marker | `.ds-step__marker` | 28px circle: number in Inter 600 12px (upcoming), check (done), navy dot (current) |
| Label | `.ds-step__label` | Label style; primary text for done and current |
| State | `.ds-step__state` | Caption: "Done", "Current step", "Not started", or your description |

## States

| State | Looks | Words | Set by |
|---|---|---|---|
| Done | Solid navy marker with a bold check; solid track | "Done" | index before `current`, `.ds-step--done` |
| Current | Navy ring with a navy dot | "Current step" | `current`, `.ds-step--current`, `aria-current="step"` |
| Upcoming | Outlined marker with its number; dashed track | "Not started" | after `current` |

## Behavior and accessibility

- An ordered list named by `label` (default "Progress"); the current step has `aria-current="step"`.
- The state word is always present: visible, or visually hidden when a `description` replaces it.
- Line form (solid, dashed) and words carry the state, never color alone.
- The stepper is not interactive; navigation between steps belongs to the flow's buttons.

## React

```tsx
import { Stepper } from '@meetingat10/design-system/react';

<Stepper label="Booking progress" steps={['Choose a time', 'Add details', 'Review']} current={1} />
<Stepper
  label="Report progress"
  steps={['Draft', { label: 'Recipients confirmed', description: 'Pending policy decision' }, 'Submitted', 'Review']}
  current={1}
/>
```

## Plain CSS

```html
<ol class="ds-stepper" aria-label="Booking progress">
  <li class="ds-step ds-step--done"><span class="ds-step__marker" aria-hidden="true"><svg class="ds-icon ds-icon--16"><use href="sprite.svg#ds-check"/></svg></span><span class="ds-step__text"><span class="ds-step__label">Choose a time</span><span class="ds-step__state">Done</span></span></li>
  <li class="ds-step ds-step--current" aria-current="step"><span class="ds-step__marker" aria-hidden="true"></span><span class="ds-step__text"><span class="ds-step__label">Add details</span><span class="ds-step__state">Current step</span></span></li>
  <li class="ds-step"><span class="ds-step__marker" aria-hidden="true"></span><span class="ds-step__text"><span class="ds-step__label">Review</span><span class="ds-step__state">Not started</span></span></li>
</ol>
```

An empty marker prints its step number from a CSS counter.

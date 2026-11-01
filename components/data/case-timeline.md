---
title: Case Timeline
description: A record's history on a vertical time rule, solid through what happened and dashed into what is pending, with the current state on the now-dot.
react: CaseTimeline
---
# Case Timeline

A case timeline shows the history of a record on a vertical time rule. Time codes sit on the left; the rail is solid through what happened and dashed into what is pending; the current state carries the now-dot. Markers use the line forms: solid = done, dashed = pending, hatched = a restricted step. Events are listed oldest first.

## When to use

- Use it on a report or request detail page to show what happened and what comes next.
- Name actors by role ("Department office", "Assigned reviewer"), never by an inferred identity.
- Don't use it for progress through a short form; use [Stepper](../navigation/stepper.md).
- Don't promise when a pending step will happen; say what it waits on.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| List | `.ds-timeline` | Ordered list, oldest first |
| Event | `.ds-timeline__event` | Three columns: time, marker, content; 24px below each event |
| Rail | `::before` on the event | 2px rule from this marker to the next; solid by default, dashed after the current and pending events |
| Time | `.ds-timeline__time` | `time` style, tabular mono, end-aligned; column width from `--tl-time` (default 4.5rem) |
| Marker | `.ds-timeline__marker` | 14px square block, radius 3 |
| Title | `.ds-timeline__title` | Label style |
| Body | `.ds-timeline__body` | Body small, secondary text |
| Actor | `.ds-timeline__actor` | Caption, secondary text; a role, not a person |

## States

| State | Looks | Set by |
|---|---|---|
| Done | Solid navy marker on a solid rail | `state="done"` (default), `.ds-timeline__event--done` |
| Current | Round marker: a now-color ring with a now-color dot; the rail below turns dashed | `state="current"`, `.ds-timeline__event--current`, `aria-current="step"` |
| Pending | Paper marker with a dashed outline; dashed rail | `state="pending"`, `.ds-timeline__event--pending` |
| Restricted | Paper marker with an ink rule and strong hatching | `state="restricted"`, `.ds-timeline__event--restricted` |

## Behavior and accessibility

- An ordered list named by `label` (default "Case activity"); the current event has `aria-current="step"`.
- Each title ends with the state in words for screen readers ("(Done)", "(Current)", "(Pending)", "(Restricted step)"). These words are visually hidden; write titles that say the state too ("Recipients being confirmed", "Submitted to assigned reviewers").
- Dates use `<time>` with a machine-readable `dateTime`.
- Restricted steps say who can see them, without implying anonymity.
- Forced colors: the rails and outlined markers stay visible.

## React

```tsx
import { CaseTimeline } from '@meetingat10/design-system/react';

<CaseTimeline
  label="Case activity, CCS-2026-0142"
  events={[
    { title: 'Draft created', date: '21 Oct 09:12', dateTime: '2026-10-21T09:12', actor: 'You' },
    { title: 'Recipients being confirmed', state: 'current', body: 'The department office is confirming who receives this category.', actor: 'Department office' },
    { title: 'Submitted to assigned reviewers', state: 'pending' },
    { title: 'Review', state: 'restricted', body: 'Visible only to assigned reviewers and you.' },
  ]}
/>
```

`events` is required, oldest first. Each event takes `title`, and optionally `actor`, `body`, `date`, `dateTime` and `state`.

## Plain CSS

```html
<ol class="ds-timeline" aria-label="Case activity, CCS-2026-0142">
  <li class="ds-timeline__event ds-timeline__event--done">
    <span class="ds-timeline__time"><time datetime="2026-10-21T09:12">21 Oct 09:12</time></span>
    <span class="ds-timeline__marker" aria-hidden="true"></span>
    <div class="ds-timeline__content">
      <p class="ds-timeline__title">Draft created<span class="ds-visually-hidden"> (Done)</span></p>
      <p class="ds-timeline__actor">You</p>
    </div>
  </li>
  <li class="ds-timeline__event ds-timeline__event--current" aria-current="step">
    <span class="ds-timeline__time"></span>
    <span class="ds-timeline__marker" aria-hidden="true"></span>
    <div class="ds-timeline__content">
      <p class="ds-timeline__title">Recipients being confirmed<span class="ds-visually-hidden"> (Current)</span></p>
      <p class="ds-timeline__body">The department office is confirming who receives this category.</p>
    </div>
  </li>
  <li class="ds-timeline__event ds-timeline__event--pending">
    <span class="ds-timeline__time"></span>
    <span class="ds-timeline__marker" aria-hidden="true"></span>
    <div class="ds-timeline__content">
      <p class="ds-timeline__title">Submitted to assigned reviewers<span class="ds-visually-hidden"> (Pending)</span></p>
    </div>
  </li>
</ol>
```

---
title: Timetable
description: A ruled week or day sheet of time blocks on a real, labeled hour grid, with the now-line on today and a hatched restricted band.
react: Timetable
---
# Timetable

A timetable is the weekly consultation sheet on a faculty door, rebuilt as an interface: a ruled sheet whose rules are a real, labeled hour grid. [Time blocks](time-block.md) sit at their start and length in their lane color; today is tinted, its date sits on a plate and the [now-line](now-line.md) crosses it; a hatched, labeled band under the grid names what is restricted. Use it for a week or a day of classes, consultations and community events.

## When to use

- Use it when time is the point: a week of office hours, a day sheet, the schedule preview on a landing page.
- Use `band` to draw the restricted lane into the sheet ("Reports: you see only your own records"), never to hide it.
- Use realistic course, room and faculty names in examples ("Prof. Reyes", "CCS 304").
- Don't use it for an undated list of things; use [Agenda](../layout/agenda.md) rows.
- Don't show a pinned `now` on a live page. Without `now` the line follows the clock.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-timetable` | Paper with a hairline rule, radius 12 |
| Scroller | `.ds-timetable__scroller` | Scrolls sideways when the week is wider than the screen; day heads snap into place |
| Grid | `.ds-timetable__grid` | Time column (3.5rem) plus one column per day (`--tt-days`), at least 8rem wide (7.25rem on phones, `--tt-day-min`) |
| Corner | `.ds-timetable__corner` | Sticky, above the hour labels |
| Day head | `.ds-timetable__day-head` | Weekday (`.ds-timetable__dow`) in label style and date (`.ds-timetable__date`) in Plus Jakarta Sans 700 |
| Today head | `.ds-timetable__day-head.is-today` | The date sits on a plate (`--ds-plate-bg`, `--ds-plate-fg`) |
| Hour labels | `.ds-timetable__hours` | Sticky time column, `time` style, one label per hour (`--h`) |
| Day column | `.ds-timetable__day` | Hour rules (hairline) and half-hour rules (`--ds-rule-minor`); today tinted with `--ds-today-bg` |
| Events | `.ds-timetable__events` > `.ds-timetable__event` | Each block sits at `--start` hours for `--span` hours; overlapping blocks share the width (`--col` of `--cols`) |
| Now time | `.ds-timetable__now-time` | The current time on a now-color chip in the hour column; hour labels it would cover are hidden |
| Now-line | `.ds-now` | On today's column |
| Band | `.ds-timetable__band` > `.ds-timetable__band-inner` | Hatched strip under the grid; its words sit on one paper label |
| Band label | `.ds-timetable__band-label` | Ink chip for the lane name ("Reports") |

Hour rows follow density: 48px comfortable, 40px compact (`--ds-density-hour-row`). Short blocks keep the title first: under 84px the meta line is dropped and the title clamps to two lines, under 60px to one line, and under 34px the time and title share one line.

## States

| State | Looks | Set by |
|---|---|---|
| Today | Tinted column, date on a plate, now-line and now time | `isToday` on a day |
| Live now | The now-line follows the clock | `now="live"` (default) |
| Pinned now | The now-line stays at a fixed time (screenshots, tests) | `now={10.7}` |
| No now | No now-line or now time | `now={false}`, or the time is outside the grid |
| Isolated | Hovering, focusing or choosing a block dims the others to 55% | `isolate` (default true), `.ds-isolate` |
| Entering | Blocks drop 6px into their cells on the snappy spring, one after another; they glide when the schedule changes | `animate` (default true) |
| Overflowing | Opens scrolled so today is the first visible day | automatic |

Block states (open, pending, taken, disabled, selected) come from [Time Block](time-block.md).

## Behavior and accessibility

- The sheet is a group named by `label`. With the default `headingLevel` of 3, a visually hidden heading one level up carries the name, so day heads never skip a level; with `headingLevel={2}` the name is an `aria-label`.
- Each day column is a `role="group"` named by its head (use `fullLabel`, for example "Wednesday 21 October", and today adds ", today"), holding an ordered list of its blocks in time order. Hour labels and rules are decoration and hidden from assistive tech.
- Interactive events (`href` or `onPress`) get a name built from the time, title and meta. Put the state in `meta` or `title` when it matters, because short cells drop the meta line and the default state word.
- The restricted band is hatched ink with words, never a hue; it states the boundary without promising anonymity.
- Reduced motion: no drop and no layout glide; the now-line moves without gliding; dimming changes at once.
- Forced colors: the sheet and blocks keep a `CanvasText` edge, the band a dotted edge; the now-line and now time paint in `Highlight`.

## React

```tsx
import { Icon, Timetable } from '@meetingat10/design-system/react';

<Timetable
  label="This week"
  days={[
    { id: 'tue', label: 'Tue', date: '20', fullLabel: 'Tuesday 20 October' },
    { id: 'wed', label: 'Wed', date: '21', fullLabel: 'Wednesday 21 October', isToday: true },
  ]}
  events={[
    { id: 'tue-open', day: 'tue', start: 10, end: 11, title: 'Course planning', meta: 'Prof. Reyes', lane: 'consult', form: 'open' },
    { id: 'tue-booked', day: 'tue', start: 12.5, end: 13.5, title: 'Thesis advising', lane: 'consult', form: 'taken' },
    { id: 'wed-hours', day: 'wed', start: 9, end: 11, title: 'Consultation hours', meta: 'CCS 304', lane: 'consult' },
    { id: 'wed-hack', day: 'wed', start: 13, end: 14.5, title: 'Hackathon briefing', meta: 'AVR', lane: 'community' },
  ]}
  now={10.7}
  band={
    <>
      <span className="ds-timetable__band-label"><Icon name="lock" size={16} weight="fill" /><strong>Reports</strong></span>
      Restricted: you see only your own records.
    </>
  }
/>
```

`startHour` and `endHour` default to 8 and 17. Events use decimal hours (9.5 = 09:30); `time` overrides the generated "09:30-10:30" code.

## Plain CSS

```html
<div class="ds-timetable ds-isolate" role="group" aria-label="This week" style="--tt-hours: 9">
  <div class="ds-timetable__scroller">
    <div class="ds-timetable__grid" style="--tt-days: 2">
      <div class="ds-timetable__corner" aria-hidden="true"></div>
      <h3 class="ds-timetable__day-head" id="tt-tue" aria-label="Tuesday 20 October">
        <span class="ds-timetable__dow">Tue</span> <span class="ds-timetable__date">20</span>
      </h3>
      <h3 class="ds-timetable__day-head is-today" id="tt-wed" aria-label="Wednesday 21 October, today">
        <span class="ds-timetable__dow">Wed</span> <span class="ds-timetable__date">21</span>
      </h3>
      <div class="ds-timetable__hours" aria-hidden="true">
        <span style="--h: 0">08:00</span><span style="--h: 1">09:00</span><span style="--h: 2">10:00</span>
        <span class="ds-timetable__now-time" style="--now: 2.7">10:42</span>
      </div>
      <div class="ds-timetable__day" role="group" aria-labelledby="tt-tue">
        <ol class="ds-timetable__events">
          <li class="ds-timetable__event" style="--start: 2; --span: 1">
            <article class="ds-block ds-block--consult ds-block--open">
              <time class="ds-block__time">10:00-11:00</time>
              <p class="ds-block__title">Course planning</p>
              <p class="ds-block__meta">Open</p>
            </article>
          </li>
        </ol>
      </div>
      <div class="ds-timetable__day is-today" role="group" aria-labelledby="tt-wed">
        <ol class="ds-timetable__events">
          <li class="ds-timetable__event" style="--start: 1; --span: 2">
            <article class="ds-block ds-block--consult">
              <time class="ds-block__time">09:00-11:00</time>
              <p class="ds-block__title">Consultation hours</p>
              <p class="ds-block__meta">CCS 304</p>
            </article>
          </li>
        </ol>
        <div class="ds-now" style="--now: 2.7" aria-hidden="true"></div>
      </div>
    </div>
  </div>
  <div class="ds-timetable__band">
    <div class="ds-timetable__band-inner">
      <span class="ds-timetable__band-label"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-lock-fill"/></svg><strong>Reports</strong></span>
      Restricted: you see only your own records.
    </div>
  </div>
</div>
```

`--start` and `--now` count hours from the first hour of the grid; `--tt-hours` is the number of hours drawn.

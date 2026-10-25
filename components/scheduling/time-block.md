---
title: Time Block
description: The unit of the Office Hours world, a block whose lane color owns the whole fill, with its time code, title and state in words.
react: TimeBlock
---
# Time Block

A time block is one thing placed in time: a class, a consultation, a community event, a restricted record. Its lane color owns the whole block at full strength; the time code sits on top in tabular mono, the title below, the state and meta last. Use it inside a [Timetable](timetable.md), in agenda-like lists, or on its own as a preview of the week.

## When to use

- Use it for anything with a time or a lane: scheduled classes, open or booked consultation slots, community events.
- Use the `restricted` lane for report-related entries: hatched ink, no hue, with a word that says what is restricted.
- Use `form` for availability and let the default state words show.
- Don't use lane color to signal confidentiality or permission; the restricted lane is drawn with hatching and words.
- Don't use blocks as generic cards for content without a time or lane; use [Card](../content/card.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Block | `.ds-block` | Radius 6 (`--ds-radius-block`), 8px 12px padding, body-small text; the schedule lane (navy) is the default |
| Lane | `.ds-block--community`, `--consult`, `--restricted` | Violet, teal, or hatched paper with an ink rule (no hue) |
| Time | `.ds-block__time` | `time` style: JetBrains Mono 500 12/16, tabular, slashed zero |
| Title | `.ds-block__title` | Inter 600 14/20, clamped to 3 lines (1 line in short timetable cells) |
| Meta | `.ds-block__meta` | Caption; the state word first, then room, host or lane |
| Icon | `.ds-block__icon` | 16px, top right; duotone lane icon, or the filled check when selected |

## States

| State | Looks | Set by |
|---|---|---|
| Scheduled | The lane color fills the block; on-solid text | `form="scheduled"` (default), no modifier |
| Open | Paper with a solid lane outline and lane-colored text; word "Open" | `form="open"`, `.ds-block--open` |
| Pending | Paper with a dashed lane outline; word "Awaiting confirmation" | `form="pending"`, `.ds-block--pending` |
| Taken | Hatched paper, subtle rule, secondary text; word "Booked"; not interactive | `form="taken"`, `.ds-block--taken` |
| Disabled | Paper, subtle rule, title struck through; word "Unavailable" (or your `stateLabel`, for example "Cancelled"); not interactive | `form="disabled"`, `.ds-block--disabled` |
| Hover | Interactive blocks lift 2px with the lift shadow | `:hover`, `[data-hovered]`, `.is-hover` |
| Pressed | Back on the sheet, no shadow | `:active`, `[data-pressed]`, `.is-pressed` |
| Selected | The lane fill returns at full strength, with a filled check icon | `isSelected`, `[aria-pressed="true"]`, `[aria-checked="true"]`, `[aria-selected="true"]`, `[data-selected]`, `.is-selected` |
| Focus | 2px focus ring with a 2px gap | `:focus-visible` |
| Isolated | Inside `.ds-isolate`, hovering, focusing or choosing a block dims its neighbors to 55% | `.ds-isolate` on the group |
| Entering | Drops 6px into place once on the snappy spring (transform only; content is visible throughout) | `enter`, `.ds-block--enter` |

Line forms always come with a word in the meta line: solid fill or outline = open or active, dashed = pending, hatched = taken or restricted, struck = disabled or closed. On hatched blocks (taken, restricted) the time, title and meta sit on small paper labels, so the hatch lines never cross the text.

## Behavior and accessibility

- Without `href` or `onPress` the block is a static `<article>`. With `href` it is a link; with `onPress` it is a toggle button (`aria-pressed` follows `isSelected`).
- Interactive blocks need a full accessible name: pass `aria-label` with the time, title and state ("10:00 to 11:00, Course planning, open"). [Timetable](timetable.md) builds it for you.
- `taken` and `disabled` blocks, and `isDisabled`, cannot be pressed or followed.
- The state word is visible, so the line form is never the only signal. Monospace is used only for the time code.
- Reduced motion: no lift, no drop; selection and dimming change at once.
- Forced colors: blocks keep a `CanvasText` edge; pending edges are dashed, taken and restricted edges dotted; a selected block takes `Highlight`.

## React

```tsx
import { TimeBlock } from '@meetingat10/design-system/react';

<TimeBlock time="09:00-10:30" title="Data Structures" meta="CCS 201" />
<TimeBlock time="09:00-11:00" title="Consultation hours" meta="CCS 304" lane="consult" />
<TimeBlock
  time="10:00-11:00" title="Course planning" meta="Prof. Reyes (sample)" lane="consult" form="open"
  onPress={() => setChosen(!chosen)} isSelected={chosen}
  aria-label="10:00 to 11:00, Course planning, open"
/>
<TimeBlock time="15:30" title="Thesis check-in" lane="consult" form="pending" />
<TimeBlock time="12:30" title="Thesis advising" lane="consult" form="taken" />
<TimeBlock time="15:00" title="Guest seminar" form="disabled" stateLabel="Cancelled" />
<TimeBlock title="Reports" meta="Your own records only" lane="restricted" icon="lock" />
```

`lane` is `schedule` (default), `community`, `consult` or `restricted`. `dateTime` fills the `<time>` element's machine-readable value. `enter` drops the block in once on first paint.

## Plain CSS

```html
<article class="ds-block ds-block--consult">
  <time class="ds-block__time">10:00-10:30</time>
  <p class="ds-block__title">Course planning</p>
  <p class="ds-block__meta">CCS 304</p>
</article>

<button class="ds-block ds-block--consult ds-block--open" type="button" aria-pressed="false"
  aria-label="10:00 to 11:00, Course planning, open">
  <time class="ds-block__time">10:00-11:00</time>
  <span class="ds-block__title">Course planning</span>
  <span class="ds-block__meta"><span>Open</span><span>Prof. Reyes (sample)</span></span>
</button>

<article class="ds-block ds-block--consult ds-block--taken">
  <time class="ds-block__time">12:30</time>
  <p class="ds-block__title">Thesis advising</p>
  <p class="ds-block__meta">Booked</p>
</article>

<article class="ds-block ds-block--restricted">
  <p class="ds-block__title">Reports</p>
  <p class="ds-block__meta">Your own records only</p>
</article>
```

Wrap a group of interactive blocks in `.ds-isolate` to dim neighbors on hover and selection.

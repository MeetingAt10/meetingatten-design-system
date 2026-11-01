---
title: Consultation Slot Picker
description: Pick a consultation day from a sliding day strip, then one slot from blocks in line-form states that always say their state in words.
react: ConsultationSlotPicker
---
# Consultation Slot Picker

The consultation slot picker books office hours in two steps: a day strip where the chosen day becomes a solid navy block that slides between days, and one radio group of slot blocks below it. Slots use the line forms with a word and an icon: open is a solid emerald outline, chosen fills with emerald swiped in from the left, booked is hatched, unavailable is struck. The date and time zone note always show above the slots.

## When to use

- Use it to choose one consultation time from published slots.
- Use `timeZoneNote` every time, for example "sample local campus time".
- Say near the picker that a chosen time is a request, not a confirmed booking ("Nothing is booked until faculty confirm.").
- Don't use it for free-form dates; use [Date Picker](../control/date-picker.md) or [Calendar](../control/calendar.md).
- Don't promise a reply time or a confirmation deadline.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Picker | `.ds-slots` | Day strip, slot group, legend and messages, 16px apart |
| Day strip | `.ds-days` | One-choice group of days; scrolls sideways on narrow screens |
| Day | `.ds-day` | Weekday (`.ds-day__dow`, caption 600), date (`.ds-day__date`, Plus Jakarta Sans 700 20/28), open count (`.ds-day__count`, Inter 500 12px with tabular figures) |
| Day indicator | `.ds-day__indicator` | The navy block under the chosen day; slides between days on the smooth spring |
| Today | `.ds-day.is-today` | A now-color dot under the date |
| Summary | `.ds-slots__message` | The group's label: the chosen date and the time zone note |
| Slot list | `.ds-slot-list` | Grid of slot blocks, at least 9.5rem each |
| Slot | `.ds-slot` | Block with a emerald outline (radius 6); time (`.ds-slot__time`, mono 600 13/20) and state (`.ds-slot__state`, icon and word) |
| Legend | `.ds-slots__legend` | Names each line form in words, with swatches (`.ds-slots__swatch`) |
| Error | `.ds-field__error` | Message with a filled `warning-circle` icon |

## States

| State | Looks | Set by |
|---|---|---|
| Day: default | Paper with a hairline rule | none |
| Day: hover | Stronger rule | `:hover`, `[data-hovered]` |
| Day: chosen | The navy block slides under it; on-action text | `selectedDay`, `[aria-checked="true"]`, `[data-selected]` |
| Day: disabled | Secondary text, date struck | `isDisabled` on a day, `:disabled`, `[data-disabled]` |
| Slot: open | Paper, solid emerald outline, emerald text; "Open" with a plus icon | `state="open"` (default) |
| Slot: hover | Lifts 2px with the lift shadow (open slots only) | `:hover`, `[data-hovered]` |
| Slot: chosen | Emerald fill swipes in from the left; white text; "Chosen" with a check | `value`, `[data-selected]`, `[aria-checked="true"]`, `:has(input:checked)` |
| Slot: booked | Hatched paper, subtle rule, secondary text on small paper labels; "Booked" with a lock; cannot be chosen | `state="booked"`, `.ds-slot--booked` |
| Slot: unavailable | Subtle rule, time struck through; "Unavailable" with a prohibit icon; cannot be chosen | `state="unavailable"`, `.ds-slot--unavailable` |
| Slot: focus | 2px focus ring with a 2px gap | `[data-focus-visible]`, `:has(input:focus-visible)` |
| Loading | Slots disabled; "Checking availability" with the clock spinner | `isLoading` |
| Error | Danger message under the slots; the choice is kept | `errorMessage` |

## Behavior and accessibility

- The day strip is a single-choice group (`role="radiogroup"`) named "Consultation time: day". Arrow keys move between days; Space or Enter chooses one. Each day is named in full: "Wed 21 Oct, today, 3 open".
- The slots are one radio group labeled by the summary ("Wed 21 Oct · sample local campus time"). Arrow keys move and choose; booked and unavailable slots are disabled and say so in words.
- Loading is announced as a status; an error is announced at once and the chosen slot stays chosen.
- Every state has a word and an icon, and the legend names the line forms, so color is never the only signal.
- Reduced motion: no slide, no swipe and no lift; the chosen state lands at once.
- Forced colors: days and slots keep a `CanvasText` edge (dotted when booked); the chosen day and slot take `Highlight`, and the day indicator paints itself.

## React

```tsx
import { ConsultationSlotPicker } from '@meetingat10/design-system/react';

const [day, setDay] = useState('wed');
const [slot, setSlot] = useState<string | null>(null);

<ConsultationSlotPicker
  days={[
    { id: 'tue', weekday: 'Tue', day: 20, label: 'Tue 20 Oct', openCount: 2 },
    { id: 'wed', weekday: 'Wed', day: 21, label: 'Wed 21 Oct', openCount: 3, isToday: true },
    { id: 'thu', weekday: 'Thu', day: 22, label: 'Thu 22 Oct', openCount: 0, isDisabled: true },
  ]}
  selectedDay={day}
  onDayChange={setDay}
  slots={[
    { id: 's0900', time: '09:00-09:30' },
    { id: 's0930', time: '09:30-10:00', state: 'booked' },
    { id: 's1000', time: '10:00-10:30' },
    { id: 's1400', time: '14:00-14:30', state: 'unavailable' },
  ]}
  value={slot}
  onChange={setSlot}
  timeZoneNote="sample local campus time"
/>
```

`label` defaults to "Consultation time". `showLegend` defaults to true. `errorMessage` takes words such as "Couldn't check this slot. Try again."

## Plain CSS

```html
<div class="ds-slots">
  <div class="ds-days" role="radiogroup" aria-label="Consultation time: day">
    <button class="ds-day" type="button" role="radio" aria-checked="false" aria-label="Tue 20 Oct, 2 open">
      <span class="ds-day__dow">Tue</span><span class="ds-day__date">20</span><span class="ds-day__count">2 open</span>
    </button>
    <button class="ds-day is-today" type="button" role="radio" aria-checked="true" aria-label="Wed 21 Oct, today, 3 open">
      <span class="ds-day__indicator"></span>
      <span class="ds-day__dow">Wed</span><span class="ds-day__date">21</span><span class="ds-day__count">3 open</span>
    </button>
  </div>
  <div class="ds-stack ds-stack--12" role="radiogroup" aria-labelledby="slots-summary">
    <p class="ds-slots__message" id="slots-summary">Wed 21 Oct · sample local campus time</p>
    <div class="ds-slot-list">
      <label class="ds-slot">
        <input class="ds-check__input" type="radio" name="slot" value="s0900">
        <span class="ds-slot__time">09:00-09:30</span>
        <span class="ds-slot__state"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-plus"/></svg>Open</span>
      </label>
      <label class="ds-slot ds-slot--booked">
        <input class="ds-check__input" type="radio" name="slot" value="s0930" disabled>
        <span class="ds-slot__time">09:30-10:00</span>
        <span class="ds-slot__state"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-lock"/></svg>Booked</span>
      </label>
      <label class="ds-slot ds-slot--unavailable">
        <input class="ds-check__input" type="radio" name="slot" value="s1400" disabled>
        <span class="ds-slot__time">14:00-14:30</span>
        <span class="ds-slot__state"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-prohibit"/></svg>Unavailable</span>
      </label>
    </div>
  </div>
  <ul class="ds-slots__legend" aria-label="Slot states">
    <li><span class="ds-slots__swatch" aria-hidden="true"></span>Open: solid outline</li>
    <li><span class="ds-slots__swatch ds-slots__swatch--chosen" aria-hidden="true"></span>Chosen: filled</li>
    <li><span class="ds-slots__swatch ds-slots__swatch--booked" aria-hidden="true"></span>Booked: hatched</li>
    <li><span class="ds-slots__swatch ds-slots__swatch--unavailable" aria-hidden="true"></span>Unavailable: struck</li>
  </ul>
</div>
```

In plain markup the day strip needs a script for arrow keys and `aria-checked`, and the state word should change to "Chosen" when a slot is checked. Native radios handle the rest; the chosen fill follows `:checked`.

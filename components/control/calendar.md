---
title: Calendar
description: A month of days where today carries the now-dot, the chosen day becomes a solid block and unavailable days are struck through.
react: Calendar
---
# Calendar

A calendar shows one month to pick a day from. Today carries the now-dot, the chosen day becomes a solid navy block, unavailable days are struck through and days outside the month stay out of the way. It stands alone or opens from a [DatePicker](date-picker.md).

## When to use

- Use it on its own when the month view helps people choose (consultation dates, deadlines).
- Use `isDateUnavailable` for days with no hours, and say in a sentence nearby what struck days mean.
- Use `minValue` and `maxValue` to keep people inside the bookable range.
- Don't use it when people know the date already; use a [DatePicker](date-picker.md), which also accepts typing.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Calendar | `.ds-calendar` | Head and grid, 12px apart, as wide as its content |
| Head | `.ds-calendar__head` | Previous button, month title, next button |
| Title | `.ds-calendar__title` | Plus Jakarta Sans 700 16/24 |
| Month buttons | `.ds-icon-btn` | 16px `caret-left` and `caret-right`, named "Previous month" and "Next month" |
| Grid | `.ds-calendar__grid` | Table with 2px between cells; weekday headers in caption, secondary ink |
| Day | `.ds-calendar__cell` | 40px square (44px on coarse pointers), radius 6, Inter 500 14px, tabular numerals |
| Today dot | `.ds-calendar__cell[data-today]::after` | 4px dot in the now color under the number |

## States

| State | Looks | Set by |
|---|---|---|
| Day | Ink number on the sheet | none |
| Hover | Schedule highlighter wash | `:hover`, `[data-hovered]` |
| Focus | 2px focus ring with a 1px gap | `[data-focus-visible]` |
| Today | The now-dot under the number | `[data-today]` |
| Chosen | Solid navy block, white bold number, the dot turns white | `[data-selected]` |
| Unavailable | Secondary ink, struck through, no hover | `isDateUnavailable`, `[data-unavailable]` |
| Disabled | Disabled ink | `minValue`, `maxValue`, `isDisabled`, `[data-disabled]` |
| Outside the month | Hidden | `[data-outside-month]` |
| Invalid | The chosen day fills danger | `isInvalid`, `[data-invalid][data-selected]` |

## Behavior and accessibility

- React Aria `Calendar`: arrow keys move by day, Page Up and Page Down by month, Shift with Page Up or Page Down by year, Home and End to the start and end of the week; Enter or Space chooses.
- Name the calendar with `aria-label`. React Aria adds "Today" and the selection to each day's name and reads the visible month when it changes.
- Unavailable days cannot be chosen and are announced as unavailable; the strike mark is paired with words on the page.
- Weekday names, the first day of the week and the date format follow the locale from [DesignSystemProvider](../../README.md).
- Forced colors: the chosen day takes `Highlight`; struck days keep their line.

## React

```tsx
import { Calendar } from '@meetingat10/design-system/react';
import { CalendarDate, isWeekend } from '@internationalized/date';

<Calendar
  aria-label="Consultation date"
  defaultValue={new CalendarDate(2026, 10, 21)}
  minValue={new CalendarDate(2026, 10, 19)}
  isDateUnavailable={(date) => isWeekend(date, 'en-PH')}
  onChange={setDate}
/>
<p className="ds-type-body-small ds-secondary">Struck dates have no consultation hours.</p>
```

Values are `@internationalized/date` objects; add that package to the app to build them. Other React Aria `Calendar` props (`value`, `focusedValue`, `isReadOnly`) pass through.

## Plain CSS

```html
<div class="ds-calendar">
  <header class="ds-calendar__head">
    <button class="ds-icon-btn" type="button" aria-label="Previous month">
      <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-caret-left"/></svg>
    </button>
    <h2 class="ds-calendar__title">October 2026</h2>
    <button class="ds-icon-btn" type="button" aria-label="Next month">
      <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-caret-right"/></svg>
    </button>
  </header>
  <table class="ds-calendar__grid" role="grid" aria-label="October 2026">
    <thead><tr><th scope="col" abbr="Monday">M</th><th scope="col" abbr="Tuesday">T</th><th scope="col" abbr="Wednesday">W</th></tr></thead>
    <tbody>
      <tr>
        <td><div class="ds-calendar__cell" role="button" data-today aria-label="Today, Monday 19 October 2026">19</div></td>
        <td><div class="ds-calendar__cell" role="button" data-selected aria-label="Tuesday 20 October 2026 selected">20</div></td>
        <td><div class="ds-calendar__cell" role="button" data-unavailable aria-disabled="true">21</div></td>
      </tr>
    </tbody>
  </table>
</div>
```

The calendar needs a script for keyboard behavior; in plain pages prefer `<input type="date" class="ds-input">`.

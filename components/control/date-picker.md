---
title: Date Picker
description: Type a date segment by segment in an input-shaped group, or pick it from a calendar popover.
react: DatePicker
---
# Date Picker

A date picker takes a date two ways: typed segment by segment in an input-shaped group, or picked from a [Calendar](calendar.md) in a popover. The focused segment becomes a solid navy block, so it is always clear which part is being typed.

## When to use

- Use it when people may know the date already and want to type it, with the calendar as a helper.
- Use `minValue`, `maxValue` and `isDateUnavailable` to keep choices inside the bookable range; they also apply to the calendar.
- Use the description to state the rule in words ("Weekdays only.").
- Don't use it when the month view is the point; show a [Calendar](calendar.md) on the page.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Field | `.ds-field.ds-date-picker` | Label, description, group and error ([Field](field.md)) |
| Group | `.ds-date-field` | Input-shaped: 48px, radius 8, `border-default` rule on paper |
| Segments | `.ds-date-field__input` | Body text with tabular numerals |
| Segment | `.ds-date-segment` | One part of the date; separators (`[data-type="literal"]`) and placeholders in secondary ink |
| Calendar button | `.ds-icon-btn` | 20px `calendar` icon, named "Open calendar" |
| Popover | `.ds-popover`, `.ds-date-picker__popover` | Overlay sheet with 16px padding, holding the calendar |

## States

| State | Looks | Set by |
|---|---|---|
| Empty | Placeholder segments in secondary ink | `[data-placeholder]` on segments |
| Hover | Rule darkens to `border-strong` | `:hover`, `[data-hovered]` |
| Focus within | Rule in the focus color plus a 2px ring | `:focus-within`, `[data-focus-within]` |
| Focused segment | Solid navy block with white numerals | `[data-focused]`, `:focus` on the segment |
| Open | Calendar popover under the group | the calendar button pressed |
| Invalid | Rule in danger ink, error line below | `isInvalid`, failed validation, `[data-invalid]` |
| Disabled | Dashed rule on the disabled ground | `isDisabled`, `[data-disabled]` |

## Behavior and accessibility

- React Aria `DatePicker`: each segment is a spin button. Type digits to fill it; Up and Down change it; Left and Right move between segments; Backspace clears.
- The calendar button opens the popover and moves focus into the calendar; choosing a day closes it and returns focus.
- Segment order and separators follow the locale from [DesignSystemProvider](../../README.md).
- Errors say what is wrong and keep the typed date ("Choose a weekday; Saturday 24 October has no consultation hours.").
- Forced colors: the focused segment takes `Highlight`; disabled groups use `GrayText`.

## React

```tsx
import { DatePicker } from '@meetingat10/design-system/react';
import { CalendarDate, isWeekend } from '@internationalized/date';

<DatePicker
  label="Preferred date"
  description="Weekdays only."
  defaultValue={new CalendarDate(2026, 10, 21)}
  isDateUnavailable={(date) => isWeekend(date, 'en-PH')}
  onChange={setDate}
/>
```

Other React Aria `DatePicker` props (`value`, `minValue`, `maxValue`, `granularity`, `isRequired`, `isInvalid`, `errorMessage`) pass through. Values are `@internationalized/date` objects.

## Plain CSS

```html
<div class="ds-field">
  <label class="ds-field__label" for="date">Preferred date</label>
  <p class="ds-field__description" id="date-desc">Weekdays only.</p>
  <input class="ds-input" id="date" type="date" aria-describedby="date-desc">
</div>
```

The segmented group (`.ds-date-field`, `.ds-date-segment`) is rendered by React Aria. In plain pages use the native date input above.

---
title: DatePicker
description: Segmented date input with a calendar popover; also a standalone Calendar.
react: DatePicker
---
# Control / DatePicker and Calendar

**NOT IN FIGMA** (repo-owned). The consultation flow needs dates beyond the five-day strip.

## Anatomy

| Part | Spec |
|---|---|
| Field | Text Field box with typed segments (month / day / year, locale order); focused segment `action-default` fill, `on-action` text |
| Button | trailing calendar icon (`Icon / Calendar` 16) |
| Calendar | `card-bg`, `radius-tile`, `card-shadow` (popover: `overlay-shadow`), padding 16; header with previous / next icon buttons and the month heading |
| Day cell | 44px, `radius-control`; hover `info-bg`; today 1px `action-default` inset; selected `action-default` fill; unavailable struck through in `disabled-fg`; focus ring |

## Usage

- Mark dates that cannot be booked as unavailable instead of hiding them.
- Show the time zone in text next to times ("sample local campus time").

## Accessibility

Each segment is a spin button (type digits or use arrows). The calendar is a grid: arrows move by day, Page Up/Down by month, Enter selects.

## React

Values are `@internationalized/date` objects (install it in the app):

```tsx
import { parseDate } from "@internationalized/date";

<DatePicker label="Preferred date" defaultValue={parseDate("2026-10-21")} isDateUnavailable={isBooked} />
<Calendar aria-label="Consultation date" onChange={setDate} />
```

## Reference markup

```html
<div class="ds-calendar">…<button class="ds-calendar__cell" data-selected>21</button>…</div>
```

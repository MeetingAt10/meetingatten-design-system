"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar as AriaCalendar, CalendarGrid, CalendarGridHeader, CalendarHeaderCell, CalendarGridBody, CalendarCell, Heading, Button } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Calendar: a ruled month. Arrow keys move by day, Page Up/Down by month; today carries the now-dot. Values come from `@internationalized/date`. */
export function Calendar({ className, ...rest }) {
    return (_jsxs(AriaCalendar, { ...rest, className: cx('ds-calendar', className), children: [_jsxs("header", { className: "ds-calendar__head", children: [_jsx(Button, { slot: "previous", className: "ds-icon-btn", "aria-label": "Previous month", children: _jsx(Icon, { name: "caret-left", size: 16 }) }), _jsx(Heading, { className: "ds-calendar__title" }), _jsx(Button, { slot: "next", className: "ds-icon-btn", "aria-label": "Next month", children: _jsx(Icon, { name: "caret-right", size: 16 }) })] }), _jsxs(CalendarGrid, { className: "ds-calendar__grid", children: [_jsx(CalendarGridHeader, { children: (day) => _jsx(CalendarHeaderCell, { children: day }) }), _jsx(CalendarGridBody, { children: (date) => _jsx(CalendarCell, { date: date, className: "ds-calendar__cell" }) })] })] }));
}

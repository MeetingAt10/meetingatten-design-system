"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar as AriaCalendar, CalendarGrid, CalendarCell, Heading, Button } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Calendar: month grid for picking a date; arrow keys move by day, Page Up/Down by month. Values come from `@internationalized/date`. */
export function Calendar({ className, ...rest }) {
    return (_jsxs(AriaCalendar, { ...rest, className: cx('ds-calendar', className), children: [_jsxs("header", { className: "ds-calendar__header", children: [_jsx(Button, { slot: "previous", className: "ds-icon-btn ds-calendar__prev", children: _jsx(Icon, { name: "chevron", size: 16 }) }), _jsx(Heading, { className: "ds-calendar__title" }), _jsx(Button, { slot: "next", className: "ds-icon-btn", children: _jsx(Icon, { name: "chevron", size: 16 }) })] }), _jsx(CalendarGrid, { children: (date) => _jsx(CalendarCell, { date: date, className: "ds-calendar__cell" }) })] }));
}

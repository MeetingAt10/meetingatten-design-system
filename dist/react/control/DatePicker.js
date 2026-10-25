"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DatePicker as AriaDatePicker, Group, DateInput, DateSegment, Button, Popover, Dialog } from 'react-aria-components';
import { Field } from './Field.js';
import { Calendar } from './Calendar.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Date picker: type the date segment by segment, or pick it from the calendar popover. */
export function DatePicker({ label, description, errorMessage, className, ...rest }) {
    return (_jsxs(AriaDatePicker, { ...rest, className: cx('ds-field', 'ds-date-picker', className), children: [_jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsxs(Group, { className: "ds-date-field", children: [_jsx(DateInput, { className: "ds-date-field__input", children: (segment) => _jsx(DateSegment, { segment: segment, className: "ds-date-segment" }) }), _jsx(Button, { className: "ds-icon-btn", "aria-label": "Open calendar", children: _jsx(Icon, { name: "calendar", size: 20 }) })] }) }), _jsx(Popover, { className: "ds-popover", offset: 6, children: _jsx(Dialog, { className: "ds-popover__dialog ds-date-picker__popover", "aria-label": "Calendar", children: _jsx(Calendar, {}) }) })] }));
}

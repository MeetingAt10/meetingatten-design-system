"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DatePicker as AriaDatePicker, Group, DateInput, DateSegment, Button, Popover, Dialog } from 'react-aria-components';
import { Field } from './Field.js';
import { Calendar } from './Calendar.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** DatePicker: type a date segment by segment, or pick it from the calendar popover. */
export function DatePicker({ label, description, errorMessage, className, ...rest }) {
    return (_jsxs(AriaDatePicker, { ...rest, className: cx('ds-field', className), children: [_jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsxs(Group, { className: "ds-datefield", children: [_jsx(DateInput, { className: "ds-date-input", children: (segment) => _jsx(DateSegment, { segment: segment, className: "ds-date-segment" }) }), _jsx(Button, { className: "ds-field-button", children: _jsx(Icon, { name: "calendar", size: 16 }) })] }) }), _jsx(Popover, { className: "ds-popover", children: _jsx(Dialog, { className: "ds-calendar-dialog", children: _jsx(Calendar, {}) }) })] }));
}

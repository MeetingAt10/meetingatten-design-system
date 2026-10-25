"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox as AriaCheckbox, CheckboxGroup as AriaCheckboxGroup } from 'react-aria-components';
import { Field } from './Field.js';
import { cx } from '../lib/cx.js';
/** Checkbox: an independent on/off choice; the check is drawn in when it fills. Supports `isIndeterminate`. */
export function Checkbox({ children, description, className, ...rest }) {
    return (_jsxs(AriaCheckbox, { ...rest, className: cx('ds-check', className), children: [_jsxs("span", { className: "ds-check__box", "aria-hidden": "true", children: [_jsx("svg", { viewBox: "0 0 18 18", children: _jsx("polyline", { points: "3.5 9.5 7.5 13 14.5 5", pathLength: 1 }) }), _jsx("span", { className: "ds-check__dash" })] }), description ? (_jsxs("span", { className: "ds-check__text", children: [_jsx("span", { children: children }), _jsx("span", { className: "ds-check__description", children: description })] })) : children] }));
}
/** Checkbox group: several related choices under one label, with one error for the group. */
export function CheckboxGroup({ label, description, errorMessage, children, className, ...rest }) {
    return (_jsx(AriaCheckboxGroup, { ...rest, className: cx('ds-field', className), children: _jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsx("div", { className: "ds-check-group", children: children }) }) }));
}

"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RadioGroup as AriaRadioGroup, Radio as AriaRadio } from 'react-aria-components';
import { Field } from './Field.js';
import { cx } from '../lib/cx.js';
/** Radio group: choose exactly one; arrow keys move between options. */
export function RadioGroup({ label, description, errorMessage, children, row, className, ...rest }) {
    return (_jsx(AriaRadioGroup, { ...rest, className: cx('ds-field', className), children: _jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsx("div", { className: cx('ds-radio-group', row && 'ds-radio-group--row'), children: children }) }) }));
}
/** Radio: one option inside a RadioGroup; the center dot springs in when chosen. */
export function Radio({ children, description, card, className, ...rest }) {
    return (_jsxs(AriaRadio, { ...rest, className: cx('ds-radio', card && 'ds-radio--card', className), children: [_jsx("span", { className: "ds-radio__ring", "aria-hidden": "true" }), description ? (_jsxs("span", { className: "ds-check__text", children: [_jsx("span", { children: children }), _jsx("span", { className: "ds-check__description", children: description })] })) : children] }));
}

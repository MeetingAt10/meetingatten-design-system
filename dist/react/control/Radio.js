"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RadioGroup as AriaRadioGroup, Radio as AriaRadio } from 'react-aria-components';
import { Field } from './Field.js';
import { cx } from '../lib/cx.js';
/** Control / Radio group: choose exactly one; arrow keys move between options. */
export function RadioGroup({ label, description, errorMessage, children, className, ...rest }) {
    return (_jsx(AriaRadioGroup, { ...rest, className: cx('ds-field', className), children: _jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsx("div", { className: "ds-choices", children: children }) }) }));
}
/** Control / Radio: one option inside a RadioGroup. */
export function Radio({ children, className, ...rest }) {
    return (_jsxs(AriaRadio, { ...rest, className: cx('ds-check ds-check--radio', className), children: [_jsx("span", { className: "ds-check__box", "aria-hidden": "true" }), children] }));
}

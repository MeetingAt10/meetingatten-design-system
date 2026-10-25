"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextField as AriaTextField, Input } from 'react-aria-components';
import { Field } from './Field.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Text field: one line of text with a label, help and an error that keeps the input. */
export function TextField({ label, description, errorMessage, placeholder, icon, size = 'md', className, ...rest }) {
    const input = _jsx(Input, { className: cx('ds-input', size === 'sm' && 'ds-input--sm'), placeholder: placeholder });
    return (_jsx(AriaTextField, { ...rest, className: cx('ds-field', className), children: _jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: icon ? (_jsxs("div", { className: "ds-input-group", children: [_jsx(Icon, { name: icon, className: "ds-input-group__icon" }), input] })) : input }) }));
}

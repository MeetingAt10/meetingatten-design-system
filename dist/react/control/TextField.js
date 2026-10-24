"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { TextField as AriaTextField, Input } from 'react-aria-components';
import { Field } from './Field.js';
import { cx } from '../lib/cx.js';
/** Control / Text Field: one-line text input with label, help and error. */
export function TextField({ label, description, errorMessage, placeholder, className, ...rest }) {
    return (_jsx(AriaTextField, { ...rest, className: cx('ds-field', className), children: _jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsx(Input, { className: "ds-input", placeholder: placeholder }) }) }));
}

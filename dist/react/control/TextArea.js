"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { TextField as AriaTextField, TextArea as AriaTextArea } from 'react-aria-components';
import { Field } from './Field.js';
import { cx } from '../lib/cx.js';
/** Control / Text Area: multi-line text with label, help and error. */
export function TextArea({ label, description, errorMessage, placeholder, className, ...rest }) {
    return (_jsx(AriaTextField, { ...rest, className: cx('ds-field', className), children: _jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsx(AriaTextArea, { className: "ds-textarea", placeholder: placeholder }) }) }));
}

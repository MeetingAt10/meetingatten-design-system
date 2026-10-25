"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { TextField as AriaTextField, TextArea as AriaTextArea } from 'react-aria-components';
import { Field } from './Field.js';
import { cx } from '../lib/cx.js';
/** Text area: several lines of text; grows with its content up to a limit. */
export function TextArea({ label, description, errorMessage, placeholder, showCount, className, ...rest }) {
    const [length, setLength] = useState((rest.value ?? rest.defaultValue ?? '').length);
    return (_jsxs(AriaTextField, { ...rest, onChange: (v) => { setLength(v.length); rest.onChange?.(v); }, className: cx('ds-field', className), children: [_jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsx(AriaTextArea, { className: "ds-input ds-textarea", placeholder: placeholder }) }), showCount && (_jsxs("span", { className: "ds-field__count", "aria-live": "polite", children: [length, rest.maxLength ? ` / ${rest.maxLength}` : ''] }))] }));
}

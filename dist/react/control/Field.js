"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Label, Text, FieldError } from 'react-aria-components';
/** Label, control, help and error for a React Aria field. TextField, TextArea, Select, ComboBox, RadioGroup and DatePicker use it; use it inside any other React Aria field to match. */
export function Field({ label, description, errorMessage, isRequired, children }) {
    return (_jsxs(_Fragment, { children: [_jsxs(Label, { className: "ds-label", children: [label, isRequired && _jsx("span", { className: "ds-secondary", children: " (required)" })] }), children, description && _jsx(Text, { slot: "description", className: "ds-field__msg", children: description }), _jsx(FieldError, { className: "ds-field__msg ds-field__msg--error", children: errorMessage })] }));
}

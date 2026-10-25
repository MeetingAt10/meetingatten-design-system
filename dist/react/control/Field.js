"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Label, Text, FieldError } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
/** Field: label, description, control and error for any React Aria field (TextField, Select, ComboBox, RadioGroup, DatePicker). */
export function Field({ label, description, errorMessage, isRequired, children }) {
    return (_jsxs(_Fragment, { children: [_jsxs(Label, { className: "ds-field__label", children: [label, isRequired && _jsx("span", { className: "ds-field__hint", children: "(required)" })] }), description && _jsx(Text, { slot: "description", className: "ds-field__description", children: description }), children, _jsx(FieldError, { className: "ds-field__error", children: (validation) => (_jsxs(_Fragment, { children: [_jsx(Icon, { name: "warning-circle", size: 16, weight: "fill" }), _jsx("span", { children: typeof errorMessage === 'function' ? errorMessage(validation) : errorMessage ?? validation.validationErrors.join(' ') })] })) })] }));
}

"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchField, Input, Button as AriaButton, Label } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Search: a text field with a magnifier and a clear button; Escape clears, Enter submits (`onSubmit`). */
export function Search({ label, showLabel, placeholder, size = 'md', className, ...rest }) {
    return (_jsxs(SearchField, { ...rest, className: cx('ds-field', className), children: [_jsx(Label, { className: showLabel ? 'ds-field__label' : 'ds-visually-hidden', children: label }), _jsxs("div", { className: "ds-input-group", children: [_jsx(Icon, { name: "search", className: "ds-input-group__icon" }), _jsx(Input, { className: cx('ds-input', size === 'sm' && 'ds-input--sm'), placeholder: placeholder }), _jsx(AriaButton, { className: "ds-icon-btn ds-input-group__action", "aria-label": "Clear search", children: _jsx(Icon, { name: "x", size: 16 }) })] })] }));
}

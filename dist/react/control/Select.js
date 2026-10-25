"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select as AriaSelect, SelectValue, Button, Popover, ListBox } from 'react-aria-components';
import { Field } from './Field.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Select: pick one option from a short list. The trigger matches the text input; the list floats on a sheet. */
export function Select({ label, description, errorMessage, items, children, className, ...rest }) {
    return (_jsxs(AriaSelect, { ...rest, className: cx('ds-field', 'ds-select', className), children: [_jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsxs(Button, { className: "ds-select-trigger", children: [_jsx(SelectValue, { className: "ds-select-trigger__value", children: ({ isPlaceholder, selectedText, defaultChildren }) => (isPlaceholder || !selectedText ? defaultChildren : selectedText) }), _jsx(Icon, { name: "caret-down", size: 16, className: "ds-select-trigger__caret" })] }) }), _jsx(Popover, { className: "ds-popover", offset: 6, children: _jsx(ListBox, { className: "ds-listbox", items: items, children: children }) })] }));
}

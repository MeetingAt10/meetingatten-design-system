"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select as AriaSelect, SelectValue, Button, Popover, ListBox } from 'react-aria-components';
import { Field } from './Field.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Control / Select: pick one option from a short list. */
export function Select({ label, description, errorMessage, items, children, className, ...rest }) {
    return (_jsxs(AriaSelect, { ...rest, className: cx('ds-field', className), children: [_jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsxs(Button, { className: "ds-select", children: [_jsx(SelectValue, { className: "ds-select__value" }), _jsx(Icon, { name: "chevron", size: 16 })] }) }), _jsx(Popover, { className: "ds-popover", children: _jsx(ListBox, { className: "ds-listbox", items: items, children: children }) })] }));
}

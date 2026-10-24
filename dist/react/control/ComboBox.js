"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ComboBox as AriaComboBox, Input, Button, Popover, ListBox } from 'react-aria-components';
import { Field } from './Field.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** ComboBox: type to filter a longer list, then pick one option. */
export function ComboBox({ label, description, errorMessage, items, children, placeholder, className, ...rest }) {
    return (_jsxs(AriaComboBox, { ...rest, className: cx('ds-field', className), children: [_jsx(Field, { label: label, description: description, errorMessage: errorMessage, isRequired: rest.isRequired, children: _jsxs("div", { className: "ds-combobox", children: [_jsx(Input, { placeholder: placeholder }), _jsx(Button, { className: "ds-field-button", children: _jsx(Icon, { name: "chevron", size: 16 }) })] }) }), _jsx(Popover, { className: "ds-popover", children: _jsx(ListBox, { className: "ds-listbox", items: items, children: children }) })] }));
}

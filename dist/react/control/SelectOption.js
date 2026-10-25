"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ListBoxItem, Text } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Select option: one row in a Select or ComboBox list; the selected row shows a check. Pass `textValue` when children are not plain text. */
export function SelectOption({ children, description, icon, className, ...rest }) {
    return (_jsxs(ListBoxItem, { ...rest, textValue: rest.textValue ?? (typeof children === 'string' ? children : undefined), className: cx('ds-option', className), children: [icon && _jsx(Icon, { name: icon, size: 16 }), _jsxs("span", { className: "ds-option__text", children: [_jsx(Text, { slot: "label", children: children }), description && _jsx(Text, { slot: "description", className: "ds-option__description", children: description })] }), _jsx(Icon, { name: "check", size: 16, weight: "bold", className: "ds-option__check" })] }));
}

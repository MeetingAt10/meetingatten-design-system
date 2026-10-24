"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ListBoxItem } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
/** Control / Select Option: one row in a Select or ComboBox list; shows a check when selected. Pass `textValue` when children are not plain text. */
export function SelectOption({ children, ...rest }) {
    return (_jsx(ListBoxItem, { ...rest, textValue: rest.textValue ?? (typeof children === 'string' ? children : undefined), className: "ds-option", children: ({ isSelected }) => (_jsxs(_Fragment, { children: [isSelected && _jsx(Icon, { name: "check", size: 16 }), children] })) }));
}

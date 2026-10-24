"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MenuTrigger, Menu, MenuItem as AriaMenuItem, Popover } from 'react-aria-components';
import { Button } from '../control/Button.js';
import { IconButton } from '../control/IconButton.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Menu: a button that opens a list of actions. Arrow keys move, Enter chooses, Escape closes. */
export function MenuButton({ label, icon = 'menu', iconOnly, variant = 'secondary', onAction, children, className }) {
    return (_jsxs(MenuTrigger, { children: [iconOnly ? (_jsx(IconButton, { icon: icon, label: label, className: className })) : (_jsxs(Button, { variant: variant, className: className, children: [label, _jsx(Icon, { name: "chevron", size: 16, className: "ds-menu__chevron" })] })), _jsx(Popover, { className: "ds-popover", placement: "bottom start", children: _jsx(Menu, { className: "ds-listbox ds-menu", onAction: onAction, children: children }) })] }));
}
/** One action in a MenuButton list. */
export function MenuItem({ danger, children, ...rest }) {
    return (_jsx(AriaMenuItem, { ...rest, textValue: rest.textValue ?? (typeof children === 'string' ? children : undefined), className: cx('ds-option', danger && 'ds-option--danger'), children: children }));
}

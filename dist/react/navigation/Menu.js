"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MenuTrigger, Menu, MenuItem as AriaMenuItem, MenuSection as AriaMenuSection, Header, Separator, Popover, Text, Keyboard } from 'react-aria-components';
import { Button } from '../control/Button.js';
import { IconButton } from '../control/IconButton.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Menu: a button that opens a list of actions. Arrow keys move, Enter chooses, Escape closes; destructive actions sit last. */
export function MenuButton({ label, icon = 'dots-three', iconOnly, variant = 'secondary', placement = 'bottom start', onAction, children, className }) {
    return (_jsxs(MenuTrigger, { children: [iconOnly ? (_jsx(IconButton, { icon: icon, label: label, className: className, tooltip: false })) : (_jsxs(Button, { variant: variant, className: className, children: [label, _jsx(Icon, { name: "caret-down", size: 16, className: "ds-menu-trigger__caret" })] })), _jsx(Popover, { className: "ds-popover", placement: placement, offset: 6, children: _jsx(Menu, { className: "ds-listbox ds-menu", onAction: onAction, children: children }) })] }));
}
/** One action in a menu. */
export function MenuItem({ danger, icon, description, shortcut, children, className, ...rest }) {
    return (_jsxs(AriaMenuItem, { ...rest, textValue: rest.textValue ?? (typeof children === 'string' ? children : undefined), className: cx('ds-option', danger && 'ds-option--danger', className), children: [icon && _jsx(Icon, { name: icon, size: 16 }), _jsxs("span", { className: "ds-option__text", children: [_jsx(Text, { slot: "label", children: children }), description && _jsx(Text, { slot: "description", className: "ds-option__description", children: description })] }), shortcut && _jsx(Keyboard, { className: "ds-option__keys", children: _jsx("kbd", { className: "ds-kbd", children: shortcut }) })] }));
}
/** A titled group of menu items. */
export function MenuSection({ title, children }) {
    return (_jsxs(AriaMenuSection, { className: "ds-listbox__section", children: [_jsx(Header, { className: "ds-listbox__header", children: title }), children] }));
}
/** A rule between groups of menu items. */
export function MenuSeparator() {
    return _jsx(Separator, { className: "ds-listbox__separator" });
}

"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as AriaButton, Link as AriaLink } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Button: a block you press. Behavior and accessibility from React Aria (press, keyboard, pending). */
export function Button({ variant = 'primary', size = 'md', block, loading, icon, iconEnd, href, target, rel, className, children, ...rest }) {
    const iconSize = size === 'sm' ? 16 : 20;
    const cls = cx('ds-btn', `ds-btn--${variant}`, size !== 'md' && `ds-btn--${size}`, block && 'ds-btn--block', className);
    const label = (_jsxs(_Fragment, { children: [icon && _jsx(Icon, { name: icon, size: iconSize }), children, iconEnd && _jsx(Icon, { name: iconEnd, size: iconSize })] }));
    // Pending: the label stays in the tree (it still names the button) but fades out, so the button keeps its width.
    const content = loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "ds-btn__busy", "aria-hidden": "true" }), _jsx("span", { className: "ds-btn__label", children: label })] })) : label;
    if (href) {
        return (_jsx(AriaLink, { href: href, target: target, rel: rel, isDisabled: rest.isDisabled, onPress: rest.onPress, "aria-label": rest['aria-label'], className: cls, children: content }));
    }
    return _jsx(AriaButton, { ...rest, isPending: loading, className: cls, children: content });
}

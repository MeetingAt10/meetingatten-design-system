"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as AriaLink } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Link: links navigate, buttons act. External links say they open a new tab. */
export function Link({ variant = 'inline', icon, external, className, children, ...rest }) {
    const trailing = variant === 'standalone' || external ? (icon ?? (external ? 'arrow-up-right' : 'arrow-right')) : undefined;
    return (_jsxs(AriaLink, { ...rest, ...(external ? { target: '_blank', rel: 'noreferrer' } : {}), className: cx('ds-link', variant !== 'inline' && `ds-link--${variant}`, className), children: [children, external && _jsx("span", { className: "ds-visually-hidden", children: " (opens in a new tab)" }), trailing && _jsx(Icon, { name: trailing, size: 16 })] }));
}

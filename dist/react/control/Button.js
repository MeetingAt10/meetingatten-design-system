"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as AriaButton } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Control / Button. Renders `.ds-btn` classes; behavior and accessibility from React Aria. */
export function Button({ variant = 'primary', size = 'md', block, loading, className, children, ...rest }) {
    return (_jsxs(AriaButton, { ...rest, isPending: loading, className: cx('ds-btn', `ds-btn--${variant}`, size === 'sm' && 'ds-btn--sm', block && 'ds-btn--block', className), children: [loading && _jsx("span", { className: "ds-spinner", "aria-hidden": "true" }), children] }));
}

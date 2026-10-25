"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as AriaButton, TooltipTrigger } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { Tooltip } from '../feedback/Tooltip.js';
import { cx } from '../lib/cx.js';
/** Icon button: one icon, always named; the tooltip repeats the name for sighted mouse and keyboard users. */
export function IconButton({ icon, label, variant = 'quiet', size = 'sm', dot, tooltip = true, className, ...rest }) {
    const button = (_jsxs(AriaButton, { ...rest, "aria-label": label, className: cx('ds-icon-btn', variant !== 'quiet' && `ds-icon-btn--${variant}`, size === 'md' && 'ds-icon-btn--md', className), children: [_jsx(Icon, { name: icon, size: size === 'md' ? 24 : 20 }), dot && _jsx("span", { className: "ds-icon-btn__dot", "aria-hidden": "true" })] }));
    if (!tooltip)
        return button;
    return (_jsxs(TooltipTrigger, { delay: 500, closeDelay: 100, children: [button, _jsx(Tooltip, { children: label })] }));
}

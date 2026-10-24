"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch as AriaSwitch } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Switch: a setting that takes effect immediately (use Checkbox inside forms that are submitted). */
export function Switch({ children, className, ...rest }) {
    return (_jsxs(AriaSwitch, { ...rest, className: cx('ds-switch', className), children: [_jsx("span", { className: "ds-switch__track", "aria-hidden": "true" }), children] }));
}

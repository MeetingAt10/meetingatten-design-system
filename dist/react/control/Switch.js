"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch as AriaSwitch } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Switch: a setting that takes effect immediately (use Checkbox in forms that are submitted). The thumb springs across. */
export function Switch({ children, showState, className, ...rest }) {
    return (_jsx(AriaSwitch, { ...rest, className: cx('ds-switch', className), children: ({ isSelected }) => (_jsxs(_Fragment, { children: [_jsx("span", { className: "ds-switch__track", "aria-hidden": "true" }), _jsx("span", { children: children }), showState && _jsx("span", { className: "ds-switch__state", "aria-hidden": "true", children: isSelected ? 'On' : 'Off' })] })) }));
}

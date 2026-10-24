"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ProgressBar, Label } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Progress: labeled bar, determinate (`value`) or `isIndeterminate`. */
export function Progress({ label, showValue = true, className, ...rest }) {
    return (_jsx(ProgressBar, { ...rest, className: cx('ds-progress', className), children: ({ percentage, valueText, isIndeterminate }) => (_jsxs(_Fragment, { children: [_jsxs("span", { className: "ds-progress__head", children: [_jsx(Label, { className: "ds-label", children: label }), showValue && !isIndeterminate && _jsx("span", { className: "ds-progress__value", children: valueText })] }), _jsx("span", { className: "ds-progress__track", children: _jsx("span", { className: "ds-progress__fill", style: isIndeterminate ? undefined : { width: `${percentage ?? 0}%` } }) })] })) }));
}

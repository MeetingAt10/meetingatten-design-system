"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ProgressBar, Label } from 'react-aria-components';
import NumberFlow from '@number-flow/react';
import { cx } from '../lib/cx.js';
/** Progress: a ruled track whose navy fill springs to the value; determinate (`value`) or `isIndeterminate`. */
export function Progress({ label, showValue = true, hint, tone = 'default', className, ...rest }) {
    return (_jsx(ProgressBar, { ...rest, className: cx('ds-progress', tone !== 'default' && `ds-progress--${tone}`, className), children: ({ percentage, isIndeterminate }) => (_jsxs(_Fragment, { children: [_jsxs("span", { className: "ds-progress__head", children: [_jsx(Label, { className: "ds-progress__label", children: label }), showValue && !isIndeterminate && (_jsx("span", { className: "ds-progress__value", "aria-hidden": "true", children: _jsx(NumberFlow, { value: Math.round(percentage ?? 0), suffix: "%" }) }))] }), _jsx("span", { className: "ds-progress__track", children: _jsx("span", { className: "ds-progress__fill", style: isIndeterminate ? undefined : { '--value': percentage ?? 0 } }) }), hint && _jsx("span", { className: "ds-progress__hint", children: hint })] })) }));
}

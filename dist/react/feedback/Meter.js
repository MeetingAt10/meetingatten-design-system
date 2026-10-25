"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Meter as AriaMeter, Label } from 'react-aria-components';
import NumberFlow from '@number-flow/react';
import { cx } from '../lib/cx.js';
/** Meter: a known quantity in a range on a ruled scale (slots taken, storage used). */
export function Meter({ label, valueLabel, tone = 'auto', className, ...rest }) {
    return (_jsx(AriaMeter, { ...rest, valueLabel: valueLabel, className: ({ percentage }) => {
            const t = tone === 'auto' ? (percentage >= 100 ? 'full' : percentage >= 75 ? 'high' : 'default') : tone;
            return cx('ds-meter', t !== 'default' && `ds-meter--${t}`, className);
        }, children: ({ percentage }) => (_jsxs(_Fragment, { children: [_jsxs("span", { className: "ds-meter__head", children: [_jsx(Label, { className: "ds-meter__label", children: label }), _jsx("span", { className: "ds-meter__value", "aria-hidden": "true", children: valueLabel ?? _jsx(NumberFlow, { value: Math.round(percentage), suffix: "%" }) })] }), _jsx("span", { className: "ds-meter__track", children: _jsx("span", { className: "ds-meter__fill", style: { '--value': percentage } }) })] })) }));
}

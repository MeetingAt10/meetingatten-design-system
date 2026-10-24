"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox as AriaCheckbox } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Control / Checkbox: independent on/off choice. Supports `isIndeterminate`. */
export function Checkbox({ children, className, ...rest }) {
    return (_jsxs(AriaCheckbox, { ...rest, className: cx('ds-check', className), children: [_jsx("span", { className: "ds-check__box", "aria-hidden": "true" }), children] }));
}

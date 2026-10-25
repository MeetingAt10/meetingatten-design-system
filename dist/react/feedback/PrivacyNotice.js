"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Privacy notice: the boundary, stated on the page (never in a tooltip). A hatched band with a lock; neutral ink, no hue. */
export function PrivacyNotice({ title, level = 2, children, foot, className }) {
    const id = useId();
    const H = level === 3 ? 'h3' : 'h2';
    return (_jsxs("section", { className: cx('ds-privacy', className), "aria-labelledby": id, children: [_jsxs("header", { className: "ds-privacy__band", children: [_jsx("span", { className: "ds-privacy__lock", "aria-hidden": "true", children: _jsx(Icon, { name: "lock", size: 16, weight: "fill" }) }), _jsx(H, { id: id, className: "ds-privacy__title", children: title })] }), _jsx("div", { className: "ds-privacy__body", children: typeof children === 'string' ? _jsx("p", { children: children }) : children }), foot && _jsx("p", { className: "ds-privacy__foot", children: foot })] }));
}

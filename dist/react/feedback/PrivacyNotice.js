"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { Icon } from '../icon/Icon.js';
/** Feedback / Privacy Notice: durable policy text on report pages; never hidden in tooltips. */
export function PrivacyNotice({ title, level = 2, children, foot, className }) {
    const id = useId();
    const H = level === 3 ? 'h3' : 'h2';
    return (_jsxs("aside", { className: ['ds-notice', className].filter(Boolean).join(' '), "aria-labelledby": id, children: [_jsxs(H, { id: id, className: "ds-notice__title", children: [_jsx(Icon, { name: "lock", size: 16 }), title] }), _jsx("p", { children: children }), foot && _jsx("p", { className: "ds-notice__foot", children: foot })] }));
}

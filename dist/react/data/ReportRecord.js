"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { Link as AriaLink } from 'react-aria-components';
import { Badge } from '../badge/Badge.js';
/** Data / Report Record: one report as a labeled record (the mobile form of the Reports Table). */
export function ReportRecord({ reference, status, statusTone = 'warning', facts, level = 3, href, actionLabel = 'View', className }) {
    const id = useId();
    const H = `h${level}`;
    return (_jsxs("article", { className: ['ds-record', className].filter(Boolean).join(' '), "aria-labelledby": id, children: [_jsxs("div", { className: "ds-row", style: { justifyContent: 'space-between' }, children: [_jsx(H, { id: id, className: "ds-type-h3 ds-mono", style: { margin: 0 }, children: reference }), _jsx(Badge, { tone: statusTone, children: status })] }), _jsx("dl", { className: "ds-record__facts", children: facts.map((f) => _jsxs("div", { children: [_jsx("dt", { children: f.label }), _jsx("dd", { children: f.value })] }, f.label)) }), href && _jsx(AriaLink, { href: href, className: "ds-btn ds-btn--secondary ds-btn--block", "aria-label": `${actionLabel} ${reference}`, children: actionLabel })] }));
}

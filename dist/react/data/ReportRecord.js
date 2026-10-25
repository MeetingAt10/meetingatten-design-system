"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { Link } from '../navigation/Link.js';
import { Badge } from '../badge/Badge.js';
import { cx } from '../lib/cx.js';
/** Report record: one restricted record as a ruled row (the phone form of the Reports Table). */
export function ReportRecord({ reference, title, status, statusTone = 'neutral', statusForm = 'solid', facts, level = 3, href, actionLabel = 'View record', className }) {
    const id = useId();
    const H = `h${level}`;
    return (_jsxs("article", { className: cx('ds-record', className), "aria-labelledby": id, children: [_jsxs("header", { className: "ds-record__head", children: [_jsx("span", { className: "ds-record__ref", children: reference }), _jsx(Badge, { tone: statusTone, form: statusForm, children: status })] }), _jsx(H, { id: id, className: "ds-record__title", children: title ?? reference }), _jsx("dl", { className: "ds-record__facts", children: facts.map((f) => _jsxs("div", { children: [_jsx("dt", { children: f.label }), _jsx("dd", { children: f.value })] }, f.label)) }), href && _jsx(Link, { href: href, variant: "standalone", className: "ds-record__action", "aria-label": `${actionLabel} ${reference}`, children: actionLabel })] }));
}

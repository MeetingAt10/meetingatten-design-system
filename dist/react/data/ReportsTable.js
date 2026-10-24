"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { Link } from '../navigation/Link.js';
/** Data / Reports Table: own or assigned reports. On mobile, show ReportRecord cards instead. */
export function ReportsTable({ caption, rows, emptyMessage = 'No reports yet.', className }) {
    const captionId = useId();
    // Focusable, named region so keyboard users can scroll the table when it overflows on small screens.
    return (_jsx("div", { className: ['ds-table-wrap', className].filter(Boolean).join(' '), role: "region", "aria-labelledby": captionId, tabIndex: 0, children: _jsxs("table", { className: "ds-table", children: [_jsx("caption", { id: captionId, children: caption }), _jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "Reference" }), _jsx("th", { scope: "col", children: "Category" }), _jsx("th", { scope: "col", children: "Status" }), _jsx("th", { scope: "col", children: "Action" })] }) }), _jsx("tbody", { children: rows.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: 4, children: emptyMessage }) })) : (rows.map((r) => (_jsxs("tr", { children: [_jsx("th", { scope: "row", children: r.reference }), _jsx("td", { children: r.category }), _jsx("td", { children: r.status }), _jsx("td", { children: r.href && _jsx(Link, { href: r.href, "aria-label": `${r.actionLabel ?? 'View'} ${r.reference}`, children: r.actionLabel ?? 'View' }) })] }, r.id)))) })] }) }));
}

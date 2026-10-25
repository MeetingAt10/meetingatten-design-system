"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { Link } from '../navigation/Link.js';
import { Badge } from '../badge/Badge.js';
import { cx } from '../lib/cx.js';
/** Reports table: own or assigned reports on a ruled sheet. On phones, show ReportRecord rows instead. */
export function ReportsTable({ caption, rows, emptyMessage = 'No reports yet.', className }) {
    const captionId = useId();
    const hasUpdated = rows.some((r) => r.updated);
    const cols = hasUpdated ? 5 : 4;
    // A focusable, named region, so keyboard users can scroll the table when it overflows.
    return (_jsx("div", { className: cx('ds-table-wrap', className), role: "region", "aria-labelledby": captionId, tabIndex: 0, children: _jsxs("table", { className: "ds-table", children: [_jsx("caption", { id: captionId, children: caption }), _jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "Reference" }), _jsx("th", { scope: "col", children: "Category" }), _jsx("th", { scope: "col", children: "Status" }), hasUpdated && _jsx("th", { scope: "col", children: "Updated" }), _jsx("th", { scope: "col", className: "ds-table__actions", children: "Action" })] }) }), _jsx("tbody", { children: rows.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: cols, className: "ds-table__empty", children: emptyMessage }) })) : (rows.map((r) => (_jsxs("tr", { children: [_jsx("th", { scope: "row", children: _jsx("span", { className: "ds-table__ref", children: r.reference }) }), _jsx("td", { children: r.category }), _jsx("td", { children: _jsx(Badge, { tone: r.statusTone ?? 'neutral', form: r.statusForm, children: r.status }) }), hasUpdated && _jsx("td", { children: r.updated }), _jsx("td", { className: "ds-table__actions", children: r.href && _jsx(Link, { href: r.href, variant: "standalone", "aria-label": `${r.actionLabel ?? 'View'} ${r.reference}`, children: r.actionLabel ?? 'View' }) })] }, r.id)))) })] }) }));
}

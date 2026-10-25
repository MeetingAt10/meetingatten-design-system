"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as AriaButton } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** First, last and the pages around the current one, with gaps in between. */
export function pageList(page, pageCount) {
    const keep = [...new Set([1, pageCount, page - 1, page, page + 1])].filter((p) => p >= 1 && p <= pageCount).sort((a, b) => a - b);
    return keep.flatMap((p, i) => (i > 0 && p - keep[i - 1] > 1 ? ['gap', p] : [p]));
}
/** Pagination: previous, page blocks (the current one solid) and next. */
export function Pagination({ page, pageCount, onPageChange, summary, label = 'Pages', className }) {
    return (_jsxs("nav", { "aria-label": label, className: cx('ds-pagination', className), children: [summary && _jsx("p", { className: "ds-pagination__summary", children: summary }), _jsxs(AriaButton, { className: "ds-page ds-page--step", isDisabled: page <= 1, onPress: () => onPageChange(page - 1), children: [_jsx(Icon, { name: "caret-left", size: 16 }), "Previous"] }), pageList(page, pageCount).map((p, i) => p === 'gap' ? (_jsx("span", { className: "ds-page ds-page--gap", "aria-hidden": "true", children: "\u2026" }, `gap-${i}`)) : (_jsx(AriaButton, { className: "ds-page", "aria-label": `Page ${p}`, "aria-current": p === page ? 'page' : undefined, onPress: () => onPageChange(p), children: p }, p))), _jsxs(AriaButton, { className: "ds-page ds-page--step", isDisabled: page >= pageCount, onPress: () => onPageChange(page + 1), children: ["Next", _jsx(Icon, { name: "caret-right", size: 16 })] })] }));
}

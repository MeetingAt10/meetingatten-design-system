import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** The empty ruled sheet: a small week grid with dashed, unfilled slots and one waiting block. Geometry, not illustration. */
function EmptySheet() {
    return (_jsxs("svg", { className: "ds-empty__art", viewBox: "0 0 132 92", "aria-hidden": "true", focusable: "false", children: [_jsx("rect", { className: "ds-empty__sheet", x: "0.5", y: "0.5", width: "131", height: "91", rx: "8" }), [22, 46, 70].map((y) => _jsx("line", { className: "ds-empty__rule", x1: "1", x2: "131", y1: y, y2: y }, y)), [34, 66, 98].map((x) => _jsx("line", { className: "ds-empty__rule", x1: x, x2: x, y1: "1", y2: "91" }, x)), _jsx("rect", { className: "ds-empty__slot", x: "38", y: "26", width: "24", height: "16", rx: "3" }), _jsx("rect", { className: "ds-empty__slot", x: "70", y: "50", width: "24", height: "16", rx: "3" }), _jsx("rect", { className: "ds-empty__slot", x: "6", y: "50", width: "24", height: "16", rx: "3" }), _jsx("rect", { className: "ds-empty__block", x: "102", y: "26", width: "24", height: "40", rx: "3" })] }));
}
/** Empty state: nothing to show yet, with the reason and one next step. Open content, not a card. */
export function EmptyState({ title, level = 2, description, action, className }) {
    const H = level === 3 ? 'h3' : 'h2';
    return (_jsxs("div", { className: cx('ds-empty', className), children: [_jsx(EmptySheet, {}), _jsx(H, { className: "ds-empty__title", children: title }), description && _jsx("p", { className: "ds-empty__body", children: description }), action && _jsx("div", { className: "ds-empty__actions", children: action })] }));
}

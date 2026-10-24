import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tile } from '../content/Tile.js';
import { cx } from '../lib/cx.js';
/** Feedback / Empty State: nothing to show yet, with one next step. Open content, not a card. */
export function EmptyState({ icon = 'info', tone = 'info', title, level = 2, description, action, className }) {
    const H = level === 3 ? 'h3' : 'h2';
    return (_jsxs("div", { className: cx('ds-empty', className), children: [_jsx(Tile, { icon: icon, tone: tone }), _jsx(H, { className: "ds-type-h3", children: title }), description && _jsx("p", { className: "ds-type-body", children: description }), action] }));
}

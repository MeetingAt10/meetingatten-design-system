import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Navigation / Top Bar: 72px admin header above the content. */
export function TopBar({ title, tools, className }) {
    return (_jsxs("header", { className: cx('ds-topbar', className), children: [title && _jsx("p", { className: "ds-topbar__title", children: title }), tools && _jsx("div", { className: "ds-topbar__tools", children: tools })] }));
}

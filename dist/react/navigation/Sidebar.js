import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Navigation / Sidebar: 240px admin navigation from 1024px; hidden below (use MobileHeader there). */
export function Sidebar({ label = 'Main', logo, footer, children, className }) {
    return (_jsxs("nav", { "aria-label": label, className: cx('ds-sidebar', className), children: [logo, _jsx("div", { className: "ds-sidebar__nav", children: children }), footer && _jsx("div", { className: "ds-sidebar__role", children: footer })] }));
}
/** Small note under the role badge, for example "Own reports only · proposed permission". */
export function SidebarNote({ children }) {
    return _jsx("p", { className: "ds-sidebar__note", children: children });
}

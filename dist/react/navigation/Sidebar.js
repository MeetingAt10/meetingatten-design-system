import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Sidebar: the workspace rail from 1024px (AppShell moves it into a drawer below). */
export function Sidebar({ label = 'Main', brand, footer, children, className }) {
    return (_jsxs("aside", { className: cx('ds-sidebar', className), "aria-label": `${label} sidebar`, children: [brand && _jsx("div", { className: "ds-sidebar__brand", children: brand }), _jsx("nav", { "aria-label": label, className: "ds-sidebar__nav", children: children }), footer && _jsx("div", { className: "ds-sidebar__foot", children: footer })] }));
}
/** A labeled group of NavItems inside the Sidebar. */
export function SidebarSection({ label, children }) {
    return (_jsxs(_Fragment, { children: [_jsx("p", { className: "ds-sidebar__label", children: label }), children] }));
}
/** Small note in the sidebar footer, for example "Own reports only (proposed permission)". */
export function SidebarNote({ children }) {
    return _jsx("p", { className: "ds-sidebar__note", children: children });
}

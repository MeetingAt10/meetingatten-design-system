import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** App shell: sidebar beside a column of top bar and main content (admin). */
export function AppShell({ sidebar, topBar, children, className }) {
    return (_jsxs("div", { className: cx('ds-app', className), children: [sidebar, _jsxs("div", { className: "ds-app__main", children: [topBar, _jsx("main", { className: "ds-app__content", children: children })] })] }));
}

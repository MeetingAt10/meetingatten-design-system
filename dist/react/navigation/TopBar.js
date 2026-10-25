import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Top bar: the workspace title strip with tools on the right. */
export function TopBar({ title, titleAs: Title = 'p', tools, className }) {
    return (_jsxs("header", { className: cx('ds-topbar', className), children: [_jsx("div", { className: "ds-topbar__title", children: title && _jsx(Title, { className: "ds-topbar__heading", children: title }) }), tools && _jsx("div", { className: "ds-topbar__actions", children: tools })] }));
}

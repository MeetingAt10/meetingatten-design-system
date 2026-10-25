import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Mobile header: menu, wordmark and actions in a sticky 56px bar. */
export function MobileHeader({ start, end, children, className }) {
    return (_jsxs("header", { className: cx('ds-mobile-header', className), children: [start, _jsx("span", { className: "ds-mobile-header__brand", children: children }), end && _jsx("span", { className: "ds-mobile-header__actions", children: end })] }));
}

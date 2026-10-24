import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Navigation / Mobile Header: 72px bar with 44px controls on both sides and the logo centered. */
export function MobileHeader({ start, end, children, className }) {
    return (_jsxs("header", { className: cx('ds-mobile-header', className), children: [_jsx("span", { children: start }), _jsx("span", { className: "ds-mobile-header__brand", children: children }), _jsx("span", { children: end })] }));
}

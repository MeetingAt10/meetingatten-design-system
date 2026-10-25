"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as AriaLink } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Navigation item: one sidebar or mobile-menu destination. */
export function NavItem({ icon, isCurrent, count, children, className, ...rest }) {
    return (_jsxs(AriaLink, { ...rest, "aria-current": isCurrent ? 'page' : undefined, className: cx('ds-nav-item', className), children: [icon && _jsx(Icon, { name: icon, weight: isCurrent ? 'fill' : 'regular' }), _jsx("span", { className: "ds-nav-item__label", children: children }), count !== undefined && _jsx("span", { className: "ds-nav-item__count", children: count })] }));
}

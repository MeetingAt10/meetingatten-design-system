"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as AriaLink } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Navigation / Item: one sidebar destination, 48px high. */
export function NavItem({ icon, isCurrent, children, className, ...rest }) {
    return (_jsxs(AriaLink, { ...rest, "aria-current": isCurrent ? 'page' : undefined, className: cx('ds-nav-item', className), children: [icon && _jsx(Icon, { name: icon }), children] }));
}

"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumbs as AriaBreadcrumbs, Breadcrumb, Link as AriaLink } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Navigation / Breadcrumbs: where this page sits; the last item is the current page and is not a link. */
export function Breadcrumbs({ items, label = 'Breadcrumbs', className }) {
    return (_jsx("nav", { "aria-label": label, className: className, children: _jsx(AriaBreadcrumbs, { className: "ds-breadcrumbs", children: items.map((item, i) => (_jsxs(Breadcrumb, { id: i, className: cx('ds-breadcrumb'), children: [_jsx(AriaLink, { href: item.href, className: "ds-breadcrumb__link", children: item.label }), i < items.length - 1 && _jsx(Icon, { name: "chevron", size: 16 })] }, `${i}-${item.label}`))) }) }));
}

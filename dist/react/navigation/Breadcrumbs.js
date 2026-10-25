"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Breadcrumbs as AriaBreadcrumbs, Breadcrumb, Link as AriaLink } from 'react-aria-components';
/** Breadcrumbs: where this page sits. The last item is the current page and is not a link. */
export function Breadcrumbs({ items, label = 'Breadcrumbs', className }) {
    return (_jsx("nav", { "aria-label": label, className: className, children: _jsx(AriaBreadcrumbs, { className: "ds-breadcrumbs", children: items.map((item, i) => (_jsx(Breadcrumb, { id: i, className: "ds-breadcrumbs__item", children: item.href ? _jsx(AriaLink, { href: item.href, className: "ds-breadcrumbs__link", children: item.label }) : _jsx("span", { "aria-current": "page", children: item.label }) }, `${i}-${item.label}`))) }) }));
}

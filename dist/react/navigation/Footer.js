"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as AriaLink } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Footer: the wordmark and description, link columns, and the bottom line for status notes. */
export function Footer({ brand, description, columns = [], note, meta, className }) {
    return (_jsx("footer", { className: cx('ds-footer', className), children: _jsxs("div", { className: "ds-container", children: [_jsxs("div", { className: "ds-footer__grid", style: { '--footer-cols': Math.max(columns.length, 1) }, children: [(brand || description) && (_jsxs("div", { className: "ds-footer__brand", children: [brand, description && _jsx("p", { className: "ds-footer__description", children: description })] })), columns.map((c) => (_jsxs("nav", { "aria-label": c.title, className: "ds-footer__col", children: [_jsx("p", { className: "ds-footer__title", children: c.title }), _jsx("ul", { className: "ds-footer__links", children: c.links.map((l) => _jsx("li", { children: _jsx(AriaLink, { className: "ds-footer__link", href: l.href, children: l.label }) }, l.href)) })] }, c.title)))] }), (note || meta) && (_jsxs("div", { className: "ds-footer__bottom", children: [note && _jsx("p", { style: { margin: 0 }, children: note }), meta && _jsx("p", { style: { margin: 0 }, children: meta })] }))] }) }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from './Link.js';
import { cx } from '../lib/cx.js';
/** Footer: brand, link columns and the status note. */
export function Footer({ brand, description, columns = [], note, className }) {
    return (_jsx("footer", { className: cx('ds-footer', className), children: _jsxs("div", { className: "ds-container ds-footer__grid", children: [(brand || description) && (_jsxs("div", { className: "ds-stack", children: [brand, description && _jsx("p", { className: "ds-type-body-small ds-secondary", style: { margin: 0 }, children: description })] })), columns.map((c) => (_jsxs("nav", { "aria-label": c.title, children: [_jsx("p", { className: "ds-type-label", style: { margin: 0 }, children: c.title }), _jsx("ul", { className: "ds-footer__links", children: c.links.map((l) => _jsx("li", { children: _jsx(Link, { href: l.href, inline: true, children: l.label }) }, l.href)) })] }, c.title))), note && _jsx("p", { className: "ds-tag-mono", children: note })] }) }));
}

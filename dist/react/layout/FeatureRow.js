import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tile } from '../content/Tile.js';
import { Link } from '../navigation/Link.js';
import { cx } from '../lib/cx.js';
/** Feature Row: open columns (1 / 2 / 3 by breakpoint) of Feature items. No card around each item. */
export function FeatureRow({ children, className }) {
    return _jsx("div", { className: cx('ds-features', className), children: children });
}
/** Feature: tile, heading, short text and an optional link. */
export function Feature({ icon, tone, title, level = 3, children, href, linkLabel }) {
    const H = level === 4 ? 'h4' : 'h3';
    return (_jsxs("article", { className: "ds-feature", children: [_jsx(Tile, { icon: icon, tone: tone }), _jsx(H, { className: "ds-type-h3", children: title }), children && _jsx("p", { className: "ds-type-body ds-secondary", children: children }), href && _jsx(Link, { href: href, children: linkLabel ?? 'Learn more' })] }));
}

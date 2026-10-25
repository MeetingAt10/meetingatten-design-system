import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from '../navigation/Link.js';
import { laneClass } from '../lib/lanes.js';
import { cx } from '../lib/cx.js';
/** Agenda: features or steps as ruled rows of a schedule, never a row of same-size icon cards. */
export function Agenda({ children, className }) {
    return _jsx("ol", { className: cx('ds-agenda', className), children: children });
}
/** One agenda row: the lane chip, the title and text, and an optional link. */
export function AgendaItem({ chip, lane, title, level = 3, children, href, linkLabel = 'Learn more' }) {
    const H = `h${level}`;
    return (_jsxs("li", { className: "ds-agenda__item", children: [_jsx("span", { className: cx('ds-agenda__chip', laneClass('ds-agenda__chip', lane)), children: chip }), _jsxs("div", { className: "ds-agenda__text", children: [_jsx(H, { className: "ds-agenda__title", children: title }), children && _jsx("p", { className: "ds-agenda__body", children: children })] }), href ? _jsx(Link, { href: href, variant: "standalone", className: "ds-agenda__action", children: linkLabel }) : _jsx("span", {})] }));
}

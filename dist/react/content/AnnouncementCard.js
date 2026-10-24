import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardMeta } from './Card.js';
import { Badge } from '../badge/Badge.js';
import { Link } from '../navigation/Link.js';
import { Icon } from '../icon/Icon.js';
/** Content / Announcement Card: a department or community update in a collection. */
export function AnnouncementCard({ tag = 'Announcement', title, level = 3, children, meta, href, linkLabel = 'Read update', demo, className }) {
    const H = `h${level}`;
    return (_jsxs(Card, { className: className, children: [_jsxs(CardHeader, { children: [_jsx(Badge, { tone: "info", children: tag }), demo && _jsx("span", { className: "ds-tag-mono", children: "Demo" })] }), _jsx(H, { className: "ds-type-h3", children: title }), children && _jsx("p", { className: "ds-type-body", style: { margin: 0 }, children: children }), (meta || href) && (_jsxs(CardMeta, { children: [meta && _jsx("span", { children: meta }), href && _jsxs(Link, { href: href, children: [linkLabel, " ", _jsx(Icon, { name: "chevron", size: 16 })] })] }))] }));
}

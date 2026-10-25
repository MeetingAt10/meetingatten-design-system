import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardLane, CardWhen, CardTitle, CardBody, CardMeta } from './Card.js';
import { Link } from '../navigation/Link.js';
/** Announcement card: a department or community update in a collection. */
export function AnnouncementCard({ tag = 'Announcement', lane = 'schedule', when, dateTime, title, level = 3, children, meta, href, linkLabel = 'Read update', demo, className }) {
    return (_jsxs(Card, { className: className, children: [_jsxs(CardHeader, { children: [_jsxs("span", { className: "ds-card__lead", children: [_jsx(CardLane, { lane: lane, children: tag }), when && _jsx(CardWhen, { dateTime: dateTime, children: when })] }), demo && _jsx("span", { className: "ds-badge ds-badge--outline", children: "Demo" })] }), _jsx(CardTitle, { level: level, children: title }), children && _jsx(CardBody, { children: children }), (meta || href) && (_jsxs(CardMeta, { children: [meta && _jsx("span", { children: meta }), href && _jsxs(Link, { href: href, variant: "standalone", className: "ds-card__action", children: [linkLabel, _jsxs("span", { className: "ds-visually-hidden", children: [": ", title] })] })] }))] }));
}

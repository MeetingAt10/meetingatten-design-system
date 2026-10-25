"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as AriaLink } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { laneClass } from '../lib/lanes.js';
import { cx } from '../lib/cx.js';
/**
 * Card: a paper sheet for ONE item in a collection (announcement, post, record) or a floating panel.
 * Never put a card inside a card; detail pages use open sections, rules and headings.
 */
export function Card({ as: Tag = 'article', overlay, link, flush, className, ...rest }) {
    return _jsx(Tag, { ...rest, className: cx('ds-card', overlay && 'ds-card--overlay', link && 'ds-card--link', flush && 'ds-card--flush', className) });
}
/** Card header row: the lane chip and time on the left, meta on the right. */
export function CardHeader({ className, ...rest }) {
    return _jsx("div", { ...rest, className: cx('ds-card__head', className) });
}
/** Lane chip: a small solid block naming the lane ("Announcement", "Algorithms"). A topic, never a permission or confidentiality signal. */
export function CardLane({ lane, children }) {
    return _jsx("span", { className: cx('ds-card__lane', laneClass('ds-card__lane', lane)), children: children });
}
/** Time or reference in tabular mono ("Mon 19 Oct · 09:00", "DEMO-024"). */
export function CardWhen({ children, dateTime }) {
    return _jsx("time", { className: "ds-card__when", dateTime: dateTime, children: children });
}
/** Card title. With `href` the title link stretches over the whole card, so the card is named by its title alone. */
export function CardTitle({ level = 3, href, children }) {
    const H = `h${level}`;
    return _jsx(H, { className: "ds-card__title", children: href ? _jsx(AriaLink, { href: href, className: "ds-card__link", children: children }) : children });
}
/** Card body text. */
export function CardBody({ className, ...rest }) {
    return _jsx("p", { ...rest, className: cx('ds-card__body', className) });
}
/** Card meta row (ruled): author, counts, status, and the card's call to action on the right. */
export function CardMeta({ className, ...rest }) {
    return _jsx("div", { ...rest, className: cx('ds-card__meta', className) });
}
/** The visual call to action of a linked card ("Join the conversation"); the title link already does the navigating. */
export function CardAction({ children }) {
    return _jsxs("span", { className: "ds-card__action", "aria-hidden": "true", children: [children, _jsx(Icon, { name: "arrow-right", size: 16 })] });
}

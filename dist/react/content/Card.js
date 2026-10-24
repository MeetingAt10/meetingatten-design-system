import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/**
 * Card: only for items in a collection (announcements, posts, records) and floating panels.
 * Never put a card inside a card; use open sections with headings and Divider for detail pages.
 */
export function Card({ as: Tag = 'article', overlay, className, ...rest }) {
    return _jsx(Tag, { ...rest, className: cx('ds-card', overlay && 'ds-card--overlay', className) });
}
/** Card header row: badge or tag on the left, meta on the right. */
export function CardHeader({ className, ...rest }) {
    return _jsx("div", { ...rest, className: cx('ds-card__head', className) });
}
/** Card meta row: author, counts and the card's link. */
export function CardMeta({ className, ...rest }) {
    return _jsx("div", { ...rest, className: cx('ds-card__meta', className) });
}

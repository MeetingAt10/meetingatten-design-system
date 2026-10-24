"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as AriaLink } from 'react-aria-components';
import { Card, CardHeader, CardMeta } from './Card.js';
import { Badge } from '../badge/Badge.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Content / Forum Card: a community discussion. The title is the link and its hit area covers the card, which lifts on hover. */
export function ForumCard({ topic, title, level = 3, excerpt, author, replies, status, href, actionLabel = 'Join the conversation', demo, className }) {
    const H = `h${level}`;
    const meta = [author, replies !== undefined ? `${replies} ${replies === 1 ? 'reply' : 'replies'}` : undefined, status].filter(Boolean).join(' · ');
    return (_jsxs(Card, { className: cx('ds-card--link', className), children: [_jsxs(CardHeader, { children: [_jsx(Badge, { tone: "accent", children: topic }), demo && _jsx("span", { className: "ds-tag-mono", children: "Demo" })] }), _jsx(H, { className: "ds-type-h3", children: _jsx(AriaLink, { href: href, className: "ds-card__link", children: title }) }), excerpt && _jsx("p", { className: "ds-type-body", style: { margin: 0 }, children: excerpt }), meta && _jsx(CardMeta, { children: meta }), _jsxs("span", { className: "ds-card__action", "aria-hidden": "true", children: [actionLabel, _jsx(Icon, { name: "chevron", size: 16 })] })] }));
}

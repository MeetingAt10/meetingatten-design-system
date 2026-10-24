"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { CardHeader, CardMeta } from './Card.js';
import { CardLink } from './CardLink.js';
import { Badge } from '../badge/Badge.js';
import { Icon } from '../icon/Icon.js';
/** Content / Forum Card: a community discussion; the whole card opens the thread and is named by its title. */
export function ForumCard({ topic, title, level = 3, excerpt, author, replies, status, href, actionLabel = 'Join the conversation', demo, className }) {
    const titleId = useId();
    const H = `h${level}`;
    const meta = [author, replies !== undefined ? `${replies} ${replies === 1 ? 'reply' : 'replies'}` : undefined, status].filter(Boolean).join(' · ');
    return (_jsxs(CardLink, { href: href, "aria-labelledby": titleId, className: className, children: [_jsxs(CardHeader, { children: [_jsx(Badge, { tone: "accent", children: topic }), demo && _jsx("span", { className: "ds-tag-mono", children: "Demo" })] }), _jsx(H, { id: titleId, className: "ds-type-h3", children: title }), excerpt && _jsx("p", { className: "ds-type-body", style: { margin: 0 }, children: excerpt }), meta && _jsx(CardMeta, { children: meta }), _jsxs("span", { className: "ds-card__action", "aria-hidden": "true", children: [actionLabel, _jsx(Icon, { name: "chevron", size: 16 })] })] }));
}

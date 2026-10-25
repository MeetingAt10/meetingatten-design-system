import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardLane, CardTitle, CardBody, CardMeta, CardAction } from './Card.js';
import { Avatar } from './Avatar.js';
import { Icon } from '../icon/Icon.js';
/** Forum card: a community discussion. The title is the link and its hit area covers the card, which lifts on hover. */
export function ForumCard({ topic, title, level = 3, excerpt, author, replies, status, href, actionLabel = 'Join the conversation', demo, className }) {
    return (_jsxs(Card, { link: true, className: className, children: [_jsxs(CardHeader, { children: [_jsx(CardLane, { lane: "community", children: topic }), demo && _jsx("span", { className: "ds-badge ds-badge--outline", children: "Demo" })] }), _jsx(CardTitle, { level: level, href: href, children: title }), excerpt && _jsx(CardBody, { children: excerpt }), _jsxs(CardMeta, { children: [author && _jsxs("span", { className: "ds-card__stat", children: [_jsx(Avatar, { name: author, size: 24, lane: "community", decorative: true }), author] }), replies !== undefined && (_jsxs("span", { className: "ds-card__stat", children: [_jsx(Icon, { name: "chat", size: 16 }), replies, " ", replies === 1 ? 'reply' : 'replies'] })), status && _jsx("span", { children: status }), _jsx(CardAction, { children: actionLabel })] })] }));
}

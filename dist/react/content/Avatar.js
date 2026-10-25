import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
export const initials = (name) => name.replace(/\(.*?\)/g, '').trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? '').join('');
/** Avatar: a photo or initials on the lane wash. */
export function Avatar({ name, src, size = 36, lane = 'schedule', decorative, className }) {
    const cls = cx('ds-avatar', size !== 36 && `ds-avatar--${size}`, lane !== 'schedule' && `ds-avatar--${lane}`, className);
    const a11y = decorative ? { 'aria-hidden': true } : { role: 'img', 'aria-label': name };
    return (_jsx("span", { className: cls, ...a11y, children: src ? _jsx("img", { src: src, alt: "" }) : initials(name) }));
}
/** Avatar group: overlapping avatars with a "+N" count; the whole group is named once ("Ana, Ben and 3 others"). */
export function AvatarGroup({ names, max = 3, size = 32, lane, className }) {
    const shown = names.slice(0, max);
    const more = names.length - shown.length;
    const label = more > 0 ? `${shown.join(', ')} and ${more} ${more === 1 ? 'other' : 'others'}` : shown.join(', ');
    return (_jsxs("span", { className: cx('ds-avatar-group', className), role: "img", "aria-label": label, children: [shown.map((n) => _jsx(Avatar, { name: n, size: size, lane: lane, decorative: true }, n)), more > 0 && _jsxs("span", { className: cx('ds-avatar ds-avatar--more', size !== 36 && `ds-avatar--${size}`), "aria-hidden": "true", children: ["+", more] })] }));
}

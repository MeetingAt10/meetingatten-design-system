import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
const initials = (name) => name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? '').join('');
/** Avatar: initials or photo in a circle (24 / 32 / 40px). */
export function Avatar({ name, src, size = 'md', className }) {
    const cls = cx('ds-avatar', size !== 'md' && `ds-avatar--${size}`, className);
    if (src)
        return _jsx("img", { className: cls, src: src, alt: name });
    return _jsx("span", { className: cls, role: "img", "aria-label": name, children: initials(name) });
}

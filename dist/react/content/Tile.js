import { jsx as _jsx } from "react/jsx-runtime";
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Tile: a small solid block in the lane color holding one icon. */
export function Tile({ icon, tone = 'schedule', size = 'md', weight = 'duotone', label, className }) {
    return (_jsx("span", { className: cx('ds-tile', tone !== 'schedule' && `ds-tile--${tone}`, size !== 'md' && `ds-tile--${size}`, className), ...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }), children: _jsx(Icon, { name: icon, size: size === 'lg' ? 32 : size === 'sm' ? 16 : 20, weight: weight }) }));
}

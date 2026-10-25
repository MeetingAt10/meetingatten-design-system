import { jsx as _jsx } from "react/jsx-runtime";
import { ICONS } from './icons.js';
import { cx } from '../lib/cx.js';
/** Icon: Phosphor glyphs in currentColor. Weight carries emphasis: fill marks the current item. */
export function Icon({ name, icon, size = 20, weight = 'regular', label, className }) {
    const Glyph = icon ?? (name ? ICONS[name] : undefined);
    if (!Glyph)
        return null;
    return (_jsx(Glyph, { size: size, weight: weight, className: cx('ds-icon', size !== 20 && `ds-icon--${size}`, className), focusable: "false", ...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }) }));
}

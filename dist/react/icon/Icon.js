import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
import { ICONS } from './icons.js';
/** Icon from the Figma set. Inline SVG: no sprite needed in the page. Strokes follow `currentColor`. */
export function Icon({ name, size = 20, label, className }) {
    const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };
    return (_jsx("svg", { className: cx('ds-icon', size !== 20 && `ds-icon--${size}`, className), viewBox: "0 0 24 24", focusable: "false", ...a11y, dangerouslySetInnerHTML: { __html: ICONS[name] } }));
}

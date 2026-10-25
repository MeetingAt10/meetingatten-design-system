import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Divider: a hairline rule between sections (use instead of wrapping sections in cards). */
export function Divider({ label, strong, vertical, className }) {
    if (label)
        return _jsx("div", { className: cx('ds-divider ds-divider--label', className), children: label });
    if (vertical)
        return _jsx("span", { role: "separator", "aria-orientation": "vertical", className: cx('ds-divider ds-divider--vertical', className) });
    return _jsx("hr", { className: cx('ds-divider', strong && 'ds-divider--strong', className) });
}

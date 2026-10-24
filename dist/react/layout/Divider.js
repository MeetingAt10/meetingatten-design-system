import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Divider: thin rule between sections of a detail page (use instead of wrapping sections in cards). */
export function Divider({ className }) {
    return _jsx("hr", { className: cx('ds-divider', className) });
}

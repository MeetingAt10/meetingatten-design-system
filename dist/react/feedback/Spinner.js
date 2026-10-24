import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Spinner, 16px, follows `currentColor`. Stops rotating under reduced motion. */
export function Spinner({ label, className }) {
    const a11y = label ? { role: 'status', 'aria-label': label } : { 'aria-hidden': true };
    return _jsx("span", { className: cx('ds-spinner', className), ...a11y });
}

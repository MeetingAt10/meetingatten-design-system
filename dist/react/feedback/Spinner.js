import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Spinner: a clock face whose hand sweeps, in currentColor. The hand rests under reduced motion. */
export function Spinner({ label, size = 16, className }) {
    const a11y = label ? { role: 'status', 'aria-label': label } : { 'aria-hidden': true };
    return _jsx("span", { className: cx('ds-spinner', size !== 16 && `ds-spinner--${size}`, className), ...a11y });
}

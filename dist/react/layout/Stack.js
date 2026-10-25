import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Stack: vertical rhythm with one gap. */
export function Stack({ gap = 16, className, ...rest }) {
    return _jsx("div", { ...rest, className: cx('ds-stack', gap !== 16 && `ds-stack--${gap}`, className) });
}
/** Row: a wrapping horizontal group (buttons, chips, meta). */
export function Row({ gap = 12, justify = 'start', className, ...rest }) {
    return _jsx("div", { ...rest, className: cx('ds-row', gap !== 12 && `ds-row--${gap}`, justify !== 'start' && `ds-row--${justify}`, className) });
}

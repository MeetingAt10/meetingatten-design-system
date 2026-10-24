import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Stack: vertical rhythm with a fixed gap. */
export function Stack({ gap = 16, className, ...rest }) {
    return _jsx("div", { ...rest, className: cx('ds-stack', gap !== 16 && `ds-stack--${gap}`, className) });
}

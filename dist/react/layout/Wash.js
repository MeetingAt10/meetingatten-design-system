import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Wash: decorative token washes (accent, secondary, info fading to transparent) behind its children. */
export function Wash({ className, ...rest }) {
    return _jsx("div", { ...rest, className: cx('ds-wash', className) });
}

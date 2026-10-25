import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Skeleton: a placeholder in the shape of what is loading. Decorative: mark the region `aria-busy` and announce loading in text. */
export function Skeleton({ shape = 'text', width, height, className }) {
    return (_jsx("span", { className: cx('ds-skeleton', shape !== 'text' && `ds-skeleton--${shape}`, className), style: { ...(width ? { '--w': width } : {}), ...(height ? { '--h': height } : {}) }, "aria-hidden": "true" }));
}

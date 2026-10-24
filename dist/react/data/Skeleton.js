import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Skeleton line for loading views. Decorative: mark the loading region itself with `aria-busy` and a text status. */
export function Skeleton({ short, className }) {
    return _jsx("span", { className: cx('ds-skeleton', short && 'ds-skeleton--short', className), "aria-hidden": "true" });
}

import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Highlight: a highlighter stroke behind the words that matter; it swipes in from the left once. */
export function Highlight({ tone = 'mark', under, children, className }) {
    return _jsx("mark", { className: cx('ds-highlight', tone !== 'mark' && `ds-highlight--${tone}`, under && 'ds-highlight--under', className), children: children });
}

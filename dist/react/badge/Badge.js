import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Badge / Role, Status, Severity. */
export function Badge({ tone = 'neutral', className, children }) {
    return _jsx("span", { className: cx('ds-badge', tone !== 'neutral' && `ds-badge--${tone}`, className), children: children });
}

import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Container: centered content column (max 1200px) with the grid margins for each breakpoint. */
export function Container({ as: Tag = 'div', className, ...rest }) {
    return _jsx(Tag, { ...rest, className: cx('ds-container', className) });
}

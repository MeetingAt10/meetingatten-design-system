import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Container: the centered content column with the grid margins for each breakpoint. */
export function Container({ as: Tag = 'div', width = 'content', className, ...rest }) {
    return _jsx(Tag, { ...rest, className: cx('ds-container', width !== 'content' && `ds-container--${width}`, className) });
}

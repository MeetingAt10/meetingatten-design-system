import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';
/** Parallax: drifts against the scroll while it crosses the viewport. Static where scroll-driven animation is unsupported or motion is reduced. */
export function Parallax({ as: Tag = 'div', depth, className, style, ...rest }) {
    return _jsx(Tag, { ...rest, className: cx('ds-parallax', className), style: depth === undefined ? style : { ...cssVars({ '--ds-depth': depth }), ...style } });
}

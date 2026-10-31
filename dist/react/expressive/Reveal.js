import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';
/**
 * Reveal: content that eases in as it scrolls into view (marketing surfaces). Visible by default; static where
 * scroll-driven animation is unsupported or motion is reduced.
 */
export function Reveal({ as: Tag = 'div', variant = 'up', index, className, style, ...rest }) {
    return _jsx(Tag, { ...rest, className: cx('ds-reveal', `ds-reveal--${variant}`, className), style: index === undefined ? style : { ...cssVars({ '--ds-reveal-index': index }), ...style } });
}

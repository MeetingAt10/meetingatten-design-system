import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Section: a full-width region with the density rhythm and a centered container. */
export function Section({ tone = 'canvas', tight, bleed, className, children, ...rest }) {
    return (_jsx("section", { ...rest, className: cx('ds-section', tone !== 'canvas' && `ds-section--${tone}`, tight && 'ds-section--tight', className), children: bleed ? children : _jsx("div", { className: "ds-container", children: children }) }));
}

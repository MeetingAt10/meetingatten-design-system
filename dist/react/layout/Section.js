import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Section: full-width region with the density section rhythm and a centered container. */
export function Section({ band, wash, className, children, ...rest }) {
    return (_jsx("section", { ...rest, className: cx(band && 'ds-band', wash && 'ds-wash', className) || undefined, children: _jsx("div", { className: "ds-container ds-section", children: children }) }));
}

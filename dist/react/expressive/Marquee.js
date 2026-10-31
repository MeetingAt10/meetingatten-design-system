import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';
/** Marquee: an endless slow line of items. The second copy is hidden from assistive technology and inert. Pauses on hover and focus; static and wrapped under reduced motion. */
export function Marquee({ children, reverse, duration, label, className }) {
    return (_jsx("div", { className: cx('ds-marquee', reverse && 'ds-marquee--reverse', className), role: label ? 'region' : undefined, "aria-label": label, style: duration === undefined ? undefined : cssVars({ '--ds-marquee-duration': `${duration}s` }), children: _jsxs("div", { className: "ds-marquee__track", children: [_jsx("div", { className: "ds-marquee__group", children: children }), _jsx("div", { className: "ds-marquee__group", "aria-hidden": "true", inert: true, children: children })] }) }));
}

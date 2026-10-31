import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';
/** Orbit: items on a dashed hairline ring that turns slowly while every item stays upright. Still under reduced motion. */
export function Orbit({ items, radius = 140, className, children }) {
    return (_jsxs("div", { className: cx('ds-orbit', className), style: cssVars({ '--ds-orbit-radius': radius }), children: [children && _jsx("div", { className: "ds-orbit__core", children: children }), _jsx("div", { className: "ds-orbit__ring", children: items.map((item, i) => (_jsx("div", { className: "ds-orbit__item", style: cssVars({ '--angle': `${(360 / items.length) * i - 90}deg` }), children: _jsx("div", { className: "ds-orbit__upright", children: item }) }, i))) })] }));
}

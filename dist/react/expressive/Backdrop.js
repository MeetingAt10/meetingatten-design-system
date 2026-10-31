import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Aurora: three slow lane-colored glows behind a hero or band. Decorative; put it in a positioned, isolated parent (`position: relative; isolation: isolate`). */
export function Aurora({ className }) {
    return (_jsxs("div", { className: cx('ds-aurora', className), "aria-hidden": "true", children: [_jsx("span", { className: "ds-aurora__blob" }), _jsx("span", { className: "ds-aurora__blob" }), _jsx("span", { className: "ds-aurora__blob" })] }));
}
/** GridBackdrop: the ruled time sheet, hour and half-hour hairlines fading out at the edges. Decorative; same parent rules as Aurora. */
export function GridBackdrop({ className }) {
    return _jsx("div", { className: cx('ds-grid-backdrop', className), "aria-hidden": "true" });
}

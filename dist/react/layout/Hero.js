import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Hero: the first viewport as a thesis. Copy on the left; the product doing its job on the right. */
export function Hero({ plate, title, lead, actions, note, art, className }) {
    return (_jsxs("section", { className: cx('ds-container ds-hero', className), children: [_jsxs("div", { className: "ds-hero__copy", children: [plate, _jsx("h1", { className: "ds-hero__title", children: title }), lead && _jsx("p", { className: "ds-hero__lead", children: lead }), actions && _jsx("div", { className: "ds-hero__actions", children: actions }), note && _jsx("p", { className: "ds-hero__note", children: note })] }), art && _jsx("div", { className: "ds-hero__art", children: art })] }));
}

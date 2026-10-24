import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Hero: page opener with eyebrow, h1, lead, actions and an optional preview. */
export function Hero({ eyebrow, title, lead, actions, aside, wash = true, className }) {
    return (_jsx("div", { className: cx(wash && 'ds-wash', className) || undefined, children: _jsxs("section", { className: "ds-container ds-hero", children: [_jsxs("div", { children: [eyebrow && _jsx("p", { className: "ds-eyebrow", children: eyebrow }), _jsx("h1", { className: "ds-type-display ds-hero__title", children: title }), lead && _jsx("p", { className: "ds-type-body-large ds-secondary ds-hero__lead", children: lead }), actions && _jsx("div", { className: "ds-row ds-hero__actions", children: actions })] }), aside && _jsx("div", { className: "ds-stack", children: aside })] }) }));
}

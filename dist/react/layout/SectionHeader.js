import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Section Header: eyebrow, heading, lead and optional action above a section. */
export function SectionHeader({ eyebrow, title, level = 2, description, action, className }) {
    const H = level === 3 ? 'h3' : 'h2';
    return (_jsxs("header", { className: cx('ds-section-header', className), children: [eyebrow && _jsx("p", { className: "ds-eyebrow", children: eyebrow }), _jsx(H, { className: "ds-type-h1", children: title }), description && _jsx("p", { className: "ds-type-body-large ds-secondary ds-reading", children: description }), action] }));
}

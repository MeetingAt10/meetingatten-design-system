import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Section header: the heading carries its own weight (no label above it), an optional description and actions. */
export function SectionHeader({ title, level = 2, description, actions, split, id, className }) {
    const H = `h${level}`;
    return (_jsxs("header", { className: cx('ds-section-header', level === 1 && 'ds-section-header--page', split && 'ds-section-header--split', className), children: [_jsx(H, { id: id, className: "ds-section-header__title", children: title }), description && _jsx("p", { className: "ds-section-header__description", children: description }), actions && _jsx("div", { className: "ds-section-header__actions", children: actions })] }));
}

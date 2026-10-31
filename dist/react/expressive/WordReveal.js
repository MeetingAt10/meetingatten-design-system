import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';
/** WordReveal: a headline whose words rise out of the line on load, 70ms apart. Screen readers read the whole text once. */
export function WordReveal({ text, as: Tag = 'h2', className }) {
    return (_jsxs(Tag, { className: cx('ds-word-rise', className), children: [_jsx("span", { className: "ds-visually-hidden", children: text }), _jsx("span", { "aria-hidden": "true", children: text.split(/\s+/).filter(Boolean).map((word, i) => (_jsxs(Fragment, { children: [i > 0 && ' ', _jsx("span", { className: "ds-word-rise__word", style: cssVars({ '--i': i }), children: _jsx("span", { children: word }) })] }, i))) })] }));
}

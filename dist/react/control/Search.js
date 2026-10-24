"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchField, Input, Button } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Control / Search: compact search box with a clear button. Escape clears. */
export function Search({ label, placeholder, className, ...rest }) {
    return (_jsxs(SearchField, { ...rest, "aria-label": label, className: cx('ds-search', className), children: [_jsx(Icon, { name: "search", size: 16 }), _jsx(Input, { placeholder: placeholder }), _jsx(Button, { className: "ds-search__clear", children: _jsx(Icon, { name: "close", size: 16 }) })] }));
}

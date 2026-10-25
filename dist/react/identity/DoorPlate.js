import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Door plate: the faculty-door name plate, used as the ACCS wordmark (until a logo is approved), page plates and room labels. */
export function DoorPlate({ name = 'ACCS', code, tagline, size = 'md', outline, label, className }) {
    return (_jsxs("span", { className: cx('ds-plate', size !== 'md' && `ds-plate--${size}`, outline && 'ds-plate--outline', className), ...(label ? { role: 'img', 'aria-label': label } : {}), children: [_jsx("span", { className: "ds-plate__name", children: name }), code && _jsxs(_Fragment, { children: [' ', _jsx("span", { className: "ds-plate__code", children: code })] }), tagline && _jsxs(_Fragment, { children: [' ', _jsx("span", { className: "ds-plate__tagline", children: tagline })] })] }));
}

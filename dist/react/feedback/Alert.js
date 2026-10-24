import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
const ICON = { info: 'info', success: 'check', warning: 'alert', error: 'alert' };
/** Feedback / Inline Alert: persistent message next to the content it is about, with a tone bar, icon and title. */
export function Alert({ tone = 'info', title, children, role, className }) {
    return (_jsxs("div", { role: role ?? (tone === 'error' ? 'alert' : 'status'), className: cx('ds-alert', tone !== 'info' && `ds-alert--${tone}`, className), children: [_jsx(Icon, { name: ICON[tone] }), _jsxs("div", { children: [_jsx("b", { className: "ds-alert__title", children: title }), children && _jsx("span", { className: "ds-alert__body", children: children })] })] }));
}

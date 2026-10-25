import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
const ICON = { info: 'info', success: 'check-circle', warning: 'warning', danger: 'warning-circle', neutral: 'info' };
/** Inline alert: a persistent message next to the content it is about, its icon on a solid block in the tone color. */
export function Alert({ tone = 'info', title, children, icon, actions, onDismiss, role, className }) {
    return (_jsxs("div", { role: role ?? (tone === 'danger' ? 'alert' : 'status'), className: cx('ds-alert', tone !== 'info' && `ds-alert--${tone}`, className), children: [_jsx("span", { className: "ds-alert__icon", "aria-hidden": "true", children: _jsx(Icon, { name: icon ?? ICON[tone], size: 16, weight: "fill" }) }), _jsxs("div", { className: "ds-alert__content", children: [_jsx("p", { className: "ds-alert__title", children: title }), children && _jsx("div", { className: "ds-alert__body", children: children }), actions && _jsx("div", { className: "ds-alert__actions", children: actions })] }), onDismiss && (_jsx("button", { type: "button", className: "ds-icon-btn ds-alert__close", "aria-label": "Dismiss", onClick: onDismiss, children: _jsx(Icon, { name: "x", size: 16 }) }))] }));
}

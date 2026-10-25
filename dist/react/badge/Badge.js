import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Status badge: a word plus a marker whose line form carries the state. */
export function Badge({ tone = 'neutral', form = 'solid', marker = true, outline, className, children }) {
    return (_jsxs("span", { className: cx('ds-badge', tone !== 'neutral' && `ds-badge--${tone}`, form !== 'solid' && `ds-badge--${form}`, outline && 'ds-badge--outline', className), children: [marker && _jsx("span", { className: "ds-badge__mark", "aria-hidden": "true" }), children] }));
}
/** Role badge: an outlined plate ("Student", "Faculty"). A role is not a permission or privacy signal. */
export function RoleBadge({ children, className }) {
    return _jsx("span", { className: cx('ds-badge ds-badge--role', className), children: children });
}
/** Severity: 1-3 filled segments plus the word. Its own family, independent of status. */
export function Severity({ level, children, className }) {
    return (_jsxs("span", { className: cx('ds-severity', `ds-severity--${level}`, className), children: [_jsxs("span", { className: "ds-severity__bars", "aria-hidden": "true", children: [_jsx("i", {}), _jsx("i", {}), _jsx("i", {})] }), children ?? level[0].toUpperCase() + level.slice(1)] }));
}

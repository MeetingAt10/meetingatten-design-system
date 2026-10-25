import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tile } from '../content/Tile.js';
import { Spinner } from '../feedback/Spinner.js';
import { cx } from '../lib/cx.js';
const LOOK = {
    empty: { icon: 'tray', tone: 'neutral' },
    error: { icon: 'warning-circle', tone: 'danger' },
    restricted: { icon: 'lock', tone: 'restricted' },
};
/** View state: what a data region shows when it is loading, empty, failed or restricted. Announced as a status. */
export function ViewState({ kind, title, description, actions, className }) {
    return (_jsxs("div", { className: cx('ds-view-state', className), role: kind === 'error' ? 'alert' : 'status', "aria-busy": kind === 'loading' || undefined, children: [kind === 'loading' ? _jsx(Spinner, { size: 32 }) : _jsx(Tile, { icon: LOOK[kind].icon, tone: LOOK[kind].tone, size: "lg" }), _jsx("p", { className: "ds-view-state__title", children: title }), description && _jsx("p", { className: "ds-view-state__body", children: description }), actions && _jsx("div", { className: "ds-view-state__actions", children: actions })] }));
}

import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Keyboard key: keycaps for a shortcut, read as one phrase ("Ctrl K"). */
export function Kbd({ keys, className }) {
    const list = Array.isArray(keys) ? keys : [keys];
    if (list.length === 1)
        return _jsx("kbd", { className: cx('ds-kbd', className), children: list[0] });
    return (_jsx("kbd", { className: cx('ds-kbd-combo', className), children: list.map((k) => _jsx("kbd", { className: "ds-kbd", children: k }, k)) }));
}

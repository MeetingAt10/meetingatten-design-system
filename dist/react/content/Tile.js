import { jsx as _jsx } from "react/jsx-runtime";
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Tile: 48px decorative icon on a semantic tint. Pair it with a visible heading; the tile itself is hidden from assistive tech. */
export function Tile({ icon, tone = 'info', className }) {
    return (_jsx("span", { className: cx('ds-tile', tone !== 'info' && `ds-tile--${tone}`, className), "aria-hidden": "true", children: _jsx(Icon, { name: icon, size: 24 }) }));
}

import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
/** Grid: responsive columns on the layout gutters. Task order is kept when columns stack. */
export function Grid({ columns = 2, className, ...rest }) {
    return _jsx("div", { ...rest, className: cx('ds-cols', columns === 3 && 'ds-cols--3', columns === 'main' && 'ds-cols--main', className) });
}

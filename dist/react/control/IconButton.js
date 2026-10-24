"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button as AriaButton } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Control / Icon Button, 44x44. */
export function IconButton({ icon, label, inverse, className, ...rest }) {
    return (_jsx(AriaButton, { ...rest, "aria-label": label, className: cx('ds-icon-btn', inverse && 'ds-icon-btn--inverse', className), children: _jsx(Icon, { name: icon }) }));
}

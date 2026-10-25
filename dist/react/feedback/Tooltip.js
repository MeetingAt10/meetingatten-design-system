"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip as AriaTooltip, OverlayArrow, TooltipTrigger } from 'react-aria-components';
import { cx } from '../lib/cx.js';
export { TooltipTrigger };
/**
 * Tooltip: the ink plate naming an icon control. Put it inside a TooltipTrigger after a focusable React Aria trigger:
 * `<TooltipTrigger><IconButton .../><Tooltip>Notifications</Tooltip></TooltipTrigger>` (IconButton does this for you).
 */
export function Tooltip({ children, placement = 'top', offset = 8, className, ...rest }) {
    return (_jsxs(AriaTooltip, { ...rest, placement: placement, offset: offset, className: cx('ds-tooltip', className), children: [_jsx(OverlayArrow, { children: _jsx("svg", { width: 10, height: 6, viewBox: "0 0 10 6", className: "ds-tooltip__arrow", "aria-hidden": "true", children: _jsx("path", { d: "M0 0 L5 6 L10 0" }) }) }), children] }));
}

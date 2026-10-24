"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TooltipTrigger, Tooltip as AriaTooltip } from 'react-aria-components';
/** Feedback / Tooltip: label for an icon control, on the inverse surface. Shows on hover and keyboard focus; Escape hides it. */
export function Tooltip({ content, children, delay = 600, placement = 'top' }) {
    return (_jsxs(TooltipTrigger, { delay: delay, children: [children, _jsx(AriaTooltip, { placement: placement, offset: 6, className: "ds-tooltip", children: content })] }));
}

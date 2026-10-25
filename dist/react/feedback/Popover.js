"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DialogTrigger, Popover as AriaPopover, Dialog, Heading, OverlayArrow } from 'react-aria-components';
/** Popover: a small non-modal dialog beside its trigger for extra detail or a quick setting. Escape or a click outside closes it. */
export function Popover({ trigger, title, label, children, placement = 'bottom start', arrow }) {
    return (_jsxs(DialogTrigger, { children: [trigger, _jsxs(AriaPopover, { placement: placement, offset: arrow ? 12 : 8, className: "ds-popover", children: [arrow && (_jsx(OverlayArrow, { children: _jsx("svg", { width: 14, height: 8, viewBox: "0 0 14 8", className: "ds-popover__arrow", "aria-hidden": "true", children: _jsx("path", { d: "M0 0 L7 8 L14 0" }) }) })), _jsxs(Dialog, { className: "ds-popover__dialog", "aria-label": title ? undefined : label, children: [title && _jsx(Heading, { slot: "title", className: "ds-popover__title", children: title }), children] })] })] }));
}

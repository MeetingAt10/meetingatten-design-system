"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DialogTrigger, Popover as AriaPopover, Dialog, Heading } from 'react-aria-components';
/** Feedback / Popover: small non-modal dialog next to its trigger for extra detail or a quick setting. Escape or a click outside closes it. */
export function Popover({ trigger, title, label, children, placement = 'bottom start' }) {
    return (_jsxs(DialogTrigger, { children: [trigger, _jsx(AriaPopover, { placement: placement, offset: 8, className: "ds-popover", children: _jsxs(Dialog, { className: "ds-popover-panel", "aria-label": title ? undefined : label, children: [title && _jsx(Heading, { slot: "title", className: "ds-type-h4", children: title }), children] }) })] }));
}

"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ModalOverlay, Modal as AriaModal, Dialog, Heading, DialogTrigger } from 'react-aria-components';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';
export { DialogTrigger };
/** Feedback / Modal: blocks the page for a decision. Focus moves in and is trapped; Escape and the close button close it; focus returns to the trigger. */
export function Modal({ title, children, role = 'dialog', className, ...rest }) {
    return (_jsx(ModalOverlay, { ...rest, className: "ds-modal-overlay", children: _jsx(AriaModal, { children: _jsx(Dialog, { role: role, className: cx('ds-modal', className), children: ({ close }) => (_jsxs(_Fragment, { children: [_jsxs("div", { className: "ds-modal__head", children: [_jsx(Heading, { slot: "title", className: "ds-type-h3", children: title }), _jsx(IconButton, { icon: "close", label: "Close", onPress: close })] }), typeof children === 'function' ? children({ close }) : children] })) }) }) }));
}
/** Two-column action row at the bottom of a Modal (secondary first, primary last). */
export function ModalActions({ children }) {
    return _jsx("div", { className: "ds-modal__actions", children: children });
}

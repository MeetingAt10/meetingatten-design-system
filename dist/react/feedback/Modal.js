"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ModalOverlay, Modal as AriaModal, Dialog, Heading, DialogTrigger } from 'react-aria-components';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';
export { DialogTrigger };
/** Modal: blocks the page for a decision. It rises into place (a bottom sheet on phones); focus is trapped; Escape closes; focus returns to the trigger. */
export function Modal({ title, children, role = 'dialog', size = 'md', className, ...rest }) {
    return (_jsx(ModalOverlay, { ...rest, isDismissable: rest.isDismissable ?? role === 'dialog', className: "ds-modal-overlay", children: _jsx(AriaModal, { className: cx('ds-modal', size === 'lg' && 'ds-modal--lg', className), children: _jsx(Dialog, { role: role, className: "ds-modal__dialog", children: ({ close }) => (_jsxs(_Fragment, { children: [_jsxs("header", { className: "ds-modal__head", children: [_jsx(Heading, { slot: "title", className: "ds-modal__title", children: title }), role === 'dialog' && _jsx(IconButton, { icon: "x", label: "Close", onPress: close, className: "ds-modal__close", tooltip: false })] }), typeof children === 'function' ? children({ close }) : children] })) }) }) }));
}
/** The body of a Modal: explanatory text and fields. */
export function ModalBody({ children }) {
    return _jsx("div", { className: "ds-modal__body", children: children });
}
/** The ruled action row at the bottom of a Modal (secondary first, primary last). */
export function ModalActions({ children }) {
    return _jsx("footer", { className: "ds-modal__actions", children: children });
}

"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ModalOverlay, Modal as AriaModal, Dialog, Heading } from 'react-aria-components';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';
/** Feedback / Drawer: side sheet for secondary work (filters, details). Behaves like Modal: focus trapped, Escape closes. Open it with DialogTrigger or `isOpen`. */
export function Drawer({ title, children, placement = 'end', className, ...rest }) {
    return (_jsx(ModalOverlay, { ...rest, isDismissable: rest.isDismissable ?? true, className: cx('ds-drawer-overlay', placement === 'start' && 'ds-drawer-overlay--start'), children: _jsx(AriaModal, { className: "ds-drawer-frame", children: _jsx(Dialog, { className: cx('ds-drawer', className), children: ({ close }) => (_jsxs(_Fragment, { children: [_jsxs("div", { className: "ds-modal__head", children: [_jsx(Heading, { slot: "title", className: "ds-type-h3", children: title }), _jsx(IconButton, { icon: "close", label: "Close", onPress: close })] }), typeof children === 'function' ? children({ close }) : children] })) }) }) }));
}

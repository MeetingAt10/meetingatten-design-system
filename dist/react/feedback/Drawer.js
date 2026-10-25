"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ModalOverlay, Modal as AriaModal, Dialog, Heading } from 'react-aria-components';
import { motion, useReducedMotion } from 'motion/react';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';
const SWIPE_CLOSE = 120;
/** Drawer: a sheet for secondary work that keeps the page in view (filters, record details, mobile navigation). Focus is trapped; Escape and the scrim close it. */
export function Drawer({ title, children, side = 'end', footer, className, ...rest }) {
    const reduce = useReducedMotion();
    const swipe = side === 'bottom' && !reduce;
    return (_jsx(ModalOverlay, { ...rest, isDismissable: rest.isDismissable ?? true, className: "ds-drawer-overlay", children: ({ state }) => (_jsx(AriaModal, { className: cx('ds-drawer', side !== 'end' && `ds-drawer--${side}`, className), render: swipe ? ({ onDrag: _d, onDragStart: _ds, onDragEnd: _de, onAnimationStart: _as, ...props }) => (_jsx(motion.div, { ...props, drag: "y", dragConstraints: { top: 0, bottom: 0 }, dragElastic: { top: 0, bottom: 0.6 }, dragSnapToOrigin: true, onDragEnd: (_e, info) => { if (info.offset.y > SWIPE_CLOSE || info.velocity.y > 600)
                    state.close(); } })) : undefined, children: _jsx(Dialog, { className: "ds-drawer__dialog", children: ({ close }) => (_jsxs(_Fragment, { children: [side === 'bottom' && _jsx("div", { className: "ds-drawer__handle", "aria-hidden": "true" }), _jsxs("header", { className: "ds-drawer__head", children: [_jsx(Heading, { slot: "title", className: "ds-drawer__title", children: title }), _jsx(IconButton, { icon: "x", label: "Close", onPress: close, tooltip: false })] }), _jsx("div", { className: "ds-drawer__body", children: typeof children === 'function' ? children({ close }) : children }), footer && _jsx("footer", { className: "ds-drawer__foot", children: footer })] })) }) })) }));
}

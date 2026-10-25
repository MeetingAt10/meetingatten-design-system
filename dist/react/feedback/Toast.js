"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { flushSync } from 'react-dom';
import { UNSTABLE_ToastQueue as ToastQueue, UNSTABLE_ToastRegion as AriaToastRegion, UNSTABLE_Toast as AriaToast, UNSTABLE_ToastContent as ToastContent, Text, Button as AriaButton, } from 'react-aria-components';
import { motion, useReducedMotion } from 'motion/react';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
// React Aria's toast API is UNSTABLE_ in 1.22.1 (pinned); a rename only touches this file.
// Removals run inside a view transition where the browser supports it, so a closing toast fades out.
const viewTransition = (fn) => {
    const doc = typeof document !== 'undefined' ? document : undefined;
    if (doc?.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        doc.startViewTransition(() => flushSync(fn));
    else
        fn();
};
/** The default queue used by `toast()` and `ToastRegion`. */
export const toastQueue = new ToastQueue({ maxVisibleToasts: 3, wrapUpdate: viewTransition });
const DEFAULT_TIMEOUT = 6000;
/** Shows a toast. Default timeout 6s (paused while hovered or focused); `timeout: 0` keeps it until dismissed. Returns its key. */
export function toast(title, options = {}) {
    const { queue = toastQueue, timeout = DEFAULT_TIMEOUT, ...content } = options;
    return queue.add({ title, ...content }, timeout > 0 ? { timeout } : {});
}
const SWIPE_CLOSE = 90;
/** Toast region: render once near the app root; `toast()` adds messages. F6 moves focus to the region. Toasts can be swiped away. */
export function ToastRegion({ queue = toastQueue, label = 'Notifications', className }) {
    const reduce = useReducedMotion();
    return (_jsx(AriaToastRegion, { queue: queue, "aria-label": label, className: cx('ds-toast-region', className), children: ({ toast: t }) => (_jsxs(AriaToast, { toast: t, style: { viewTransitionName: `ds-toast-${t.key.replace(/[^\w-]/g, '')}` }, className: cx('ds-toast', t.content.tone === 'success' && 'ds-toast--success'), render: reduce ? undefined : ({ onDrag: _d, onDragStart: _ds, onDragEnd: _de, onAnimationStart: _as, ...props }) => (_jsx(motion.div, { ...props, drag: "x", dragSnapToOrigin: true, dragElastic: 0.5, onDragEnd: (_e, info) => { if (Math.abs(info.offset.x) > SWIPE_CLOSE)
                    queue.close(t.key); } })), children: [_jsx("span", { className: "ds-toast__icon", "aria-hidden": "true", children: _jsx(Icon, { name: t.content.tone === 'success' ? 'check-circle' : 'info', weight: "fill" }) }), _jsxs(ToastContent, { className: "ds-toast__content", children: [_jsx(Text, { slot: "title", className: "ds-toast__title", children: t.content.title }), t.content.description && _jsx(Text, { slot: "description", className: "ds-toast__body", children: t.content.description }), t.content.action && (_jsx("span", { className: "ds-toast__actions", children: _jsx(AriaButton, { className: "ds-toast__action", onPress: () => { t.content.action?.onAction(); queue.close(t.key); }, children: t.content.action.label }) }))] }), _jsx(AriaButton, { slot: "close", className: "ds-toast__close", "aria-label": "Dismiss", children: _jsx(Icon, { name: "x", size: 16 }) }), t.timeout ? _jsx("span", { className: "ds-toast__timer", "aria-hidden": "true", style: { '--toast-duration': `${t.timeout}ms` } }) : null] })) }));
}
export { ToastQueue };

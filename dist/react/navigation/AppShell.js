"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { MobileHeader } from './MobileHeader.js';
import { IconButton } from '../control/IconButton.js';
import { Drawer } from '../feedback/Drawer.js';
import { cx } from '../lib/cx.js';
/** App shell: sidebar beside the top bar and content on desktop; a mobile header with a navigation drawer below 1024px. */
export function AppShell({ sidebar, topBar, mobileBrand, mobileNav, mobileActions, children, contentAs: Content = 'main', contentId, density, className }) {
    const [open, setOpen] = useState(false);
    return (_jsxs("div", { className: cx('ds-shell', className), "data-density": density, children: [sidebar, _jsxs("div", { className: "ds-shell__main", children: [mobileBrand && (_jsx(MobileHeader, { start: mobileNav ? _jsx(IconButton, { icon: "list", label: "Open navigation", onPress: () => setOpen(true), tooltip: false }) : undefined, end: mobileActions, children: mobileBrand })), topBar, _jsx(Content, { className: "ds-shell__content", id: contentId, tabIndex: contentId ? -1 : undefined, children: children })] }), mobileNav && (_jsx(Drawer, { title: "Navigation", side: "start", isOpen: open, onOpenChange: setOpen, children: _jsx("nav", { "aria-label": "Main", className: "ds-shell__drawer-nav", onClick: (e) => e.target.closest('a') && setOpen(false), children: mobileNav }) }))] }));
}

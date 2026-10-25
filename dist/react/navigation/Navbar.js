"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link as AriaLink } from 'react-aria-components';
import { IconButton } from '../control/IconButton.js';
import { NavItem } from './NavItem.js';
import { Drawer } from '../feedback/Drawer.js';
import { cx } from '../lib/cx.js';
/** Navbar: the landing and Meeting At 10 top navigation. Below 768px the links move into a drawer. */
export function Navbar({ brand, brandHref = '/', brandLabel, links, actions, label = 'Main', transparent, className }) {
    const [open, setOpen] = useState(false);
    return (_jsxs("header", { className: cx('ds-navbar', transparent && 'ds-navbar--transparent', className), children: [_jsxs("div", { className: "ds-container ds-navbar__inner", children: [_jsx(AriaLink, { className: "ds-navbar__brand", href: brandHref, "aria-label": brandLabel, children: brand }), _jsx("nav", { "aria-label": label, className: "ds-navbar__links", children: links.map((l) => (_jsx(AriaLink, { href: l.href, className: "ds-navbar__link", "aria-current": l.current ? 'page' : undefined, children: l.label }, l.href))) }), _jsxs("div", { className: "ds-navbar__actions", children: [actions, _jsx(IconButton, { className: "ds-navbar__menu", icon: "list", label: "Open menu", tooltip: false, onPress: () => setOpen(true) })] })] }), _jsx(Drawer, { title: "Menu", isOpen: open, onOpenChange: setOpen, children: _jsx("nav", { "aria-label": label, className: "ds-navbar__sheet", children: links.map((l) => (_jsx(NavItem, { href: l.href, isCurrent: l.current, onPress: () => setOpen(false), children: l.label }, l.href))) }) })] }));
}

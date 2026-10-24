"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useState } from 'react';
import { Link } from './Link.js';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';
/** Navbar: landing top navigation. Under 1024px the links move into a panel opened by the menu button; Escape closes it. */
export function Navbar({ brand, brandHref = '/', brandLabel, links, actions, label = 'Main', className }) {
    const [open, setOpen] = useState(false);
    const panelId = useId();
    const items = links.map((l) => (_jsx("li", { children: _jsx(Link, { href: l.href, "aria-current": l.current ? 'page' : undefined, children: l.label }) }, l.href)));
    return (_jsxs("nav", { "aria-label": label, className: cx('ds-navbar', className), onKeyDown: (e) => e.key === 'Escape' && setOpen(false), children: [_jsx("a", { className: "ds-navbar__brand", href: brandHref, "aria-label": brandLabel, children: brand }), _jsx("ul", { className: "ds-navbar__links", children: items }), _jsxs("div", { className: "ds-navbar__actions", children: [actions, _jsx(IconButton, { className: "ds-navbar__toggle", icon: open ? 'close' : 'menu', label: "Menu", "aria-expanded": open, "aria-controls": panelId, onPress: () => setOpen(!open) })] }), open && _jsx("ul", { id: panelId, className: "ds-navbar__panel", children: items })] }));
}

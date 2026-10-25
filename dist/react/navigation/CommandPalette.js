"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Autocomplete, useFilter, SearchField, Input, Menu, MenuItem, MenuSection, Header, Collection, Text, ModalOverlay, Modal, Dialog, } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { Kbd } from '../control/Kbd.js';
/** Command palette: Ctrl+K / Cmd+K opens one search over destinations and actions; arrow keys move, Enter runs, Escape closes. */
export function CommandPalette({ items, onAction, isOpen: controlled, onOpenChange, placeholder = 'Search pages and actions' }) {
    const [uncontrolled, setUncontrolled] = useState(false);
    const isOpen = controlled ?? uncontrolled;
    const setOpen = (open) => { if (controlled === undefined)
        setUncontrolled(open); onOpenChange?.(open); };
    const { contains } = useFilter({ sensitivity: 'base' });
    useEffect(() => {
        if (controlled !== undefined)
            return;
        const onKey = (e) => {
            if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setUncontrolled((open) => !open);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [controlled]);
    const sections = [...new Set(items.map((i) => i.section))].map((name) => ({ id: name, name, items: items.filter((i) => i.section === name) }));
    return (_jsx(ModalOverlay, { isOpen: isOpen, onOpenChange: setOpen, isDismissable: true, className: "ds-modal-overlay", children: _jsx(Modal, { className: "ds-modal ds-command", children: _jsxs(Dialog, { "aria-label": "Command palette", className: "ds-modal__dialog", children: [_jsxs(Autocomplete, { filter: (textValue, inputValue) => contains(textValue, inputValue), children: [_jsxs(SearchField, { "aria-label": "Search commands", autoFocus: true, className: "ds-command__search", children: [_jsx(Icon, { name: "search" }), _jsx(Input, { className: "ds-command__input", placeholder: placeholder }), _jsx(Kbd, { keys: "Esc" })] }), _jsx(Menu, { items: sections, className: "ds-listbox ds-command__results", onAction: (key) => { setOpen(false); onAction(key); }, renderEmptyState: () => _jsx("p", { className: "ds-listbox__empty", children: "No pages or actions match. Try another word." }), children: (section) => (_jsxs(MenuSection, { id: section.id, className: "ds-listbox__section", children: [_jsx(Header, { className: "ds-listbox__header", children: section.name }), _jsx(Collection, { items: section.items, children: (item) => (_jsxs(MenuItem, { id: item.id, textValue: [item.label, ...(item.keywords ?? [])].join(' '), className: "ds-option", children: [item.icon && _jsx(Icon, { name: item.icon, size: 16 }), _jsxs("span", { className: "ds-option__text", children: [_jsx(Text, { slot: "label", children: item.label }), item.description && _jsx(Text, { slot: "description", className: "ds-option__description", children: item.description })] }), item.shortcut && _jsx("span", { className: "ds-option__keys", children: _jsx(Kbd, { keys: item.shortcut }) })] })) })] })) })] }), _jsxs("footer", { className: "ds-command__foot", "aria-hidden": "true", children: [_jsxs("span", { children: [_jsx(Kbd, { keys: "\u2191" }), _jsx(Kbd, { keys: "\u2193" }), " to move"] }), _jsxs("span", { children: [_jsx(Kbd, { keys: "Enter" }), " to open"] }), _jsxs("span", { children: [_jsx(Kbd, { keys: "Esc" }), " to close"] })] })] }) }) }));
}

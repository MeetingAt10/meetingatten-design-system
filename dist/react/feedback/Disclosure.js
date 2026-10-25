"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Disclosure as AriaDisclosure, DisclosurePanel, DisclosureGroup as AriaDisclosureGroup, Heading, Button as AriaButton, } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Disclosure: a ruled row that opens in place; the caret turns and the panel height springs. */
export function Disclosure({ title, level = 3, children, className, ...rest }) {
    return (_jsxs(AriaDisclosure, { ...rest, className: cx('ds-disclosure', className), children: [_jsx(Heading, { level: level, className: "ds-disclosure__heading", children: _jsxs(AriaButton, { slot: "trigger", className: "ds-disclosure__trigger", children: [title, _jsx(Icon, { name: "caret-down", size: 20, className: "ds-disclosure__caret" })] }) }), _jsx(DisclosurePanel, { className: "ds-disclosure__panel", children: _jsx("div", { className: "ds-disclosure__content", children: typeof children === 'string' ? _jsx("p", { children: children }) : children }) })] }));
}
/** Accordion: a group of Disclosures. One open at a time unless `allowsMultipleExpanded`. */
export function Accordion({ className, ...rest }) {
    return _jsx(AriaDisclosureGroup, { ...rest, className: cx('ds-disclosure-group', className) });
}

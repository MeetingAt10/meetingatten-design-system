"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs as AriaTabs, TabList as AriaTabList, Tab as AriaTab, TabPanel as AriaTabPanel, SelectionIndicator, } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Tabs: views of one page. Arrow keys move between tabs; Tab moves into the panel. */
export function Tabs({ className, ...rest }) {
    return _jsx(AriaTabs, { ...rest, className: cx('ds-tabs', className) });
}
/** The ruled row of tabs. Give it an `aria-label`. */
export function TabList({ className, ...rest }) {
    return _jsx(AriaTabList, { ...rest, className: cx('ds-tabs__list', className) });
}
/** One tab; the selected one carries the navy rule, which slides between tabs. */
export function Tab({ children, icon, count, className, ...rest }) {
    return (_jsxs(AriaTab, { ...rest, className: cx('ds-tab', className), children: [icon && _jsx(Icon, { name: icon, size: 16 }), children, count !== undefined && _jsx("span", { className: "ds-tab__count", children: count }), _jsx(SelectionIndicator, { className: "ds-tab__indicator" })] }));
}
/** The content for one tab. Loading and errors for the view belong here. */
export function TabPanel({ className, ...rest }) {
    return _jsx(AriaTabPanel, { ...rest, className: cx('ds-tabs__panel', className) });
}

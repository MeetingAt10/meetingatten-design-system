"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Tabs as AriaTabs, TabList as AriaTabList, Tab as AriaTab, TabPanel as AriaTabPanel, } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Navigation / Tabs: switch between views of one page. Arrow keys move between tabs; Tab enters the panel. */
export function Tabs({ className, ...rest }) {
    return _jsx(AriaTabs, { ...rest, className: cx('ds-tabs-root', className) });
}
/** The row of tabs. Give it an `aria-label`. */
export function TabList({ className, ...rest }) {
    return _jsx(AriaTabList, { ...rest, className: cx('ds-tabs', className) });
}
/** One tab (128x48); selected shows an underline and stronger weight, not color alone. */
export function Tab({ className, ...rest }) {
    return _jsx(AriaTab, { ...rest, className: cx('ds-tab', className) });
}
/** The content for one tab. Route loading and errors belong here, not in the tab. */
export function TabPanel({ className, ...rest }) {
    return _jsx(AriaTabPanel, { ...rest, className: cx('ds-tab-panel', className) });
}

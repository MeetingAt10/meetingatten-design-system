"use client";
import {
  Tabs as AriaTabs, TabList as AriaTabList, Tab as AriaTab, TabPanel as AriaTabPanel,
  type TabsProps as AriaTabsProps, type TabListProps as AriaTabListProps, type TabProps as AriaTabProps, type TabPanelProps as AriaTabPanelProps,
} from 'react-aria-components';
import { cx } from '../lib/cx.js';

export interface TabsProps extends Omit<AriaTabsProps, 'className'> { className?: string }
export interface TabListProps<T extends object> extends Omit<AriaTabListProps<T>, 'className'> { className?: string }
export interface TabProps extends Omit<AriaTabProps, 'className'> { className?: string }
export interface TabPanelProps extends Omit<AriaTabPanelProps, 'className'> { className?: string }

/** Navigation / Tabs: switch between views of one page. Arrow keys move between tabs; Tab enters the panel. */
export function Tabs({ className, ...rest }: TabsProps) {
  return <AriaTabs {...rest} className={cx('ds-tabs-root', className)} />;
}

/** The row of tabs. Give it an `aria-label`. */
export function TabList<T extends object>({ className, ...rest }: TabListProps<T>) {
  return <AriaTabList {...rest} className={cx('ds-tabs', className)} />;
}

/** One tab (128x48); selected shows an underline and stronger weight, not color alone. */
export function Tab({ className, ...rest }: TabProps) {
  return <AriaTab {...rest} className={cx('ds-tab', className)} />;
}

/** The content for one tab. Route loading and errors belong here, not in the tab. */
export function TabPanel({ className, ...rest }: TabPanelProps) {
  return <AriaTabPanel {...rest} className={cx('ds-tab-panel', className)} />;
}

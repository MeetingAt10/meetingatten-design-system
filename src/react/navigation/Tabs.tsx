"use client";
import {
  Tabs as AriaTabs, TabList as AriaTabList, Tab as AriaTab, TabPanel as AriaTabPanel, SelectionIndicator,
  type TabsProps as AriaTabsProps, type TabListProps as AriaTabListProps, type TabProps as AriaTabProps, type TabPanelProps as AriaTabPanelProps,
} from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface TabsProps extends Omit<AriaTabsProps, 'className'> { className?: string }
export interface TabListProps<T extends object> extends Omit<AriaTabListProps<T>, 'className'> { className?: string }
export interface TabProps extends Omit<AriaTabProps, 'className' | 'children'> {
  children: React.ReactNode;
  icon?: IconName;
  /** Count after the label ("12"). */
  count?: number;
  className?: string;
}
export interface TabPanelProps extends Omit<AriaTabPanelProps, 'className'> { className?: string }

/** Tabs: views of one page. Arrow keys move between tabs; Tab moves into the panel. */
export function Tabs({ className, ...rest }: TabsProps) {
  return <AriaTabs {...rest} className={cx('ds-tabs', className)} />;
}

/** The ruled row of tabs. Give it an `aria-label`. */
export function TabList<T extends object>({ className, ...rest }: TabListProps<T>) {
  return <AriaTabList {...rest} className={cx('ds-tabs__list', className)} />;
}

/** One tab; the selected one carries the navy rule, which slides between tabs. */
export function Tab({ children, icon, count, className, ...rest }: TabProps) {
  return (
    <AriaTab {...rest} className={cx('ds-tab', className)}>
      {icon && <Icon name={icon} size={16} />}
      {children}
      {count !== undefined && <span className="ds-tab__count">{count}</span>}
      <SelectionIndicator className="ds-tab__indicator" />
    </AriaTab>
  );
}

/** The content for one tab. Loading and errors for the view belong here. */
export function TabPanel({ className, ...rest }: TabPanelProps) {
  return <AriaTabPanel {...rest} className={cx('ds-tabs__panel', className)} />;
}

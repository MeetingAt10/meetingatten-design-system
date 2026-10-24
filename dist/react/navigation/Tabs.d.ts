import { type TabsProps as AriaTabsProps, type TabListProps as AriaTabListProps, type TabProps as AriaTabProps, type TabPanelProps as AriaTabPanelProps } from 'react-aria-components';
export interface TabsProps extends Omit<AriaTabsProps, 'className'> {
    className?: string;
}
export interface TabListProps<T extends object> extends Omit<AriaTabListProps<T>, 'className'> {
    className?: string;
}
export interface TabProps extends Omit<AriaTabProps, 'className'> {
    className?: string;
}
export interface TabPanelProps extends Omit<AriaTabPanelProps, 'className'> {
    className?: string;
}
/** Navigation / Tabs: switch between views of one page. Arrow keys move between tabs; Tab enters the panel. */
export declare function Tabs({ className, ...rest }: TabsProps): import("react").JSX.Element;
/** The row of tabs. Give it an `aria-label`. */
export declare function TabList<T extends object>({ className, ...rest }: TabListProps<T>): import("react").JSX.Element;
/** One tab (128x48); selected shows an underline and stronger weight, not color alone. */
export declare function Tab({ className, ...rest }: TabProps): import("react").JSX.Element;
/** The content for one tab. Route loading and errors belong here, not in the tab. */
export declare function TabPanel({ className, ...rest }: TabPanelProps): import("react").JSX.Element;

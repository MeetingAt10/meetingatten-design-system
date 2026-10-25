import { type TabsProps as AriaTabsProps, type TabListProps as AriaTabListProps, type TabProps as AriaTabProps, type TabPanelProps as AriaTabPanelProps } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export interface TabsProps extends Omit<AriaTabsProps, 'className'> {
    className?: string;
}
export interface TabListProps<T extends object> extends Omit<AriaTabListProps<T>, 'className'> {
    className?: string;
}
export interface TabProps extends Omit<AriaTabProps, 'className' | 'children'> {
    children: React.ReactNode;
    icon?: IconName;
    /** Count after the label ("12"). */
    count?: number;
    className?: string;
}
export interface TabPanelProps extends Omit<AriaTabPanelProps, 'className'> {
    className?: string;
}
/** Tabs: views of one page. Arrow keys move between tabs; Tab moves into the panel. */
export declare function Tabs({ className, ...rest }: TabsProps): import("react").JSX.Element;
/** The ruled row of tabs. Give it an `aria-label`. */
export declare function TabList<T extends object>({ className, ...rest }: TabListProps<T>): import("react").JSX.Element;
/** One tab; the selected one carries the navy rule, which slides between tabs. */
export declare function Tab({ children, icon, count, className, ...rest }: TabProps): import("react").JSX.Element;
/** The content for one tab. Loading and errors for the view belong here. */
export declare function TabPanel({ className, ...rest }: TabPanelProps): import("react").JSX.Element;

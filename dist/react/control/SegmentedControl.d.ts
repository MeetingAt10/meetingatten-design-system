import { type ToggleButtonGroupProps, type ToggleButtonProps, type Key } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export interface SegmentedControlProps extends Omit<ToggleButtonGroupProps, 'className' | 'children' | 'selectionMode' | 'selectedKeys' | 'defaultSelectedKeys' | 'onSelectionChange'> {
    /** Accessible name for the group ("Calendar view"). */
    'aria-label'?: string;
    /** The chosen segment. */
    selectedKey?: Key;
    defaultSelectedKey?: Key;
    onSelectionChange?: (key: Key) => void;
    /** Stretch segments to fill the width. */
    block?: boolean;
    children: React.ReactNode;
    className?: string;
}
/** Segmented control: one choice among 2-5 views; the paper chip slides to the chosen segment. */
export declare function SegmentedControl({ selectedKey, defaultSelectedKey, onSelectionChange, block, children, className, ...rest }: SegmentedControlProps): import("react").JSX.Element;
export interface SegmentProps extends Omit<ToggleButtonProps, 'className' | 'children'> {
    id: Key;
    icon?: IconName;
    children: React.ReactNode;
    className?: string;
}
/** One option of a SegmentedControl. */
export declare function Segment({ icon, children, className, ...rest }: SegmentProps): import("react").JSX.Element;

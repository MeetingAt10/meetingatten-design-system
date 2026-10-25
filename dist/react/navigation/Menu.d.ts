import { type Key, type MenuItemProps as AriaMenuItemProps, type Placement } from 'react-aria-components';
import { type ButtonVariant } from '../control/Button.js';
import { type IconName } from '../icon/Icon.js';
export interface MenuButtonProps {
    /** Button text, or the accessible name when `iconOnly`. */
    label: string;
    /** Icon for the icon-only trigger (default `dots-three`). */
    icon?: IconName;
    iconOnly?: boolean;
    variant?: ButtonVariant;
    placement?: Placement;
    /** Called with the chosen item's `id`. */
    onAction?: (key: Key) => void;
    /** MenuItem, MenuSection and MenuSeparator elements. */
    children: React.ReactNode;
    className?: string;
}
/** Menu: a button that opens a list of actions. Arrow keys move, Enter chooses, Escape closes; destructive actions sit last. */
export declare function MenuButton({ label, icon, iconOnly, variant, placement, onAction, children, className }: MenuButtonProps): import("react").JSX.Element;
export interface MenuItemProps extends Omit<AriaMenuItemProps, 'className' | 'children'> {
    /** Destructive action: danger ink; confirm it in a Modal. */
    danger?: boolean;
    icon?: IconName;
    /** Second line under the label. */
    description?: React.ReactNode;
    /** Keyboard shortcut shown on the right ("Ctrl K"). */
    shortcut?: string;
    children: React.ReactNode;
    className?: string;
}
/** One action in a menu. */
export declare function MenuItem({ danger, icon, description, shortcut, children, className, ...rest }: MenuItemProps): import("react").JSX.Element;
/** A titled group of menu items. */
export declare function MenuSection({ title, children }: {
    title: string;
    children: React.ReactNode;
}): import("react").JSX.Element;
/** A rule between groups of menu items. */
export declare function MenuSeparator(): import("react").JSX.Element;

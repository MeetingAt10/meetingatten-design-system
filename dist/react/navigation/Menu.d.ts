import { type Key, type MenuItemProps as AriaMenuItemProps } from 'react-aria-components';
import { type ButtonVariant } from '../control/Button.js';
import { type IconName } from '../icon/Icon.js';
export interface MenuButtonProps {
    /** Button text, or the accessible name when `iconOnly`. */
    label: string;
    /** Icon for the icon-only trigger. Default `menu`. */
    icon?: IconName;
    iconOnly?: boolean;
    variant?: ButtonVariant;
    /** Called with the chosen item's `id`. */
    onAction?: (key: Key) => void;
    /** MenuItem elements. */
    children: React.ReactNode;
    className?: string;
}
/** Menu: a button that opens a list of actions. Arrow keys move, Enter chooses, Escape closes. */
export declare function MenuButton({ label, icon, iconOnly, variant, onAction, children, className }: MenuButtonProps): import("react").JSX.Element;
export interface MenuItemProps extends Omit<AriaMenuItemProps, 'className' | 'children'> {
    /** Destructive action: shown in the danger color; confirm it in a Modal. */
    danger?: boolean;
    children: React.ReactNode;
}
/** One action in a MenuButton list. */
export declare function MenuItem({ danger, children, ...rest }: MenuItemProps): import("react").JSX.Element;

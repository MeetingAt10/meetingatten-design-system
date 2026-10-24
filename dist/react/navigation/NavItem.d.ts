import { type LinkProps as AriaLinkProps } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export interface NavItemProps extends Omit<AriaLinkProps, 'className' | 'children'> {
    icon?: IconName;
    /** The page this item points to is open (`aria-current="page"`, left bar and tint). */
    isCurrent?: boolean;
    children: React.ReactNode;
    className?: string;
}
/** Navigation / Item: one sidebar destination, 48px high. */
export declare function NavItem({ icon, isCurrent, children, className, ...rest }: NavItemProps): import("react").JSX.Element;

import { type LinkProps as AriaLinkProps } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export interface NavItemProps extends Omit<AriaLinkProps, 'className' | 'children'> {
    icon?: IconName;
    /** This item's page is open: a solid navy block, the icon in its fill weight, `aria-current="page"`. */
    isCurrent?: boolean;
    /** Count shown on the right (unread posts, open drafts). Repeat it in words where it matters. */
    count?: number;
    children: React.ReactNode;
    className?: string;
}
/** Navigation item: one sidebar or mobile-menu destination. */
export declare function NavItem({ icon, isCurrent, count, children, className, ...rest }: NavItemProps): import("react").JSX.Element;

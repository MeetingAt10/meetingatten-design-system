import { type LinkProps as AriaLinkProps } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export interface LinkProps extends Omit<AriaLinkProps, 'className' | 'children'> {
    /** `inline` inside running text (default), `standalone` with an arrow that steps forward on hover, `quiet` for dense lists. */
    variant?: 'inline' | 'standalone' | 'quiet';
    /** Trailing icon for standalone links (default `arrow-right`; external links get `arrow-up-right`). */
    icon?: IconName;
    /** Opens in a new tab and says so to assistive tech. */
    external?: boolean;
    className?: string;
    children?: React.ReactNode;
}
/** Link: links navigate, buttons act. External links say they open a new tab. */
export declare function Link({ variant, icon, external, className, children, ...rest }: LinkProps): import("react").JSX.Element;

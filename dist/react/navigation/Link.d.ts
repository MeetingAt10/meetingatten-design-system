import { type LinkProps as AriaLinkProps } from 'react-aria-components';
export interface LinkProps extends Omit<AriaLinkProps, 'className' | 'children'> {
    /** Inline link inside running text (underlined) instead of the 44px standalone link. */
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
}
/** Navigation / Link. Links navigate; use Button for actions. */
export declare function Link({ inline, className, children, ...rest }: LinkProps): import("react").JSX.Element;

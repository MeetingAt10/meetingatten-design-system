import { type LinkProps as AriaLinkProps } from 'react-aria-components';
export interface CardLinkProps extends Omit<AriaLinkProps, 'className' | 'children'> {
    className?: string;
    children?: React.ReactNode;
}
/** Interactive card: the whole card is one link. Lifts 2px on hover (shadow only under reduced motion). Keep links out of its content. */
export declare function CardLink({ className, children, ...rest }: CardLinkProps): import("react").JSX.Element;

import { type LinkProps as AriaLinkProps } from 'react-aria-components';
export interface CardLinkProps extends Omit<AriaLinkProps, 'className' | 'children'> {
    className?: string;
    children?: React.ReactNode;
}
/** Card link: a card that is one link element (short cards with no other controls). Prefer `<Card link>` + `CardTitle href` when the card has a heading. */
export declare function CardLink({ className, children, ...rest }: CardLinkProps): import("react").JSX.Element;

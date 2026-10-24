export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    /** Element to render; `article` for collection items. */
    as?: 'article' | 'div' | 'section' | 'li';
    /** Floating panel (overlay shadow), for example a sign-in panel over a wash. */
    overlay?: boolean;
}
/**
 * Card: only for items in a collection (announcements, posts, records) and floating panels.
 * Never put a card inside a card; use open sections with headings and Divider for detail pages.
 */
export declare function Card({ as: Tag, overlay, className, ...rest }: CardProps): import("react").JSX.Element;
/** Card header row: badge or tag on the left, meta on the right. */
export declare function CardHeader({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
/** Card meta row: author, counts and the card's link. */
export declare function CardMeta({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;

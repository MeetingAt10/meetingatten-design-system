import { type Lane } from '../lib/lanes.js';
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    /** Element to render; `article` for collection items (default), `li` inside a list. */
    as?: 'article' | 'div' | 'section' | 'li';
    /** Floating panel (overlay shadow, no rule), for example a sign-in panel. */
    overlay?: boolean;
    /** The whole card is one link: put a CardTitle with `href` inside. Lifts on hover. */
    link?: boolean;
    /** No padding (media, tables). */
    flush?: boolean;
    /** Surface treatment: `sheet` is a raised paper card (default), `tint` is flat on the neutral tint with a hairline, `open` has no surface, only a top rule. */
    variant?: 'sheet' | 'tint' | 'open';
}
/**
 * Card: one item in a collection (announcement, post, record) or a floating panel. Raised paper by default;
 * `variant` swaps in a flat tint or an open, rule-only treatment. Never put a card inside a card.
 */
export declare function Card({ as: Tag, overlay, link, flush, variant, className, ...rest }: CardProps): import("react").JSX.Element;
/** Card header row: the lane chip and time on the left, meta on the right. */
export declare function CardHeader({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
/** Lane chip: a small solid block naming the lane ("Announcement", "Algorithms"). A topic, never a permission or confidentiality signal. */
export declare function CardLane({ lane, children }: {
    lane?: Lane;
    children: React.ReactNode;
}): import("react").JSX.Element;
/** Time or reference in tabular mono ("Mon 19 Oct · 09:00", "CCS-2026-0142"). */
export declare function CardWhen({ children, dateTime }: {
    children: React.ReactNode;
    dateTime?: string;
}): import("react").JSX.Element;
export interface CardTitleProps {
    /** Heading level; default 3. */
    level?: 2 | 3 | 4;
    /** Makes the title the card's link; its hit area covers the card (pair with `<Card link>`). */
    href?: string;
    children: React.ReactNode;
}
/** Card title. With `href` the title link stretches over the whole card, so the card is named by its title alone. */
export declare function CardTitle({ level, href, children }: CardTitleProps): import("react").JSX.Element;
/** Card body text. */
export declare function CardBody({ className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>): import("react").JSX.Element;
/** Card meta row (ruled): author, counts, status, and the card's call to action on the right. */
export declare function CardMeta({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
/** The visual call to action of a linked card ("Join the conversation"); the title link already does the navigating. */
export declare function CardAction({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;

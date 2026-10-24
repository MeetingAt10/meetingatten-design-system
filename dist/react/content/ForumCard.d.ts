export interface ForumCardProps {
    /** Topic chip (accent). A topic, never a permission or confidentiality signal. */
    topic: string;
    title: React.ReactNode;
    /** Heading level; default 3. */
    level?: 2 | 3 | 4;
    /** Short excerpt. Never names, identifiers or restricted report content. */
    excerpt?: React.ReactNode;
    author?: string;
    replies?: number;
    /** For example "Open discussion". */
    status?: string;
    href: string;
    /** Visual call to action at the bottom. */
    actionLabel?: string;
    demo?: boolean;
    className?: string;
}
/** Content / Forum Card: a community discussion. The title is the link and its hit area covers the card, which lifts on hover. */
export declare function ForumCard({ topic, title, level, excerpt, author, replies, status, href, actionLabel, demo, className }: ForumCardProps): import("react").JSX.Element;

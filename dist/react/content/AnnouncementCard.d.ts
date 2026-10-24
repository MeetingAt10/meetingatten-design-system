export interface AnnouncementCardProps {
    /** Tag chip text. */
    tag?: string;
    title: React.ReactNode;
    /** Heading level; default 3. */
    level?: 2 | 3 | 4;
    /** Short body text. */
    children?: React.ReactNode;
    /** Source line, for example "Community desk · illustrative". */
    meta?: React.ReactNode;
    href?: string;
    linkLabel?: string;
    /** Labels synthetic content with a "Demo" tag. */
    demo?: boolean;
    className?: string;
}
/** Content / Announcement Card: a department or community update in a collection. */
export declare function AnnouncementCard({ tag, title, level, children, meta, href, linkLabel, demo, className }: AnnouncementCardProps): import("react").JSX.Element;

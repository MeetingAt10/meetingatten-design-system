import type { Lane } from '../lib/lanes.js';
export interface AnnouncementCardProps {
    /** Lane chip text (default "Announcement"). */
    tag?: string;
    /** Lane of the chip; department notices default to `schedule`. */
    lane?: Lane;
    /** Posted time, in words or a time code ("Mon 19 Oct · 09:00"). */
    when?: string;
    dateTime?: string;
    title: React.ReactNode;
    /** Heading level; default 3. */
    level?: 2 | 3 | 4;
    /** Short body text. */
    children?: React.ReactNode;
    /** Source line, for example "Community desk". */
    meta?: React.ReactNode;
    href?: string;
    linkLabel?: string;
    /** Labels synthetic content. */
    demo?: boolean;
    className?: string;
}
/** Announcement card: a department or community update in a collection. */
export declare function AnnouncementCard({ tag, lane, when, dateTime, title, level, children, meta, href, linkLabel, demo, className }: AnnouncementCardProps): import("react").JSX.Element;

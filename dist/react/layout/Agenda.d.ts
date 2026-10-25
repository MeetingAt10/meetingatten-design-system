import { type Lane } from '../lib/lanes.js';
export interface AgendaProps {
    children: React.ReactNode;
    className?: string;
}
/** Agenda: features or steps as ruled rows of a schedule, never a row of same-size icon cards. */
export declare function Agenda({ children, className }: AgendaProps): import("react").JSX.Element;
export interface AgendaItemProps {
    /** Chip text: a lane name or a time code ("Community", "10:00"). */
    chip: string;
    lane?: Lane;
    title: React.ReactNode;
    /** Heading level; default 3. */
    level?: 2 | 3 | 4;
    children?: React.ReactNode;
    href?: string;
    linkLabel?: string;
}
/** One agenda row: the lane chip, the title and text, and an optional link. */
export declare function AgendaItem({ chip, lane, title, level, children, href, linkLabel }: AgendaItemProps): import("react").JSX.Element;

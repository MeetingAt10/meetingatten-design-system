export interface SectionHeaderProps {
    /** Short mono label above the heading. */
    eyebrow?: React.ReactNode;
    title: React.ReactNode;
    /** Heading level; default 2 (use 1 when it heads the page). The visual size stays H1. */
    level?: 1 | 2 | 3;
    description?: React.ReactNode;
    /** Optional action, for example a Link or secondary Button. */
    action?: React.ReactNode;
    className?: string;
}
/** Section Header: eyebrow, heading, lead and optional action above a section. */
export declare function SectionHeader({ eyebrow, title, level, description, action, className }: SectionHeaderProps): import("react").JSX.Element;

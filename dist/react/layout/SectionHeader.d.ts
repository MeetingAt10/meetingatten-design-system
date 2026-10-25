export interface SectionHeaderProps {
    title: React.ReactNode;
    /** Heading level; default 2 (1 when it heads the page, which also sets the page-title size). */
    level?: 1 | 2 | 3;
    description?: React.ReactNode;
    /** Buttons or links; on the right from 768px when `split`. */
    actions?: React.ReactNode;
    split?: boolean;
    /** id of the heading, to name the section (`aria-labelledby`). */
    id?: string;
    className?: string;
}
/** Section header: the heading carries its own weight (no label above it), an optional description and actions. */
export declare function SectionHeader({ title, level, description, actions, split, id, className }: SectionHeaderProps): import("react").JSX.Element;

export interface EmptyStateProps {
    /** What is missing ("No consultations booked yet"). */
    title: React.ReactNode;
    /** Heading level; default 2. */
    level?: 2 | 3;
    /** Why it is empty, in plain words. */
    description?: React.ReactNode;
    /** One next step, for example a Button or Link. */
    action?: React.ReactNode;
    className?: string;
}
/** Empty state: nothing to show yet, with the reason and one next step. Open content, not a card. */
export declare function EmptyState({ title, level, description, action, className }: EmptyStateProps): import("react").JSX.Element;

export interface CaseEvent {
    title: React.ReactNode;
    /** Who acted, as a role ("Assigned reviewer"), never an inferred identity. */
    actor: React.ReactNode;
    body?: React.ReactNode;
    /** Displayed date. */
    date?: string;
    /** Machine-readable date for `<time>`. */
    dateTime?: string;
}
export interface CaseTimelineProps {
    /** Newest first; the newest event gets the filled marker. */
    events: CaseEvent[];
    /** Accessible name of the list. */
    label?: string;
    className?: string;
}
/** Data / Case Timeline: report events as an ordered list with actor roles and dates. */
export declare function CaseTimeline({ events, label, className }: CaseTimelineProps): import("react").JSX.Element;

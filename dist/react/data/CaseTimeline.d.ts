export type CaseEventState = 'done' | 'current' | 'pending' | 'restricted';
export interface CaseEvent {
    title: React.ReactNode;
    /** Who acted, as a role ("Assigned reviewer"), never an inferred identity. */
    actor?: React.ReactNode;
    body?: React.ReactNode;
    /** Displayed time code ("21 Oct 09:12"). */
    date?: string;
    /** Machine-readable date for `<time>`. */
    dateTime?: string;
    /** Marker line form; defaults to done. The current state carries the now-dot. */
    state?: CaseEventState;
}
export interface CaseTimelineProps {
    /** In order (oldest first). */
    events: CaseEvent[];
    /** Accessible name of the list. */
    label?: string;
    className?: string;
}
/** Case timeline: a record's history on a vertical time rule; solid through what happened, dashed into what is pending. */
export declare function CaseTimeline({ events, label, className }: CaseTimelineProps): import("react").JSX.Element;

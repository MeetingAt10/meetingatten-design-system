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
export function CaseTimeline({ events, label = 'Case activity', className }: CaseTimelineProps) {
  return (
    <ol className={['ds-timeline', className].filter(Boolean).join(' ')} aria-label={label}>
      {events.map((e, i) => (
        <li key={i}>
          <span className="ds-timeline__title">{e.title}</span>
          <span className="ds-timeline__actor">
            {e.actor}
            {e.date && <> · <time dateTime={e.dateTime}>{e.date}</time></>}
          </span>
          {e.body && <p className="ds-timeline__body">{e.body}</p>}
        </li>
      ))}
    </ol>
  );
}

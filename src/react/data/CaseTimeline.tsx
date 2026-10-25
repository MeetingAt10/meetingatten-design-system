import { cx } from '../lib/cx.js';

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

const STATE_WORDS: Record<CaseEventState, string> = { done: 'Done', current: 'Current', pending: 'Pending', restricted: 'Restricted step' };

/** Case timeline: a record's history on a vertical time rule; solid through what happened, dashed into what is pending. */
export function CaseTimeline({ events, label = 'Case activity', className }: CaseTimelineProps) {
  return (
    <ol className={cx('ds-timeline', className)} aria-label={label}>
      {events.map((e, i) => {
        const state = e.state ?? 'done';
        return (
          <li key={i} className={cx('ds-timeline__event', `ds-timeline__event--${state}`)} aria-current={state === 'current' ? 'step' : undefined}>
            <span className="ds-timeline__time">{e.date ? <time dateTime={e.dateTime}>{e.date}</time> : null}</span>
            <span className="ds-timeline__marker" aria-hidden="true" />
            <div className="ds-timeline__content">
              <p className="ds-timeline__title">{e.title}<span className="ds-visually-hidden"> ({STATE_WORDS[state]})</span></p>
              {e.body && <p className="ds-timeline__body">{e.body}</p>}
              {e.actor && <p className="ds-timeline__actor">{e.actor}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

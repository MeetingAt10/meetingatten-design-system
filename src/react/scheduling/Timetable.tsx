"use client";
import { useEffect, useId, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { TimeBlock, type BlockForm } from './TimeBlock.js';
import { NowLine, useNow, clockOf } from './NowLine.js';
import { spring } from '../lib/motion.js';
import type { Lane } from '../lib/lanes.js';
import type { IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface TimetableDay {
  id: string;
  /** Short weekday ("Mon"). */
  label: string;
  /** Day of the month ("19"). */
  date?: string;
  /** Full name for assistive tech ("Monday 19 October"). */
  fullLabel?: string;
  isToday?: boolean;
}

export interface TimetableEvent {
  id: string;
  /** The day's id. */
  day: string;
  /** Decimal hours (9.5 = 09:30). */
  start: number;
  end: number;
  title: string;
  /** Shown time code; defaults to "09:30-10:30". */
  time?: string;
  meta?: string;
  lane?: Lane;
  form?: BlockForm;
  stateLabel?: string;
  icon?: IconName;
  href?: string;
  onPress?: () => void;
  isSelected?: boolean;
}

export interface TimetableProps {
  /** Accessible name of the timetable ("This week, sample schedule"). */
  label: string;
  days: TimetableDay[];
  events: TimetableEvent[];
  /** First and last hour of the grid (default 8 to 17). */
  startHour?: number;
  endHour?: number;
  /** The now-line on today: `live` follows the clock (default), a number pins it (decimal hours), `false` hides it. */
  now?: 'live' | number | false;
  /** Hatched band under the grid, for the restricted lane ("Reports: you see only your own records"). */
  band?: React.ReactNode;
  /** Heading level of the day heads; default 3. */
  headingLevel?: 2 | 3 | 4;
  /** Hovering or choosing a block dims its neighbours one step (default true). */
  isolate?: boolean;
  /** Blocks drop into their cells on first paint and glide when the schedule changes (default true; off under reduced motion). */
  animate?: boolean;
  className?: string;
}

/** Concurrent events share the day's width: greedy columns per day. */
function columns(events: TimetableEvent[]) {
  const sorted = [...events].sort((a, b) => a.start - b.start || b.end - a.end);
  const placed = new Map<string, { col: number; cols: number }>();
  let cluster: TimetableEvent[] = [];
  let clusterEnd = -Infinity;
  const flush = () => {
    const lanes: number[] = [];
    const cols = new Map<string, number>();
    for (const e of cluster) {
      let c = lanes.findIndex((end) => end <= e.start);
      if (c === -1) c = lanes.length;
      lanes[c] = e.end;
      cols.set(e.id, c);
    }
    for (const e of cluster) placed.set(e.id, { col: cols.get(e.id)!, cols: lanes.length });
    cluster = [];
  };
  for (const e of sorted) {
    if (e.start >= clusterEnd && cluster.length) flush();
    cluster.push(e);
    clusterEnd = Math.max(clusterEnd, e.end);
  }
  if (cluster.length) flush();
  return placed;
}

/** Timetable: a ruled week (or day) sheet of time blocks, the now-line on today, and a hatched restricted band. Each day is a labeled section with its blocks in time order. */
export function Timetable({ label, days, events, startHour = 8, endHour = 17, now = 'live', band, headingLevel = 3, isolate = true, animate = true, className }: TimetableProps) {
  const uid = useId();
  const reduce = useReducedMotion();
  const live = useNow();
  const hours = endHour - startHour;
  const nowHours = now === false ? undefined : now === 'live' ? live : now;
  const showNow = nowHours !== undefined && nowHours >= startHour && nowHours <= endHour && days.some((d) => d.isToday);
  const H = `h${headingLevel}` as 'h2' | 'h3' | 'h4';
  // A visually hidden heading one level up, so the day heads never skip a level in the page outline.
  const Title = headingLevel >= 3 ? (`h${headingLevel - 1}` as 'h2' | 'h3') : undefined;
  const drop = animate && !reduce;
  const scroller = useRef<HTMLDivElement>(null);
  let order = 0;

  // When the week is wider than the screen, open it scrolled so today is the first visible day.
  useEffect(() => {
    const el = scroller.current;
    const today = el?.querySelector<HTMLElement>('.ds-timetable__day-head.is-today');
    if (!el || !today || el.scrollWidth <= el.clientWidth) return;
    const timeCol = el.querySelector<HTMLElement>('.ds-timetable__corner')?.offsetWidth ?? 0;
    el.scrollLeft = today.offsetLeft - timeCol;
  }, [days]);

  return (
    <div className={cx('ds-timetable', isolate && 'ds-isolate', className)} role="group" aria-labelledby={Title ? `${uid}-title` : undefined} aria-label={Title ? undefined : label} style={{ '--tt-hours': hours } as React.CSSProperties}>
      {Title && <Title id={`${uid}-title`} className="ds-visually-hidden">{label}</Title>}
      <div className="ds-timetable__scroller" ref={scroller}>
        <div className="ds-timetable__grid" style={{ '--tt-days': days.length } as React.CSSProperties}>
          <div className="ds-timetable__corner" aria-hidden="true" />
          {days.map((d) => (
            <H key={d.id} id={`${uid}-${d.id}`} className={cx('ds-timetable__day-head', d.isToday && 'is-today')} aria-label={d.fullLabel ? `${d.fullLabel}${d.isToday ? ', today' : ''}` : undefined}>
              <span className="ds-timetable__dow">{d.label}</span>
              {d.date && <span className="ds-timetable__date">{d.date}</span>}
            </H>
          ))}
          <div className="ds-timetable__hours" aria-hidden="true">
            {Array.from({ length: hours }, (_, i) => i).filter((i) => !showNow || Math.abs(startHour + i - nowHours!) > 0.4).map((i) => (
              <span key={i} style={{ '--h': i } as React.CSSProperties}>{clockOf(startHour + i)}</span>
            ))}
            {showNow && <span className="ds-timetable__now-time" style={{ '--now': nowHours! - startHour } as React.CSSProperties}>{clockOf(nowHours!)}</span>}
          </div>
          {days.map((d) => {
            const dayEvents = events.filter((e) => e.day === d.id).sort((a, b) => a.start - b.start);
            const cols = columns(dayEvents);
            return (
              <div key={d.id} role="group" className={cx("ds-timetable__day", d.isToday && "is-today")} aria-labelledby={`${uid}-${d.id}`}>
                <ol className="ds-timetable__events">
                  {dayEvents.map((e) => {
                    const c = cols.get(e.id)!;
                    const time = e.time ?? `${clockOf(e.start)}-${clockOf(e.end)}`;
                    const delay = order++ * 0.025;
                    return (
                      <motion.li
                        key={e.id}
                        layout={drop ? 'position' : false}
                        initial={drop ? { y: -6 } : false}
                        animate={{ y: 0 }}
                        transition={{ ...spring.snappy, delay }}
                        className="ds-timetable__event"
                        style={{ '--start': e.start - startHour, '--span': e.end - e.start, '--col': c.col, '--cols': c.cols } as React.CSSProperties}
                      >
                        <TimeBlock
                          time={time}
                          title={e.title}
                          meta={e.meta}
                          lane={e.lane}
                          form={e.form}
                          stateLabel={e.stateLabel}
                          icon={e.icon}
                          href={e.href}
                          onPress={e.onPress}
                          isSelected={e.isSelected}
                        />
                      </motion.li>
                    );
                  })}
                </ol>
                {d.isToday && showNow && <NowLine offset={nowHours! - startHour} />}
              </div>
            );
          })}
        </div>
      </div>
      {band && <div className="ds-timetable__band"><div className="ds-timetable__band-inner">{band}</div></div>}
    </div>
  );
}

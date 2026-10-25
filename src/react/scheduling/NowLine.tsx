"use client";
import { useEffect, useState } from 'react';
import { cx } from '../lib/cx.js';

/** Current local time as decimal hours (10:42 -> 10.7). */
export const hoursOf = (d: Date) => d.getHours() + d.getMinutes() / 60;
/** "10:42" in 24-hour time. */
export const clockOf = (hours: number) => {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return `${String(h + Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
};

/**
 * The live time as decimal hours, updated every 30 seconds. Starts as `undefined` and fills in after mount,
 * so server and client render the same markup.
 */
export function useNow(intervalMs = 30_000): number | undefined {
  const [now, setNow] = useState<number>();
  useEffect(() => {
    const tick = () => setNow(hoursOf(new Date()));
    tick();
    const id = window.setInterval(tick, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}

export interface NowLineProps {
  /** Hours since the grid's first hour (2.7 = 2h42m after the start). */
  offset: number;
  /** Time shown on the plate ("10:42"); omit to draw only the line and dot. */
  label?: string;
  className?: string;
}

/** Now-line: the present moment across a time grid (2px line, dot, and the time on a plate). Glides as time passes. Decorative: state the time in text where it matters. */
export function NowLine({ offset, label, className }: NowLineProps) {
  return (
    <div className={cx('ds-now', className)} style={{ '--now': offset } as React.CSSProperties} aria-hidden="true">
      {label && <span className="ds-now__label">{label}</span>}
    </div>
  );
}

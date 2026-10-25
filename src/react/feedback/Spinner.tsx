import { cx } from '../lib/cx.js';

export interface SpinnerProps {
  /** Announced as a status when set; omit inside a labeled control (a pending Button already announces). */
  label?: string;
  /** 16 (default), 20, 24 or 32px. */
  size?: 16 | 20 | 24 | 32;
  className?: string;
}

/** Spinner: a clock face whose hand sweeps, in currentColor. The hand rests under reduced motion. */
export function Spinner({ label, size = 16, className }: SpinnerProps) {
  const a11y = label ? { role: 'status', 'aria-label': label } : { 'aria-hidden': true };
  return <span className={cx('ds-spinner', size !== 16 && `ds-spinner--${size}`, className)} {...a11y} />;
}

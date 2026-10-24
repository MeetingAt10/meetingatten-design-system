import { cx } from '../lib/cx.js';

export interface SpinnerProps {
  /** Announced as a status when set; omit when the spinner sits inside a labeled control (for example a loading Button). */
  label?: string;
  className?: string;
}

/** Spinner, 16px, follows `currentColor`. Stops rotating under reduced motion. */
export function Spinner({ label, className }: SpinnerProps) {
  const a11y = label ? { role: 'status', 'aria-label': label } : { 'aria-hidden': true };
  return <span className={cx('ds-spinner', className)} {...a11y} />;
}

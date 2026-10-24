import { cx } from '../lib/cx.js';

export type BadgeTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'secondary' | 'accent';

export interface BadgeProps {
  /** Role badges stay neutral; status and severity use their own tones. Never color alone: the text carries the meaning. */
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}

/** Badge / Role, Status, Severity. */
export function Badge({ tone = 'neutral', className, children }: BadgeProps) {
  return <span className={cx('ds-badge', tone !== 'neutral' && `ds-badge--${tone}`, className)}>{children}</span>;
}

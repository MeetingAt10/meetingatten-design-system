import { cx } from '../lib/cx.js';

export type BadgeTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'community' | 'consult';
/** Line form of the status marker: solid = open/active, dashed = pending/draft, hatched = restricted/taken, struck = closed/withdrawn. */
export type BadgeForm = 'solid' | 'pending' | 'restricted' | 'taken' | 'closed';

export interface BadgeProps {
  /** Tone reinforces; the words and the marker's line form carry the meaning. */
  tone?: BadgeTone;
  /** Status marker form. Omit `marker` for a plain label chip. */
  form?: BadgeForm;
  /** Show the status marker (default true). */
  marker?: boolean;
  /** Outline instead of a tint (for example "Demo"). */
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** Status badge: a word plus a marker whose line form carries the state. */
export function Badge({ tone = 'neutral', form = 'solid', marker = true, outline, className, children }: BadgeProps) {
  return (
    <span className={cx('ds-badge', tone !== 'neutral' && `ds-badge--${tone}`, form !== 'solid' && `ds-badge--${form}`, outline && 'ds-badge--outline', className)}>
      {marker && <span className="ds-badge__mark" aria-hidden="true" />}
      {children}
    </span>
  );
}

export interface RoleBadgeProps {
  /** The role in words ("Student", "Faculty"). */
  children: React.ReactNode;
  className?: string;
}

/** Role badge: an outlined plate ("Student", "Faculty"). A role is not a permission or privacy signal. */
export function RoleBadge({ children, className }: RoleBadgeProps) {
  return <span className={cx('ds-badge ds-badge--role', className)}>{children}</span>;
}

export interface SeverityProps {
  level: 'low' | 'medium' | 'high';
  /** Defaults to the level in words ("High"). */
  children?: React.ReactNode;
  className?: string;
}

/** Severity: 1-3 filled segments plus the word. Its own family, independent of status. */
export function Severity({ level, children, className }: SeverityProps) {
  return (
    <span className={cx('ds-severity', `ds-severity--${level}`, className)}>
      <span className="ds-severity__bars" aria-hidden="true"><i /><i /><i /></span>
      {children ?? level[0].toUpperCase() + level.slice(1)}
    </span>
  );
}

import { cx } from '../lib/cx.js';

export interface DividerProps {
  /** Names what follows ("Today", "Earlier"); plain text between two drawn rules, so screen readers read it. */
  label?: string;
  /** `border-default` instead of the hairline. */
  strong?: boolean;
  vertical?: boolean;
  className?: string;
}

/** Divider: a hairline rule between sections (use instead of wrapping sections in cards). */
export function Divider({ label, strong, vertical, className }: DividerProps) {
  if (label) return <div className={cx('ds-divider ds-divider--label', className)}>{label}</div>;
  if (vertical) return <span role="separator" aria-orientation="vertical" className={cx('ds-divider ds-divider--vertical', className)} />;
  return <hr className={cx('ds-divider', strong && 'ds-divider--strong', className)} />;
}

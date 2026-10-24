import { cx } from '../lib/cx.js';

/** Divider: thin rule between sections of a detail page (use instead of wrapping sections in cards). */
export function Divider({ className }: { className?: string }) {
  return <hr className={cx('ds-divider', className)} />;
}

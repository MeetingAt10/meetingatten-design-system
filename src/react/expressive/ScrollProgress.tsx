import { cx } from '../lib/cx.js';

export interface ScrollProgressProps {
  className?: string;
}

/** ScrollProgress: a 2px bar across the top edge that fills as the page scrolls. Decorative; shown only where scroll-driven animation is supported and motion is allowed. */
export function ScrollProgress({ className }: ScrollProgressProps) {
  return <div className={cx('ds-scroll-progress', className)} aria-hidden="true" />;
}

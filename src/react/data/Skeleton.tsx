import { cx } from '../lib/cx.js';

export interface SkeletonProps {
  /** 30% width line instead of full width. */
  short?: boolean;
  className?: string;
}

/** Skeleton line for loading views. Decorative: mark the loading region itself with `aria-busy` and a text status. */
export function Skeleton({ short, className }: SkeletonProps) {
  return <span className={cx('ds-skeleton', short && 'ds-skeleton--short', className)} aria-hidden="true" />;
}

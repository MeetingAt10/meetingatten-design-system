import { cx } from '../lib/cx.js';

export interface HighlightProps {
  /** `mark` yellow (default), or a lane wash. */
  tone?: 'mark' | 'community' | 'consult' | 'schedule';
  /** Only the lower part of the line, for display headlines. */
  under?: boolean;
  children: React.ReactNode;
  className?: string;
}

/** Highlight: a highlighter stroke behind the words that matter; it swipes in from the left once. */
export function Highlight({ tone = 'mark', under, children, className }: HighlightProps) {
  return <mark className={cx('ds-highlight', tone !== 'mark' && `ds-highlight--${tone}`, under && 'ds-highlight--under', className)}>{children}</mark>;
}

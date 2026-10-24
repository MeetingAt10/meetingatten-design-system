import { cx } from '../lib/cx.js';

export interface WashProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Wash: decorative token washes (accent, secondary, info fading to transparent) behind its children. */
export function Wash({ className, ...rest }: WashProps) {
  return <div {...rest} className={cx('ds-wash', className)} />;
}

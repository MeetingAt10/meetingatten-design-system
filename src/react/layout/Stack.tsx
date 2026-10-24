import { cx } from '../lib/cx.js';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Vertical gap in px. */
  gap?: 16 | 24 | 32;
}

/** Stack: vertical rhythm with a fixed gap. */
export function Stack({ gap = 16, className, ...rest }: StackProps) {
  return <div {...rest} className={cx('ds-stack', gap !== 16 && `ds-stack--${gap}`, className)} />;
}

import { cx } from '../lib/cx.js';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Vertical gap in px, on the 8px rhythm. */
  gap?: 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48;
}

/** Stack: vertical rhythm with one gap. */
export function Stack({ gap = 16, className, ...rest }: StackProps) {
  return <div {...rest} className={cx('ds-stack', gap !== 16 && `ds-stack--${gap}`, className)} />;
}

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 8 | 12 | 16;
  /** `between` pushes the ends apart, `end` aligns to the end. */
  justify?: 'start' | 'between' | 'end';
}

/** Row: a wrapping horizontal group (buttons, chips, meta). */
export function Row({ gap = 12, justify = 'start', className, ...rest }: RowProps) {
  return <div {...rest} className={cx('ds-row', gap !== 12 && `ds-row--${gap}`, justify !== 'start' && `ds-row--${justify}`, className)} />;
}

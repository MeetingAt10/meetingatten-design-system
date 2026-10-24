import { cx } from '../lib/cx.js';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 2 equal columns from 600px; 3 from 1024px; `main` = 2fr + 1fr from 1024px. One column on mobile. */
  columns?: 2 | 3 | 'main';
}

/** Grid: responsive columns on the layout gutters. Task order is kept when columns stack. */
export function Grid({ columns = 2, className, ...rest }: GridProps) {
  return <div {...rest} className={cx('ds-cols', columns === 3 && 'ds-cols--3', columns === 'main' && 'ds-cols--main', className)} />;
}

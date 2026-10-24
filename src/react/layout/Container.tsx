import { cx } from '../lib/cx.js';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render. */
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article';
}

/** Container: centered content column (max 1200px) with the grid margins for each breakpoint. */
export function Container({ as: Tag = 'div', className, ...rest }: ContainerProps) {
  return <Tag {...rest} className={cx('ds-container', className)} />;
}

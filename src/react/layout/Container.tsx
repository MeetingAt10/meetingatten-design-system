import { cx } from '../lib/cx.js';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render. */
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article';
  /** `content` 1200px (default), `reading` 680px, `wide` 1440px. */
  width?: 'content' | 'reading' | 'wide';
}

/** Container: the centered content column with the grid margins for each breakpoint. */
export function Container({ as: Tag = 'div', width = 'content', className, ...rest }: ContainerProps) {
  return <Tag {...rest} className={cx('ds-container', width !== 'content' && `ds-container--${width}`, className)} />;
}

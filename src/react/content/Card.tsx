import { cx } from '../lib/cx.js';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render; `article` for collection items. */
  as?: 'article' | 'div' | 'section' | 'li';
  /** Floating panel (overlay shadow), for example a sign-in panel over a wash. */
  overlay?: boolean;
}

/**
 * Card: only for items in a collection (announcements, posts, records) and floating panels.
 * Never put a card inside a card; use open sections with headings and Divider for detail pages.
 */
export function Card({ as: Tag = 'article', overlay, className, ...rest }: CardProps) {
  return <Tag {...rest} className={cx('ds-card', overlay && 'ds-card--overlay', className)} />;
}

/** Card header row: badge or tag on the left, meta on the right. */
export function CardHeader({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} className={cx('ds-card__head', className)} />;
}

/** Card meta row: author, counts and the card's link. */
export function CardMeta({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} className={cx('ds-card__meta', className)} />;
}

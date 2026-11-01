"use client";
import { Link as AriaLink } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { laneClass, type Lane } from '../lib/lanes.js';
import { cx } from '../lib/cx.js';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render; `article` for collection items (default), `li` inside a list. */
  as?: 'article' | 'div' | 'section' | 'li';
  /** Floating panel (overlay shadow, no rule), for example a sign-in panel. */
  overlay?: boolean;
  /** The whole card is one link: put a CardTitle with `href` inside. Lifts on hover. */
  link?: boolean;
  /** No padding (media, tables). */
  flush?: boolean;
  /** Surface treatment: `sheet` is a raised paper card (default), `tint` is flat on the neutral tint with a hairline, `open` has no surface, only a top rule. */
  variant?: 'sheet' | 'tint' | 'open';
}

/**
 * Card: one item in a collection (announcement, post, record) or a floating panel. Raised paper by default;
 * `variant` swaps in a flat tint or an open, rule-only treatment. Never put a card inside a card.
 */
export function Card({ as: Tag = 'article', overlay, link, flush, variant = 'sheet', className, ...rest }: CardProps) {
  return <Tag {...rest} className={cx('ds-card', variant !== 'sheet' && `ds-card--${variant}`, overlay && 'ds-card--overlay', link && 'ds-card--link', flush && 'ds-card--flush', className)} />;
}

/** Card header row: the lane chip and time on the left, meta on the right. */
export function CardHeader({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} className={cx('ds-card__head', className)} />;
}

/** Lane chip: a small solid block naming the lane ("Announcement", "Algorithms"). A topic, never a permission or confidentiality signal. */
export function CardLane({ lane, children }: { lane?: Lane; children: React.ReactNode }) {
  return <span className={cx('ds-card__lane', laneClass('ds-card__lane', lane))}>{children}</span>;
}

/** Time or reference in tabular mono ("Mon 19 Oct · 09:00", "CCS-2026-0142"). */
export function CardWhen({ children, dateTime }: { children: React.ReactNode; dateTime?: string }) {
  return <time className="ds-card__when" dateTime={dateTime}>{children}</time>;
}

export interface CardTitleProps {
  /** Heading level; default 3. */
  level?: 2 | 3 | 4;
  /** Makes the title the card's link; its hit area covers the card (pair with `<Card link>`). */
  href?: string;
  children: React.ReactNode;
}

/** Card title. With `href` the title link stretches over the whole card, so the card is named by its title alone. */
export function CardTitle({ level = 3, href, children }: CardTitleProps) {
  const H = `h${level}` as 'h2' | 'h3' | 'h4';
  return <H className="ds-card__title">{href ? <AriaLink href={href} className="ds-card__link">{children}</AriaLink> : children}</H>;
}

/** Card body text. */
export function CardBody({ className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...rest} className={cx('ds-card__body', className)} />;
}

/** Card meta row (ruled): author, counts, status, and the card's call to action on the right. */
export function CardMeta({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} className={cx('ds-card__meta', className)} />;
}

/** The visual call to action of a linked card ("Join the conversation"); the title link already does the navigating. */
export function CardAction({ children }: { children: React.ReactNode }) {
  return <span className="ds-card__action" aria-hidden="true">{children}<Icon name="arrow-right" size={16} /></span>;
}

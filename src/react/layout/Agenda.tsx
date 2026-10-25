import { Link } from '../navigation/Link.js';
import { laneClass, type Lane } from '../lib/lanes.js';
import { cx } from '../lib/cx.js';

export interface AgendaProps {
  children: React.ReactNode;
  className?: string;
}

/** Agenda: features or steps as ruled rows of a schedule, never a row of same-size icon cards. */
export function Agenda({ children, className }: AgendaProps) {
  return <ol className={cx('ds-agenda', className)}>{children}</ol>;
}

export interface AgendaItemProps {
  /** Chip text: a lane name or a time code ("Community", "10:00"). */
  chip: string;
  lane?: Lane;
  title: React.ReactNode;
  /** Heading level; default 3. */
  level?: 2 | 3 | 4;
  children?: React.ReactNode;
  href?: string;
  linkLabel?: string;
}

/** One agenda row: the lane chip, the title and text, and an optional link. */
export function AgendaItem({ chip, lane, title, level = 3, children, href, linkLabel = 'Learn more' }: AgendaItemProps) {
  const H = `h${level}` as 'h2' | 'h3' | 'h4';
  return (
    <li className="ds-agenda__item">
      <span className={cx('ds-agenda__chip', laneClass('ds-agenda__chip', lane))}>{chip}</span>
      <div className="ds-agenda__text">
        <H className="ds-agenda__title">{title}</H>
        {children && <p className="ds-agenda__body">{children}</p>}
      </div>
      {href ? <Link href={href} variant="standalone" className="ds-agenda__action">{linkLabel}</Link> : <span />}
    </li>
  );
}

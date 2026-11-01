import { Card, CardHeader, CardLane, CardWhen, CardTitle, CardBody, CardMeta } from './Card.js';
import { Link } from '../navigation/Link.js';
import type { Lane } from '../lib/lanes.js';

export interface AnnouncementCardProps {
  /** Lane chip text (default "Announcement"). */
  tag?: string;
  /** Lane of the chip; department notices default to `schedule`. */
  lane?: Lane;
  /** Posted time, in words or a time code ("Mon 19 Oct · 09:00"). */
  when?: string;
  dateTime?: string;
  title: React.ReactNode;
  /** Heading level; default 3. */
  level?: 2 | 3 | 4;
  /** Short body text. */
  children?: React.ReactNode;
  /** Source line, for example "Community desk". */
  meta?: React.ReactNode;
  href?: string;
  linkLabel?: string;
  /** @deprecated Accepted for compatibility; renders nothing. */
  demo?: boolean;
  className?: string;
}

/** Announcement card: a department or community update in a collection. */
export function AnnouncementCard({ tag = 'Announcement', lane = 'schedule', when, dateTime, title, level = 3, children, meta, href, linkLabel = 'Read update', className }: AnnouncementCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <span className="ds-card__lead">
          <CardLane lane={lane}>{tag}</CardLane>
          {when && <CardWhen dateTime={dateTime}>{when}</CardWhen>}
        </span>
      </CardHeader>
      <CardTitle level={level}>{title}</CardTitle>
      {children && <CardBody>{children}</CardBody>}
      {(meta || href) && (
        <CardMeta>
          {meta && <span>{meta}</span>}
          {href && <Link href={href} variant="standalone" className="ds-card__action">{linkLabel}<span className="ds-visually-hidden">: {title}</span></Link>}
        </CardMeta>
      )}
    </Card>
  );
}

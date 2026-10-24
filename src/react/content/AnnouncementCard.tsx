import { Card, CardHeader, CardMeta } from './Card.js';
import { Badge } from '../badge/Badge.js';
import { Link } from '../navigation/Link.js';
import { Icon } from '../icon/Icon.js';

export interface AnnouncementCardProps {
  /** Tag chip text. */
  tag?: string;
  title: React.ReactNode;
  /** Heading level; default 3. */
  level?: 2 | 3 | 4;
  /** Short body text. */
  children?: React.ReactNode;
  /** Source line, for example "Community desk · illustrative". */
  meta?: React.ReactNode;
  href?: string;
  linkLabel?: string;
  /** Labels synthetic content with a "Demo" tag. */
  demo?: boolean;
  className?: string;
}

/** Content / Announcement Card: a department or community update in a collection. */
export function AnnouncementCard({ tag = 'Announcement', title, level = 3, children, meta, href, linkLabel = 'Read update', demo, className }: AnnouncementCardProps) {
  const H = `h${level}` as 'h2' | 'h3' | 'h4';
  return (
    <Card className={className}>
      <CardHeader>
        <Badge tone="info">{tag}</Badge>
        {demo && <span className="ds-tag-mono">Demo</span>}
      </CardHeader>
      <H className="ds-type-h3">{title}</H>
      {children && <p className="ds-type-body" style={{ margin: 0 }}>{children}</p>}
      {(meta || href) && (
        <CardMeta>
          {meta && <span>{meta}</span>}
          {href && <Link href={href}>{linkLabel} <Icon name="chevron" size={16} /></Link>}
        </CardMeta>
      )}
    </Card>
  );
}

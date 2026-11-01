import { Card, CardHeader, CardLane, CardTitle, CardBody, CardMeta, CardAction } from './Card.js';
import { Avatar } from './Avatar.js';
import { Icon } from '../icon/Icon.js';

export interface ForumCardProps {
  /** Topic chip. A topic, never a permission or confidentiality signal. */
  topic: string;
  title: React.ReactNode;
  /** Heading level; default 3. */
  level?: 2 | 3 | 4;
  /** Short excerpt. Never names, identifiers or restricted report content. */
  excerpt?: React.ReactNode;
  author?: string;
  replies?: number;
  /** For example "Open discussion". */
  status?: string;
  href: string;
  /** Visual call to action at the bottom. */
  actionLabel?: string;
  /** @deprecated Accepted for compatibility; renders nothing. */
  demo?: boolean;
  className?: string;
}

/** Forum card: a community discussion. The title is the link and its hit area covers the card, which lifts on hover. */
export function ForumCard({ topic, title, level = 3, excerpt, author, replies, status, href, actionLabel = 'Join the conversation', className }: ForumCardProps) {
  return (
    <Card link className={className}>
      <CardHeader>
        <CardLane lane="community">{topic}</CardLane>
      </CardHeader>
      <CardTitle level={level} href={href}>{title}</CardTitle>
      {excerpt && <CardBody>{excerpt}</CardBody>}
      <CardMeta>
        {author && <span className="ds-card__stat"><Avatar name={author} size={24} lane="community" decorative />{author}</span>}
        {replies !== undefined && (
          <span className="ds-card__stat"><Icon name="chat" size={16} />{replies} {replies === 1 ? 'reply' : 'replies'}</span>
        )}
        {status && <span>{status}</span>}
        <CardAction>{actionLabel}</CardAction>
      </CardMeta>
    </Card>
  );
}

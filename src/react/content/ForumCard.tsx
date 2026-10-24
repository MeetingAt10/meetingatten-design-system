"use client";
import { Link as AriaLink } from 'react-aria-components';
import { Card, CardHeader, CardMeta } from './Card.js';
import { Badge } from '../badge/Badge.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface ForumCardProps {
  /** Topic chip (accent). A topic, never a permission or confidentiality signal. */
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
  demo?: boolean;
  className?: string;
}

/** Content / Forum Card: a community discussion. The title is the link and its hit area covers the card, which lifts on hover. */
export function ForumCard({ topic, title, level = 3, excerpt, author, replies, status, href, actionLabel = 'Join the conversation', demo, className }: ForumCardProps) {
  const H = `h${level}` as 'h2' | 'h3' | 'h4';
  const meta = [author, replies !== undefined ? `${replies} ${replies === 1 ? 'reply' : 'replies'}` : undefined, status].filter(Boolean).join(' · ');
  return (
    <Card className={cx('ds-card--link', className)}>
      <CardHeader>
        <Badge tone="accent">{topic}</Badge>
        {demo && <span className="ds-tag-mono">Demo</span>}
      </CardHeader>
      <H className="ds-type-h3"><AriaLink href={href} className="ds-card__link">{title}</AriaLink></H>
      {excerpt && <p className="ds-type-body" style={{ margin: 0 }}>{excerpt}</p>}
      {meta && <CardMeta>{meta}</CardMeta>}
      <span className="ds-card__action" aria-hidden="true">{actionLabel}<Icon name="chevron" size={16} /></span>
    </Card>
  );
}

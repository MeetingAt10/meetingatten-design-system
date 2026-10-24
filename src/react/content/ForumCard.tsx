"use client";
import { useId } from 'react';
import { CardHeader, CardMeta } from './Card.js';
import { CardLink } from './CardLink.js';
import { Badge } from '../badge/Badge.js';
import { Icon } from '../icon/Icon.js';

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

/** Content / Forum Card: a community discussion; the whole card opens the thread and is named by its title. */
export function ForumCard({ topic, title, level = 3, excerpt, author, replies, status, href, actionLabel = 'Join the conversation', demo, className }: ForumCardProps) {
  const titleId = useId();
  const H = `h${level}` as 'h2' | 'h3' | 'h4';
  const meta = [author, replies !== undefined ? `${replies} ${replies === 1 ? 'reply' : 'replies'}` : undefined, status].filter(Boolean).join(' · ');
  return (
    <CardLink href={href} aria-labelledby={titleId} className={className}>
      <CardHeader>
        <Badge tone="accent">{topic}</Badge>
        {demo && <span className="ds-tag-mono">Demo</span>}
      </CardHeader>
      <H id={titleId} className="ds-type-h3">{title}</H>
      {excerpt && <p className="ds-type-body" style={{ margin: 0 }}>{excerpt}</p>}
      {meta && <CardMeta>{meta}</CardMeta>}
      <span className="ds-card__action" aria-hidden="true">{actionLabel}<Icon name="chevron" size={16} /></span>
    </CardLink>
  );
}

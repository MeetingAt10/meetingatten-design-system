"use client";
import { useId } from 'react';
import { Icon } from '../icon/Icon.js';

export interface PrivacyNoticeProps {
  title: string;
  /** Heading level; default 2. */
  level?: 2 | 3;
  /** Keep permission and identity visibility as separate statements; restricted access does not mean anonymous. */
  children: React.ReactNode;
  /** Footnote, for example "Sensitive submission is disabled until scope and policy are confirmed." */
  foot?: React.ReactNode;
  className?: string;
}

/** Feedback / Privacy Notice: durable policy text on report pages; never hidden in tooltips. */
export function PrivacyNotice({ title, level = 2, children, foot, className }: PrivacyNoticeProps) {
  const id = useId();
  const H = level === 3 ? 'h3' : 'h2';
  return (
    <aside className={['ds-notice', className].filter(Boolean).join(' ')} aria-labelledby={id}>
      <H id={id} className="ds-notice__title"><Icon name="lock" size={16} />{title}</H>
      <p>{children}</p>
      {foot && <p className="ds-notice__foot">{foot}</p>}
    </aside>
  );
}

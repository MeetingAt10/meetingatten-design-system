"use client";
import { useId } from 'react';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface PrivacyNoticeProps {
  /** The restriction, named plainly ("Restricted record"). */
  title: string;
  /** Heading level; default 2. */
  level?: 2 | 3;
  /** What is known and what is not promised. Keep permission and identity visibility as separate statements; restricted access does not mean anonymous. */
  children: React.ReactNode;
  /** Footnote, for example "Submission is disabled until recipients and access rules are confirmed." */
  foot?: React.ReactNode;
  className?: string;
}

/** Privacy notice: the boundary, stated on the page (never in a tooltip). A hatched band with a lock; neutral ink, no hue. */
export function PrivacyNotice({ title, level = 2, children, foot, className }: PrivacyNoticeProps) {
  const id = useId();
  const H = level === 3 ? 'h3' : 'h2';
  return (
    <section className={cx('ds-privacy', className)} aria-labelledby={id}>
      <header className="ds-privacy__band">
        <span className="ds-privacy__lock" aria-hidden="true"><Icon name="lock" size={16} weight="fill" /></span>
        <H id={id} className="ds-privacy__title">{title}</H>
      </header>
      <div className="ds-privacy__body">{typeof children === 'string' ? <p>{children}</p> : children}</div>
      {foot && <p className="ds-privacy__foot">{foot}</p>}
    </section>
  );
}

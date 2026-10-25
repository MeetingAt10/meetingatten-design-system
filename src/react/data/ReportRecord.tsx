"use client";
import { useId } from 'react';
import { Link } from '../navigation/Link.js';
import { Badge, type BadgeTone, type BadgeForm } from '../badge/Badge.js';
import { cx } from '../lib/cx.js';

export interface ReportRecordProps {
  reference: string;
  /** Short neutral title ("General concern"). Never sensitive preview text. */
  title?: string;
  /** In words, for example "Review pending". */
  status: string;
  statusTone?: BadgeTone;
  statusForm?: BadgeForm;
  /** Label and value pairs, for example Updated: 21 Oct. */
  facts: Array<{ label: string; value: string }>;
  /** Heading level; default 3. */
  level?: 2 | 3 | 4;
  href?: string;
  actionLabel?: string;
  className?: string;
}

/** Report record: one restricted record as a ruled row (the phone form of the Reports Table). */
export function ReportRecord({ reference, title, status, statusTone = 'neutral', statusForm = 'solid', facts, level = 3, href, actionLabel = 'View record', className }: ReportRecordProps) {
  const id = useId();
  const H = `h${level}` as 'h2' | 'h3' | 'h4';
  return (
    <article className={cx('ds-record', className)} aria-labelledby={id}>
      <header className="ds-record__head">
        <span className="ds-record__ref">{reference}</span>
        <Badge tone={statusTone} form={statusForm}>{status}</Badge>
      </header>
      <H id={id} className="ds-record__title">{title ?? reference}</H>
      <dl className="ds-record__facts">
        {facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
      </dl>
      {href && <Link href={href} variant="standalone" className="ds-record__action" aria-label={`${actionLabel} ${reference}`}>{actionLabel}</Link>}
    </article>
  );
}

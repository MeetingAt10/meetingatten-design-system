"use client";
import { useId } from 'react';
import { Link as AriaLink } from 'react-aria-components';
import { Badge, type BadgeTone } from '../badge/Badge.js';

export interface ReportRecordProps {
  reference: string;
  /** In words, for example "Draft · policy gate". */
  status: string;
  statusTone?: BadgeTone;
  /** Label and value pairs, for example Category: General concern. Never sensitive preview text. */
  facts: Array<{ label: string; value: string }>;
  /** Heading level; default 3. */
  level?: 2 | 3 | 4;
  href?: string;
  actionLabel?: string;
  className?: string;
}

/** Data / Report Record: one report as a labeled record (the mobile form of the Reports Table). */
export function ReportRecord({ reference, status, statusTone = 'warning', facts, level = 3, href, actionLabel = 'View', className }: ReportRecordProps) {
  const id = useId();
  const H = `h${level}` as 'h2' | 'h3' | 'h4';
  return (
    <article className={['ds-record', className].filter(Boolean).join(' ')} aria-labelledby={id}>
      <div className="ds-row" style={{ justifyContent: 'space-between' }}>
        <H id={id} className="ds-type-h3 ds-mono" style={{ margin: 0 }}>{reference}</H>
        <Badge tone={statusTone}>{status}</Badge>
      </div>
      <dl className="ds-record__facts">
        {facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
      </dl>
      {href && <AriaLink href={href} className="ds-btn ds-btn--secondary ds-btn--block" aria-label={`${actionLabel} ${reference}`}>{actionLabel}</AriaLink>}
    </article>
  );
}

"use client";
import { useId } from 'react';
import { Link } from '../navigation/Link.js';
import { Badge, type BadgeTone, type BadgeForm } from '../badge/Badge.js';
import { cx } from '../lib/cx.js';

export interface ReportRow {
  id: string;
  /** Tabular mono; the row header. */
  reference: string;
  category: string;
  /** In words, for example "Review pending". */
  status: string;
  statusTone?: BadgeTone;
  /** Line form of the status marker (pending, restricted, closed...). */
  statusForm?: BadgeForm;
  /** Last update, in words ("21 Oct"). */
  updated?: string;
  href?: string;
  actionLabel?: string;
}

export interface ReportsTableProps {
  caption: string;
  rows: ReportRow[];
  /** Text when there are no rows. */
  emptyMessage?: string;
  className?: string;
}

/** Reports table: own or assigned reports on a ruled sheet. On phones, show ReportRecord rows instead. */
export function ReportsTable({ caption, rows, emptyMessage = 'No reports yet.', className }: ReportsTableProps) {
  const captionId = useId();
  const hasUpdated = rows.some((r) => r.updated);
  const cols = hasUpdated ? 5 : 4;
  // A focusable, named region, so keyboard users can scroll the table when it overflows.
  return (
    <div className={cx('ds-table-wrap', className)} role="region" aria-labelledby={captionId} tabIndex={0}>
      <table className="ds-table">
        <caption id={captionId}>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Reference</th><th scope="col">Category</th><th scope="col">Status</th>
            {hasUpdated && <th scope="col">Updated</th>}
            <th scope="col" className="ds-table__actions">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={cols} className="ds-table__empty">{emptyMessage}</td></tr>
          ) : (
            rows.map((r) => (
              <tr key={r.id}>
                <th scope="row"><span className="ds-table__ref">{r.reference}</span></th>
                <td>{r.category}</td>
                <td><Badge tone={r.statusTone ?? 'neutral'} form={r.statusForm}>{r.status}</Badge></td>
                {hasUpdated && <td>{r.updated}</td>}
                <td className="ds-table__actions">
                  {r.href && <Link href={r.href} variant="standalone" aria-label={`${r.actionLabel ?? 'View'} ${r.reference}`}>{r.actionLabel ?? 'View'}</Link>}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

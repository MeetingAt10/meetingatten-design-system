import { Link } from '../navigation/Link.js';

export interface ReportRow {
  id: string;
  /** Shown in mono and used as the row header. */
  reference: string;
  category: string;
  /** In words, for example "Draft · policy gate". */
  status: string;
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

/** Data / Reports Table: own or assigned reports. On mobile, show ReportRecord cards instead. */
export function ReportsTable({ caption, rows, emptyMessage = 'No reports yet.', className }: ReportsTableProps) {
  return (
    <div className={['ds-table-wrap', className].filter(Boolean).join(' ')}>
      <table className="ds-table">
        <caption>{caption}</caption>
        <thead>
          <tr><th scope="col">Reference</th><th scope="col">Category</th><th scope="col">Status</th><th scope="col">Action</th></tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={4}>{emptyMessage}</td></tr>
          ) : (
            rows.map((r) => (
              <tr key={r.id}>
                <th scope="row">{r.reference}</th>
                <td>{r.category}</td>
                <td>{r.status}</td>
                <td>{r.href && <Link href={r.href} aria-label={`${r.actionLabel ?? 'View'} ${r.reference}`}>{r.actionLabel ?? 'View'}</Link>}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

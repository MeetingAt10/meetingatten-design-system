import { type BadgeTone, type BadgeForm } from '../badge/Badge.js';
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
export declare function ReportsTable({ caption, rows, emptyMessage, className }: ReportsTableProps): import("react").JSX.Element;

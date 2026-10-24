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
export declare function ReportsTable({ caption, rows, emptyMessage, className }: ReportsTableProps): import("react").JSX.Element;

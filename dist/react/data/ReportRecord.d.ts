import { type BadgeTone } from '../badge/Badge.js';
export interface ReportRecordProps {
    reference: string;
    /** In words, for example "Draft · policy gate". */
    status: string;
    statusTone?: BadgeTone;
    /** Label and value pairs, for example Category: General concern. Never sensitive preview text. */
    facts: Array<{
        label: string;
        value: string;
    }>;
    /** Heading level; default 3. */
    level?: 2 | 3 | 4;
    href?: string;
    actionLabel?: string;
    className?: string;
}
/** Data / Report Record: one report as a labeled record (the mobile form of the Reports Table). */
export declare function ReportRecord({ reference, status, statusTone, facts, level, href, actionLabel, className }: ReportRecordProps): import("react").JSX.Element;

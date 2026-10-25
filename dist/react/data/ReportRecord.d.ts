import { type BadgeTone, type BadgeForm } from '../badge/Badge.js';
export interface ReportRecordProps {
    reference: string;
    /** Short neutral title ("General concern"). Never sensitive preview text. */
    title?: string;
    /** In words, for example "Review pending". */
    status: string;
    statusTone?: BadgeTone;
    statusForm?: BadgeForm;
    /** Label and value pairs, for example Updated: 21 Oct. */
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
/** Report record: one restricted record as a ruled row (the phone form of the Reports Table). */
export declare function ReportRecord({ reference, title, status, statusTone, statusForm, facts, level, href, actionLabel, className }: ReportRecordProps): import("react").JSX.Element;

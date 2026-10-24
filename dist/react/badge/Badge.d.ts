export type BadgeTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'secondary' | 'accent';
export interface BadgeProps {
    /** Role badges stay neutral; status and severity use their own tones. Never color alone: the text carries the meaning. */
    tone?: BadgeTone;
    className?: string;
    children: React.ReactNode;
}
/** Badge / Role, Status, Severity. */
export declare function Badge({ tone, className, children }: BadgeProps): import("react").JSX.Element;

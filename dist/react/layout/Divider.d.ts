export interface DividerProps {
    /** Names what follows ("Today", "Earlier"); plain text between two drawn rules, so screen readers read it. */
    label?: string;
    /** `border-default` instead of the hairline. */
    strong?: boolean;
    vertical?: boolean;
    className?: string;
}
/** Divider: a hairline rule between sections (use instead of wrapping sections in cards). */
export declare function Divider({ label, strong, vertical, className }: DividerProps): import("react").JSX.Element;

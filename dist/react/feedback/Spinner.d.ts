export interface SpinnerProps {
    /** Announced as a status when set; omit inside a labeled control (a pending Button already announces). */
    label?: string;
    /** 16 (default), 20, 24 or 32px. */
    size?: 16 | 20 | 24 | 32;
    className?: string;
}
/** Spinner: a clock face whose hand sweeps, in currentColor. The hand rests under reduced motion. */
export declare function Spinner({ label, size, className }: SpinnerProps): import("react").JSX.Element;

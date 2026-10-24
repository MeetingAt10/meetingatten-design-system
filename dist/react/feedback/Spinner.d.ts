export interface SpinnerProps {
    /** Announced as a status when set; omit when the spinner sits inside a labeled control (for example a loading Button). */
    label?: string;
    className?: string;
}
/** Spinner, 16px, follows `currentColor`. Stops rotating under reduced motion. */
export declare function Spinner({ label, className }: SpinnerProps): import("react").JSX.Element;

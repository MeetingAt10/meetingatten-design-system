/** Current local time as decimal hours (10:42 -> 10.7). */
export declare const hoursOf: (d: Date) => number;
/** "10:42" in 24-hour time. */
export declare const clockOf: (hours: number) => string;
/**
 * The live time as decimal hours, updated every 30 seconds. Starts as `undefined` and fills in after mount,
 * so server and client render the same markup.
 */
export declare function useNow(intervalMs?: number): number | undefined;
export interface NowLineProps {
    /** Hours since the grid's first hour (2.7 = 2h42m after the start). */
    offset: number;
    /** Time shown on the plate ("10:42"); omit to draw only the line and dot. */
    label?: string;
    className?: string;
}
/** Now-line: the present moment across a time grid (2px line, dot, and the time on a plate). Glides as time passes. Decorative: state the time in text where it matters. */
export declare function NowLine({ offset, label, className }: NowLineProps): import("react").JSX.Element;

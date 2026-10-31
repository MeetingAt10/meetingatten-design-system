export interface CountUpProps {
    value: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}
/** CountUp: a number that rolls up from 0 when it scrolls into view. The final value is always in the text for screen readers and no-JS; it shows at once under reduced motion. */
export declare function CountUp({ value, prefix, suffix, className }: CountUpProps): import("react").JSX.Element;

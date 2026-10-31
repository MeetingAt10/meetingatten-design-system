export interface MarqueeProps {
    /** The items of one lap (short labels, badges). Do not use ids in them: they are rendered twice. */
    children: React.ReactNode;
    /** Slide the other way. */
    reverse?: boolean;
    /** Seconds for one lap; default 48. */
    duration?: number;
    /** Accessible name; makes the marquee a labeled region. Leave out when it is only decoration. */
    label?: string;
    className?: string;
}
/** Marquee: an endless slow line of items. The second copy is hidden from assistive technology and inert. Pauses on hover and focus; static and wrapped under reduced motion. */
export declare function Marquee({ children, reverse, duration, label, className }: MarqueeProps): import("react").JSX.Element;

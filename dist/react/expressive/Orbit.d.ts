export interface OrbitProps {
    /** Items placed evenly around the ring, the first at the top. Keep them non-interactive: the ring turns. */
    items: React.ReactNode[];
    /** Radius of the ring in px; default 140. The component is twice this wide. */
    radius?: number;
    className?: string;
    /** The center. */
    children?: React.ReactNode;
}
/** Orbit: items on a dashed hairline ring that turns slowly while every item stays upright. Still under reduced motion. */
export declare function Orbit({ items, radius, className, children }: OrbitProps): import("react").JSX.Element;

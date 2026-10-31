export interface ParallaxProps extends React.HTMLAttributes<HTMLElement> {
    /** Element to render; default `div`. */
    as?: 'div' | 'section' | 'figure' | 'span';
    /** Travel in px each way while it crosses the viewport (negative moves with the scroll). Default 40. */
    depth?: number;
}
/** Parallax: drifts against the scroll while it crosses the viewport. Static where scroll-driven animation is unsupported or motion is reduced. */
export declare function Parallax({ as: Tag, depth, className, style, ...rest }: ParallaxProps): import("react").JSX.Element;

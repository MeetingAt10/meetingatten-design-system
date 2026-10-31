export interface FloatingArtProps {
    /** Image URL, usually one of the package renders: `@meetingat10/design-system/assets/imagery/<name>.webp`. */
    src: string;
    /** Empty (decorative) by default; describe the render only when it carries meaning. */
    alt?: string;
    /** Intrinsic size in px; always set, so the render never shifts the layout. */
    width: number;
    height: number;
    /** Pointer parallax travel in px at the edge of a ParallaxScene; larger is nearer. Default 0. */
    depth?: number;
    /** Bobs slowly (reduced motion: still). Default true. */
    float?: boolean;
    /** Start offset of the bob in seconds, so renders in a group do not move in step. */
    delay?: number;
    /** Load now (the first viewport) instead of lazily. */
    priority?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
/** FloatingArt: a transparent 3D render with a soft ink shadow, a slow bob and optional pointer parallax. */
export declare function FloatingArt({ src, alt, width, height, depth, float, delay, priority, className, style }: FloatingArtProps): import("react").JSX.Element;

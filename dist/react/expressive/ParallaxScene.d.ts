export interface ParallaxSceneProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onPointerMove' | 'onPointerLeave'> {
    /** Element to render; default `div`. */
    as?: 'div' | 'section' | 'figure' | 'header' | 'span';
    /** Scales the pointer range written to `--ds-px` and `--ds-py` (-1 to 1 at the edges). Default 1. */
    strength?: number;
}
/** ParallaxScene: tracks the pointer over itself and writes `--ds-px` and `--ds-py`, which FloatingArt `depth` turns into travel. Does nothing on touch screens or under reduced motion. */
export declare function ParallaxScene({ as, strength, ...rest }: ParallaxSceneProps): import("react").JSX.Element;

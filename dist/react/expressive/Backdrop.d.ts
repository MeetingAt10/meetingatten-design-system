export interface AuroraProps {
    className?: string;
}
/** Aurora: three slow lane-colored glows behind a hero or band. Decorative; put it in a positioned, isolated parent (`position: relative; isolation: isolate`). */
export declare function Aurora({ className }: AuroraProps): import("react").JSX.Element;
export interface GridBackdropProps {
    className?: string;
}
/** GridBackdrop: the ruled time sheet, hour and half-hour hairlines fading out at the edges. Decorative; same parent rules as Aurora. */
export declare function GridBackdrop({ className }: GridBackdropProps): import("react").JSX.Element;

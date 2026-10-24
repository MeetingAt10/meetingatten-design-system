export interface SkeletonProps {
    /** 30% width line instead of full width. */
    short?: boolean;
    className?: string;
}
/** Skeleton line for loading views. Decorative: mark the loading region itself with `aria-busy` and a text status. */
export declare function Skeleton({ short, className }: SkeletonProps): import("react").JSX.Element;

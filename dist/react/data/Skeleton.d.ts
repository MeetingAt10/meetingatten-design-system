export interface SkeletonProps {
    /** `text` line (default), `title` line, `block` (a dashed placeholder) or `circle`. */
    shape?: 'text' | 'title' | 'block' | 'circle';
    /** Width (text, title, circle), for example "60%" or "36px". */
    width?: string;
    /** Height of a block, for example "4rem". */
    height?: string;
    className?: string;
}
/** Skeleton: a placeholder in the shape of what is loading. Decorative: mark the region `aria-busy` and announce loading in text. */
export declare function Skeleton({ shape, width, height, className }: SkeletonProps): import("react").JSX.Element;

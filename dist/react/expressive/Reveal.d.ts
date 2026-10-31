export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
    /** Element to render; default `div`. */
    as?: 'div' | 'section' | 'li' | 'article' | 'header' | 'p' | 'span';
    /** How it enters: rise (default), fade, grow from smaller, or slide in from the start or end edge. */
    variant?: 'up' | 'fade' | 'scale' | 'start' | 'end';
    /** Position among siblings: each step starts its entrance 4% of the scroll range later. */
    index?: number;
}
/**
 * Reveal: content that eases in as it scrolls into view (marketing surfaces). Visible by default; static where
 * scroll-driven animation is unsupported or motion is reduced.
 */
export declare function Reveal({ as: Tag, variant, index, className, style, ...rest }: RevealProps): import("react").JSX.Element;

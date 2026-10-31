export interface WordRevealProps {
    /** The headline text; split on spaces. */
    text: string;
    /** Element to render; default `h2`. Use `h1` once per page. */
    as?: 'h1' | 'h2' | 'p' | 'span';
    className?: string;
}
/** WordReveal: a headline whose words rise out of the line on load, 70ms apart. Screen readers read the whole text once. */
export declare function WordReveal({ text, as: Tag, className }: WordRevealProps): import("react").JSX.Element;

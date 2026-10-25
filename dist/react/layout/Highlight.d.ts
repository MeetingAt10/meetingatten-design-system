export interface HighlightProps {
    /** `mark` yellow (default), or a lane wash. */
    tone?: 'mark' | 'community' | 'consult' | 'schedule';
    /** Only the lower part of the line, for display headlines. */
    under?: boolean;
    children: React.ReactNode;
    className?: string;
}
/** Highlight: a highlighter stroke behind the words that matter; it swipes in from the left once. */
export declare function Highlight({ tone, under, children, className }: HighlightProps): import("react").JSX.Element;

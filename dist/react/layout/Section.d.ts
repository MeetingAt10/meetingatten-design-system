export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    /** `canvas` (default), `sheet` (a full-width paper band between rules) or `plate` (a navy band; one per page, usually the closing call to action). */
    tone?: 'canvas' | 'sheet' | 'plate';
    /** Tighter vertical rhythm. */
    tight?: boolean;
    /** Skip the centered container (full-bleed content). */
    bleed?: boolean;
}
/** Section: a full-width region with the density rhythm and a centered container. */
export declare function Section({ tone, tight, bleed, className, children, ...rest }: SectionProps): import("react").JSX.Element;

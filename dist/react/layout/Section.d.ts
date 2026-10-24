export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    /** Full-width `surface` band with thin borders, to separate it from canvas sections. */
    band?: boolean;
    /** Decorative washes behind the section. */
    wash?: boolean;
}
/** Section: full-width region with the density section rhythm and a centered container. */
export declare function Section({ band, wash, className, children, ...rest }: SectionProps): import("react").JSX.Element;

export interface LogoProps {
    /** Name beside the mark (default "Meeting At 10"). */
    name?: string;
    /** Short code after the name, past a thin rule ("DS 1.0"). */
    code?: string;
    /** Only the calendar mark. Give it a `label`, unless the name is printed right beside it. */
    markOnly?: boolean;
    /** Mark 24px, 32px (default), 48px or 64px; the name scales with it. */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** On an inverse ground (a dark bar in the light theme, a light one in dark): the frame and page swap. */
    inverse?: boolean;
    /** Accessible name when the logo stands for the brand on its own ("Meeting At 10 home"). */
    label?: string;
    className?: string;
}
/**
 * Logo: the Meeting At 10 calendar mark, the design system's main logo, with the name beside it. The artwork comes
 * from assets/logo/meeting-at-10.svg; its frame and page follow the theme, so the calendar keeps its shape on dark grounds.
 */
export declare function Logo({ name, code, markOnly, size, inverse, label, className }: LogoProps): import("react").JSX.Element;

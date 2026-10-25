export interface DoorPlateProps {
    /** Name on the plate (default "ACCS"). */
    name?: string;
    /** Room or section code after a rule ("CCS 304"). */
    code?: string;
    /** Short line beside the name (the tagline on large plates). */
    tagline?: string;
    /** 26px, 32px (default) or 48px tall. */
    size?: 'sm' | 'md' | 'lg';
    /** Outlined instead of solid. */
    outline?: boolean;
    /** Accessible name when the plate stands for the brand ("ACCS home"). */
    label?: string;
    className?: string;
}
/** Door plate: the faculty-door name plate, used as the ACCS wordmark (until a logo is approved), page plates and room labels. */
export declare function DoorPlate({ name, code, tagline, size, outline, label, className }: DoorPlateProps): import("react").JSX.Element;

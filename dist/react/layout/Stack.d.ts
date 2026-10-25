export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Vertical gap in px, on the 8px rhythm. */
    gap?: 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48;
}
/** Stack: vertical rhythm with one gap. */
export declare function Stack({ gap, className, ...rest }: StackProps): import("react").JSX.Element;
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: 8 | 12 | 16;
    /** `between` pushes the ends apart, `end` aligns to the end. */
    justify?: 'start' | 'between' | 'end';
}
/** Row: a wrapping horizontal group (buttons, chips, meta). */
export declare function Row({ gap, justify, className, ...rest }: RowProps): import("react").JSX.Element;

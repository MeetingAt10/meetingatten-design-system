export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Vertical gap in px. */
    gap?: 16 | 24 | 32;
}
/** Stack: vertical rhythm with a fixed gap. */
export declare function Stack({ gap, className, ...rest }: StackProps): import("react").JSX.Element;

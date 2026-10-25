export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    /** Element to render. */
    as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article';
    /** `content` 1200px (default), `reading` 680px, `wide` 1440px. */
    width?: 'content' | 'reading' | 'wide';
}
/** Container: the centered content column with the grid margins for each breakpoint. */
export declare function Container({ as: Tag, width, className, ...rest }: ContainerProps): import("react").JSX.Element;

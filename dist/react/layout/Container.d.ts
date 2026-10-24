export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    /** Element to render. */
    as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article';
}
/** Container: centered content column (max 1200px) with the grid margins for each breakpoint. */
export declare function Container({ as: Tag, className, ...rest }: ContainerProps): import("react").JSX.Element;

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    /** 2 equal columns from 600px; 3 from 1024px; `main` = 2fr + 1fr from 1024px. One column on mobile. */
    columns?: 2 | 3 | 'main';
}
/** Grid: responsive columns on the layout gutters. Task order is kept when columns stack. */
export declare function Grid({ columns, className, ...rest }: GridProps): import("react").JSX.Element;

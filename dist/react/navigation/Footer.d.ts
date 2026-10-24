export interface FooterColumn {
    title: string;
    links: Array<{
        label: string;
        href: string;
    }>;
}
export interface FooterProps {
    /** Logo or wordmark. */
    brand?: React.ReactNode;
    description?: React.ReactNode;
    columns?: FooterColumn[];
    /** Status note, for example "Proposed, not approved". */
    note?: React.ReactNode;
    className?: string;
}
/** Footer: brand, link columns and the status note. */
export declare function Footer({ brand, description, columns, note, className }: FooterProps): import("react").JSX.Element;

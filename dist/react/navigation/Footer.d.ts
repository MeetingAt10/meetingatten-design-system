export interface FooterColumn {
    title: string;
    links: Array<{
        label: string;
        href: string;
    }>;
}
export interface FooterProps {
    /** Wordmark: a DoorPlate on ACCS surfaces, the Logo on Meeting At 10. */
    brand?: React.ReactNode;
    description?: React.ReactNode;
    /** Link columns; each becomes a navigation landmark named by its title. */
    columns?: FooterColumn[];
    /** Status note on the bottom line, for example "Proposed, not approved". */
    note?: React.ReactNode;
    /** Text on the right of the bottom line. */
    meta?: React.ReactNode;
    className?: string;
}
/** Footer: the wordmark and description, link columns, and the bottom line for status notes. */
export declare function Footer({ brand, description, columns, note, meta, className }: FooterProps): import("react").JSX.Element;

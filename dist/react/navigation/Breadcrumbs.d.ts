export interface BreadcrumbItem {
    label: string;
    /** Omit for the current page (the last item). */
    href?: string;
}
export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    /** Accessible name of the navigation landmark. */
    label?: string;
    className?: string;
}
/** Navigation / Breadcrumbs: where this page sits; the last item is the current page and is not a link. */
export declare function Breadcrumbs({ items, label, className }: BreadcrumbsProps): import("react").JSX.Element;

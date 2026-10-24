export interface PaginationProps {
    /** Current page, 1-based. */
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    /** Accessible name of the navigation landmark. */
    label?: string;
    className?: string;
}
/** First, last and the pages around the current one, with gaps in between. */
export declare function pageList(page: number, pageCount: number): Array<number | 'gap'>;
/** Navigation / Pagination: previous, numbered pages and next. */
export declare function Pagination({ page, pageCount, onPageChange, label, className }: PaginationProps): import("react").JSX.Element;

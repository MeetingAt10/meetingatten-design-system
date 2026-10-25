export interface PaginationProps {
    /** Current page, 1-based. */
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    /** Text on the left, for example "Showing 11-20 of 42 records". */
    summary?: React.ReactNode;
    /** Accessible name of the navigation landmark. */
    label?: string;
    className?: string;
}
/** First, last and the pages around the current one, with gaps in between. */
export declare function pageList(page: number, pageCount: number): Array<number | 'gap'>;
/** Pagination: previous, page blocks (the current one solid) and next. */
export declare function Pagination({ page, pageCount, onPageChange, summary, label, className }: PaginationProps): import("react").JSX.Element;

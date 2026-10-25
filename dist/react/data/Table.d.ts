import { type TableProps as AriaTableProps, type TableHeaderProps, type ColumnProps as AriaColumnProps, type RowProps, type CellProps, type TableBodyProps } from 'react-aria-components';
export interface TableProps extends Omit<AriaTableProps, 'className'> {
    /** Accessible name (or use aria-labelledby). */
    'aria-label'?: string;
    className?: string;
}
/**
 * Table: a ruled sheet with keyboard navigation, sorting (`sortDescriptor` / `onSortChange`) and selection
 * (`selectionMode`, which adds a check column). For read-only lists of reports use ReportsTable.
 */
export declare function Table({ className, ...rest }: TableProps): import("react").JSX.Element;
/** Column headers. With `selectionMode` they start with the check column ("Select all" when multiple). */
export declare function TableHeader<T extends object>({ columns, children, ...rest }: TableHeaderProps<T>): import("react").JSX.Element;
export interface ColumnProps extends Omit<AriaColumnProps, 'className' | 'children'> {
    children: React.ReactNode;
    /** Right-align numbers. */
    numeric?: boolean;
    className?: string;
}
/** A column header; sortable columns show the sort direction and announce it. */
export declare function Column({ children, numeric, className, ...rest }: ColumnProps): import("react").JSX.Element;
/** Table body; `renderEmptyState` shows a message when there are no rows. */
export declare function TableBody<T extends object>(props: TableBodyProps<T>): import("react").JSX.Element;
/** A row. With `selectionMode` it starts with a check, so a selected row never rests on its tint alone. */
export declare function Row<T extends object>({ id, columns, children, className, ...rest }: Omit<RowProps<T>, 'className'> & {
    className?: string;
}): import("react").JSX.Element;
/** A cell; `numeric` right-aligns, `reference` sets the tabular mono reference style. */
export declare function Cell({ numeric, reference, className, children, ...rest }: Omit<CellProps, 'className'> & {
    numeric?: boolean;
    reference?: boolean;
    className?: string;
}): import("react").JSX.Element;

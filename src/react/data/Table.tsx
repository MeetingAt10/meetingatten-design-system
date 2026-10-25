"use client";
import {
  Table as AriaTable, TableHeader as AriaTableHeader, Column as AriaColumn, TableBody as AriaTableBody, Row as AriaRow, Cell as AriaCell,
  Collection, ResizableTableContainer, useTableOptions,
  type TableProps as AriaTableProps, type TableHeaderProps, type ColumnProps as AriaColumnProps, type RowProps, type CellProps, type TableBodyProps,
} from 'react-aria-components';
import { Checkbox } from '../control/Checkbox.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface TableProps extends Omit<AriaTableProps, 'className'> {
  /** Accessible name (or use aria-labelledby). */
  'aria-label'?: string;
  className?: string;
}

/**
 * Table: a ruled sheet with keyboard navigation, sorting (`sortDescriptor` / `onSortChange`) and selection
 * (`selectionMode`, which adds a check column). For read-only lists of reports use ReportsTable.
 */
export function Table({ className, ...rest }: TableProps) {
  return (
    <ResizableTableContainer className="ds-table-wrap">
      <AriaTable {...rest} className={cx('ds-table', className)} />
    </ResizableTableContainer>
  );
}

/** Column headers. With `selectionMode` they start with the check column ("Select all" when multiple). */
export function TableHeader<T extends object>({ columns, children, ...rest }: TableHeaderProps<T>) {
  const { selectionBehavior, selectionMode } = useTableOptions();
  return (
    <AriaTableHeader {...rest}>
      {selectionBehavior === 'toggle' && (
        <AriaColumn className="ds-table__check" width={52} minWidth={52}>
          {selectionMode === 'multiple' ? <Checkbox slot="selection" /> : <span className="ds-visually-hidden">Selected</span>}
        </AriaColumn>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaTableHeader>
  );
}

export interface ColumnProps extends Omit<AriaColumnProps, 'className' | 'children'> {
  children: React.ReactNode;
  /** Right-align numbers. */
  numeric?: boolean;
  className?: string;
}

/** A column header; sortable columns show the sort direction and announce it. */
export function Column({ children, numeric, className, ...rest }: ColumnProps) {
  return (
    <AriaColumn {...rest} className={cx(numeric && 'ds-table__num', className)}>
      {({ allowsSorting, sortDirection }) => allowsSorting ? (
        <span className="ds-table__sort">
          {children}
          <Icon name={sortDirection === 'ascending' ? 'sort-ascending' : sortDirection === 'descending' ? 'sort-descending' : 'arrows-down-up'} size={16} />
        </span>
      ) : children}
    </AriaColumn>
  );
}

/** Table body; `renderEmptyState` shows a message when there are no rows. */
export function TableBody<T extends object>(props: TableBodyProps<T>) {
  return <AriaTableBody {...props} />;
}

/** A row. With `selectionMode` it starts with a check, so a selected row never rests on its tint alone. */
export function Row<T extends object>({ id, columns, children, className, ...rest }: Omit<RowProps<T>, 'className'> & { className?: string }) {
  const { selectionBehavior } = useTableOptions();
  return (
    <AriaRow id={id} {...rest} className={className}>
      {selectionBehavior === 'toggle' && <AriaCell className="ds-table__check"><Checkbox slot="selection" /></AriaCell>}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  );
}

/** A cell; `numeric` right-aligns, `reference` sets the tabular mono reference style. */
export function Cell({ numeric, reference, className, children, ...rest }: Omit<CellProps, 'className'> & { numeric?: boolean; reference?: boolean; className?: string }) {
  return (
    <AriaCell {...rest} className={cx(numeric && 'ds-table__num', className)}>
      {reference && typeof children !== 'function' ? <span className="ds-table__ref">{children}</span> : children}
    </AriaCell>
  );
}

"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table as AriaTable, TableHeader as AriaTableHeader, Column as AriaColumn, TableBody as AriaTableBody, Row as AriaRow, Cell as AriaCell, Collection, ResizableTableContainer, useTableOptions, } from 'react-aria-components';
import { Checkbox } from '../control/Checkbox.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/**
 * Table: a ruled sheet with keyboard navigation, sorting (`sortDescriptor` / `onSortChange`) and selection
 * (`selectionMode`, which adds a check column). For read-only lists of reports use ReportsTable.
 */
export function Table({ className, ...rest }) {
    return (_jsx(ResizableTableContainer, { className: "ds-table-wrap", children: _jsx(AriaTable, { ...rest, className: cx('ds-table', className) }) }));
}
/** Column headers. With `selectionMode` they start with the check column ("Select all" when multiple). */
export function TableHeader({ columns, children, ...rest }) {
    const { selectionBehavior, selectionMode } = useTableOptions();
    return (_jsxs(AriaTableHeader, { ...rest, children: [selectionBehavior === 'toggle' && (_jsx(AriaColumn, { className: "ds-table__check", width: 52, minWidth: 52, children: selectionMode === 'multiple' ? _jsx(Checkbox, { slot: "selection" }) : _jsx("span", { className: "ds-visually-hidden", children: "Selected" }) })), _jsx(Collection, { items: columns, children: children })] }));
}
/** A column header; sortable columns show the sort direction and announce it. */
export function Column({ children, numeric, className, ...rest }) {
    return (_jsx(AriaColumn, { ...rest, className: cx(numeric && 'ds-table__num', className), children: ({ allowsSorting, sortDirection }) => allowsSorting ? (_jsxs("span", { className: "ds-table__sort", children: [children, _jsx(Icon, { name: sortDirection === 'ascending' ? 'sort-ascending' : sortDirection === 'descending' ? 'sort-descending' : 'arrows-down-up', size: 16 })] })) : children }));
}
/** Table body; `renderEmptyState` shows a message when there are no rows. */
export function TableBody(props) {
    return _jsx(AriaTableBody, { ...props });
}
/** A row. With `selectionMode` it starts with a check, so a selected row never rests on its tint alone. */
export function Row({ id, columns, children, className, ...rest }) {
    const { selectionBehavior } = useTableOptions();
    return (_jsxs(AriaRow, { id: id, ...rest, className: className, children: [selectionBehavior === 'toggle' && _jsx(AriaCell, { className: "ds-table__check", children: _jsx(Checkbox, { slot: "selection" }) }), _jsx(Collection, { items: columns, children: children })] }));
}
/** A cell; `numeric` right-aligns, `reference` sets the tabular mono reference style. */
export function Cell({ numeric, reference, className, children, ...rest }) {
    return (_jsx(AriaCell, { ...rest, className: cx(numeric && 'ds-table__num', className), children: reference && typeof children !== 'function' ? _jsx("span", { className: "ds-table__ref", children: children }) : children }));
}

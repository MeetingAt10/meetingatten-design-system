import { describe, it, expect } from 'vitest';
import { useState } from 'react';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { SortDescriptor } from 'react-aria-components';
import { axeViolations } from '../test/a11y.js';
import { ReportsTable } from './ReportsTable.js';
import { ReportRecord } from './ReportRecord.js';
import { CaseTimeline } from './CaseTimeline.js';
import { Table, TableHeader, Column, TableBody, Row, Cell } from './Table.js';
import { Skeleton } from './Skeleton.js';
import { ViewState } from './ViewState.js';

describe('ReportsTable', () => {
  const rows = [
    { id: '24', reference: 'CCS-2026-0142', category: 'General concern', status: 'Draft', statusForm: 'pending' as const, updated: '21 Oct', href: '/r/24', actionLabel: 'View draft' },
    { id: '18', reference: 'CCS-2026-0118', category: 'Process question', status: 'Resolved', statusTone: 'success' as const },
  ];
  it('is a focusable region named by its caption; the reference is the row header; actions are named', async () => {
    const { container } = render(<ReportsTable caption="Own reports" rows={rows} />);
    const region = screen.getByRole('region', { name: 'Own reports' });
    expect(region.getAttribute('tabindex')).toBe('0');
    expect(screen.getByRole('rowheader', { name: 'CCS-2026-0142' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'View draft CCS-2026-0142' })).toBeTruthy();
    expect(screen.getByText('Draft').closest('.ds-badge')?.className).toContain('ds-badge--pending');
    expect(await axeViolations(container)).toEqual([]);
  });
  it('shows the empty message across all columns', () => {
    render(<ReportsTable caption="Own reports" rows={[]} emptyMessage="No reports yet. Drafts you save appear here." />);
    expect(screen.getByRole('cell', { name: /No reports yet/ }).getAttribute('colspan')).toBe('4');
  });
});

describe('ReportRecord and CaseTimeline', () => {
  it('ReportRecord is an article named by its title, with facts and a named action', () => {
    render(<ReportRecord reference="CCS-2026-0142" title="General concern" status="Review pending" facts={[{ label: 'Updated', value: '21 Oct' }]} href="/r/24" />);
    expect(screen.getByRole('article', { name: 'General concern' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'View record CCS-2026-0142' })).toBeTruthy();
  });
  it('CaseTimeline marks the current event and states every state in words', () => {
    render(
      <CaseTimeline events={[
        { title: 'Draft saved', date: '21 Oct 09:12', actor: 'Student' },
        { title: 'Recipients being confirmed', state: 'current', actor: 'Department office' },
        { title: 'Review', state: 'pending' },
      ]} />,
    );
    const items = within(screen.getByRole('list', { name: 'Case activity' })).getAllByRole('listitem');
    expect(items[1].getAttribute('aria-current')).toBe('step');
    expect(items[0].textContent).toContain('(Done)');
    expect(items[2].textContent).toContain('(Pending)');
  });
});

describe('Table', () => {
  function Sortable() {
    const [sort, setSort] = useState<SortDescriptor>({ column: 'ref', direction: 'ascending' });
    const data = [{ id: 1, ref: 'CCS-2026-0142', n: 3 }, { id: 2, ref: 'CCS-2026-0091', n: 12 }];
    const sorted = [...data].sort((a, b) => (sort.direction === 'ascending' ? 1 : -1) * String(a[sort.column as 'ref']).localeCompare(String(b[sort.column as 'ref'])));
    return (
      <Table aria-label="Records" sortDescriptor={sort} onSortChange={setSort}>
        <TableHeader>
          <Column id="ref" isRowHeader allowsSorting>Reference</Column>
          <Column id="n" numeric>Replies</Column>
        </TableHeader>
        <TableBody items={sorted}>{(r) => <Row id={r.id}><Cell reference>{r.ref}</Cell><Cell numeric>{r.n}</Cell></Row>}</TableBody>
      </Table>
    );
  }
  it('sorts from the column header and announces the direction', async () => {
    render(<Sortable />);
    const header = screen.getByRole('columnheader', { name: /Reference/ });
    expect(header.getAttribute('aria-sort')).toBe('ascending');
    expect(screen.getAllByRole('rowheader').map((c) => c.textContent)).toEqual(['CCS-2026-0091', 'CCS-2026-0142']);
    await userEvent.click(header);
    expect(header.getAttribute('aria-sort')).toBe('descending');
    expect(screen.getAllByRole('rowheader').map((c) => c.textContent)).toEqual(['CCS-2026-0142', 'CCS-2026-0091']);
  });
  it('selection adds a check column, so a selected row shows a checked box, not only a tint', async () => {
    const data = [{ id: 1, ref: 'CCS-2026-0142' }, { id: 2, ref: 'CCS-2026-0091' }];
    const { container } = render(
      <Table aria-label="Records" selectionMode="multiple">
        <TableHeader><Column id="ref" isRowHeader>Reference</Column></TableHeader>
        <TableBody items={data}>{(r) => <Row id={r.id}><Cell reference>{r.ref}</Cell></Row>}</TableBody>
      </Table>,
    );
    expect(screen.getByRole('checkbox', { name: /select all/i })).toBeTruthy();
    const first = screen.getByRole('checkbox', { name: 'Select CCS-2026-0142' });
    await userEvent.click(first);
    expect((first as HTMLInputElement).checked).toBe(true);
    expect(screen.getAllByRole('row')[1].getAttribute('aria-selected')).toBe('true');
    expect(await axeViolations(container)).toEqual([]);
  });
  it('without selectionMode there is no check column', () => {
    render(
      <Table aria-label="Records">
        <TableHeader><Column id="ref" isRowHeader>Reference</Column></TableHeader>
        <TableBody><Row id={1}><Cell>CCS-2026-0142</Cell></Row></TableBody>
      </Table>,
    );
    expect(screen.queryByRole('checkbox')).toBeNull();
    expect(screen.getAllByRole('columnheader')).toHaveLength(1);
  });
});

describe('Skeleton and ViewState', () => {
  it('Skeleton is decorative and takes its shape', () => {
    const { container } = render(<Skeleton shape="block" height="4rem" />);
    const el = container.firstElementChild as HTMLElement;
    expect(el.getAttribute('aria-hidden')).toBe('true');
    expect(el.className).toBe('ds-skeleton ds-skeleton--block');
    expect(el.style.getPropertyValue('--h')).toBe('4rem');
  });
  it('ViewState announces errors as alerts and loading as a busy status', () => {
    render(<><ViewState kind="error" title="Couldn't load reports" /><ViewState kind="loading" title="Loading reports" /></>);
    expect(screen.getByRole('alert').textContent).toContain("Couldn't load reports");
    expect(screen.getByRole('status').getAttribute('aria-busy')).toBe('true');
  });
});

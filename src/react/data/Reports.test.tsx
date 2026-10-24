import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { CaseTimeline } from './CaseTimeline.js';
import { ReportsTable } from './ReportsTable.js';
import { ReportRecord } from './ReportRecord.js';
import { PrivacyNotice } from '../feedback/PrivacyNotice.js';

const rows = [{ id: '1', reference: 'DEMO-024', category: 'General concern', status: 'Draft · policy gate', href: '#24', actionLabel: 'View draft' }, { id: '2', reference: 'DEMO-018', category: 'Process question', status: 'Review pending · demo', href: '#18' }];

describe('CaseTimeline', () => {
  it('is an ordered list with actor roles and dates', () => {
    render(<CaseTimeline events={[{ title: 'Review scope pending', actor: 'Assigned reviewer · DEMO', date: '20 Oct 2026', dateTime: '2026-10-20', body: 'Policy gate remains active.' }, { title: 'Record created · DEMO', actor: 'Sample event' }]} />);
    const list = screen.getByRole('list', { name: 'Case activity' });
    expect(list.tagName).toBe('OL');
    expect(list.className).toBe('ds-timeline');
    expect(within(list).getAllByRole('listitem')).toHaveLength(2);
    expect(list.querySelector('time')!.getAttribute('datetime')).toBe('2026-10-20');
  });
});

describe('ReportsTable', () => {
  it('uses a caption, column headers, the reference as row header and named actions', () => {
    render(<ReportsTable caption="Own reports / demo records" rows={rows} />);
    const table = screen.getByRole('table', { name: 'Own reports / demo records' });
    expect(within(table).getAllByRole('columnheader').map((h) => h.textContent)).toEqual(['Reference', 'Category', 'Status', 'Action']);
    expect(within(table).getByRole('rowheader', { name: 'DEMO-024' })).toBeTruthy();
    expect(within(table).getByRole('link', { name: 'View draft DEMO-024' }).textContent).toBe('View draft');
  });
  it('shows the empty message', () => {
    render(<ReportsTable caption="Own reports" rows={[]} />);
    expect(screen.getByText('No reports yet.')).toBeTruthy();
  });
});

describe('ReportRecord', () => {
  it('labels facts and names the action', () => {
    render(<ReportRecord reference="DEMO-024" status="Draft · policy gate" facts={[{ label: 'Category', value: 'General concern' }, { label: 'Permission', value: 'Student · own reports' }]} href="#24" actionLabel="View draft" />);
    const rec = screen.getByRole('article', { name: 'DEMO-024' });
    expect(within(rec).getByText('Category').tagName).toBe('DT');
    expect(within(rec).getByRole('link', { name: 'View draft DEMO-024' }).className).toBe('ds-btn ds-btn--secondary ds-btn--block');
  });
});

describe('PrivacyNotice', () => {
  it('is a named complementary region with title, body and foot', () => {
    render(<PrivacyNotice title="Policy confirmation required" foot="Sensitive submission is disabled until scope and policy are confirmed.">Access permission: assigned reviewers only (proposed).</PrivacyNotice>);
    const notice = screen.getByRole('complementary', { name: 'Policy confirmation required' });
    expect(notice.className).toBe('ds-notice');
    expect(within(notice).getByText(/Sensitive submission/).className).toBe('ds-notice__foot');
  });
});

describe('report patterns', () => {
  it('have no axe violations', async () => {
    const { container } = render(<main>
      <h1>Report DEMO-024</h1>
      <PrivacyNotice title="Policy confirmation required" foot="Submission is disabled.">Restricted access does not mean anonymous.</PrivacyNotice>
      <CaseTimeline events={[{ title: 'Review scope pending', actor: 'Assigned reviewer · DEMO' }]} />
      <ReportsTable caption="Own reports" rows={rows} />
      <ReportRecord reference="DEMO-024" status="Draft · policy gate" facts={[{ label: 'Category', value: 'General concern' }]} href="#24" level={2} />
    </main>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

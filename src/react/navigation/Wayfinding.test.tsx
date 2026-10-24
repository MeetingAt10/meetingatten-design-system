import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Breadcrumbs } from './Breadcrumbs.js';
import { Pagination, pageList } from './Pagination.js';
import { Stepper } from './Stepper.js';

describe('Breadcrumbs', () => {
  it('links each level and marks the last as the current page', () => {
    render(<Breadcrumbs items={[{ label: 'My reports', href: '/reports' }, { label: 'DEMO-024' }]} />);
    const nav = screen.getByRole('navigation', { name: 'Breadcrumbs' });
    expect(within(nav).getByRole('link', { name: 'My reports' }).className).toBe('ds-breadcrumb__link');
    expect(within(nav).getByText('DEMO-024').getAttribute('aria-current')).toBe('page');
  });
});

describe('Pagination', () => {
  it('lists first, last and neighbors with gaps', () => {
    expect(pageList(1, 1)).toEqual([1]);
    expect(pageList(5, 10)).toEqual([1, 'gap', 4, 5, 6, 'gap', 10]);
    expect(pageList(2, 4)).toEqual([1, 2, 3, 4]);
  });
  it('marks the current page and changes page; previous disabled on page 1', async () => {
    const onPageChange = vi.fn();
    render(<Pagination page={1} pageCount={10} onPageChange={onPageChange} />);
    expect(screen.getByRole('button', { name: 'Page 1' }).getAttribute('aria-current')).toBe('page');
    expect(screen.getByRole('button', { name: /Previous/ }).hasAttribute('disabled')).toBe(true);
    await userEvent.click(screen.getByRole('button', { name: 'Page 2' }));
    await userEvent.click(screen.getByRole('button', { name: /Next/ }));
    expect(onPageChange.mock.calls).toEqual([[2], [2]]);
  });
});

describe('Stepper', () => {
  it('marks the current step and announces the others in text', () => {
    const { container } = render(<Stepper steps={['Topic', 'Time', 'Review', 'Done']} current={1} />);
    const items = container.querySelectorAll('.ds-step');
    expect([...items].map((li) => li.getAttribute('data-state'))).toEqual(['complete', 'current', 'upcoming', 'upcoming']);
    expect(items[1].getAttribute('aria-current')).toBe('step');
    expect(items[0].textContent).toContain('(completed)');
    expect(items[2].textContent).toContain('(not started)');
  });
});

describe('wayfinding', () => {
  it('has no axe violations', async () => {
    const { container } = render(<main>
      <Breadcrumbs items={[{ label: 'My reports', href: '/reports' }, { label: 'DEMO-024' }]} />
      <Pagination page={5} pageCount={10} onPageChange={() => {}} />
      <Stepper steps={['Topic', 'Time', 'Review']} current={1} />
    </main>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Search } from './Search.js';

describe('Search', () => {
  it('names the box, submits and clears', async () => {
    const onSubmit = vi.fn();
    const { container } = render(<Search label="Search community" placeholder="Search community" onSubmit={onSubmit} />);
    const box = screen.getByRole('searchbox', { name: 'Search community' });
    expect(container.firstElementChild!.className).toBe('ds-search');
    await userEvent.type(box, 'recursion{Enter}');
    expect(onSubmit).toHaveBeenCalledWith('recursion');
    await userEvent.click(screen.getByRole('button', { name: 'Clear search' }));
    expect((box as HTMLInputElement).value).toBe('');
  });
  it('Escape clears', async () => {
    render(<Search label="Search" defaultValue="abc" />);
    await userEvent.click(screen.getByRole('searchbox'));
    await userEvent.keyboard('{Escape}');
    expect((screen.getByRole('searchbox') as HTMLInputElement).value).toBe('');
  });
  it('has no axe violations (empty, filled)', async () => {
    const { container } = render(<div><Search label="Search one" /><Search label="Search two" defaultValue="x" /></div>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Select } from './Select.js';
import { SelectOption } from './SelectOption.js';

const topics = () => [<SelectOption key="p" id="planning">Course planning</SelectOption>, <SelectOption key="t" id="thesis">Thesis advising</SelectOption>];

describe('Select', () => {
  it('opens from the keyboard, picks an option and shows it', async () => {
    const onSelectionChange = vi.fn();
    render(<Select label="Topic" placeholder="Choose a topic" onSelectionChange={onSelectionChange}>{topics()}</Select>);
    const trigger = screen.getByRole('button', { name: /Topic/ });
    expect(trigger.className).toBe('ds-select');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = await screen.findByRole('listbox');
    expect(listbox.className).toBe('ds-listbox');
    expect(trigger.getAttribute('aria-expanded')).toBe('true'); // drives the chevron rotation in CSS
    expect(within(listbox).getAllByRole('option')[0].className).toBe('ds-option');
    await userEvent.keyboard('{ArrowDown}{Enter}');
    expect(onSelectionChange).toHaveBeenCalledWith('thesis');
    expect(trigger.textContent).toContain('Thesis advising');
  });
  it('marks the selected option with a check icon', async () => {
    render(<Select label="Topic" defaultSelectedKey="planning">{topics()}</Select>);
    await userEvent.click(screen.getByRole('button', { name: /Topic/ }));
    const selected = screen.getByRole('option', { name: 'Course planning' });
    expect(selected.getAttribute('aria-selected')).toBe('true');
    expect(selected.querySelector('svg.ds-icon--16')).not.toBeNull();
  });
  it('has no axe violations (closed, open)', async () => {
    const { container } = render(<Select label="Topic">{topics()}</Select>);
    expect(await axeViolations(container)).toEqual([]);
    await userEvent.click(screen.getByRole('button', { name: /Topic/ }));
    await screen.findByRole('listbox');
    expect(await axeViolations(document.body)).toEqual([]);
  });
});

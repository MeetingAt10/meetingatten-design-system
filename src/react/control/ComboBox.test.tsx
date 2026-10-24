import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { ComboBox } from './ComboBox.js';
import { SelectOption } from './SelectOption.js';

const courses = [{ id: 'cs101', name: 'Intro to Computing' }, { id: 'cs201', name: 'Data Structures' }, { id: 'cs301', name: 'Databases' }];

describe('ComboBox', () => {
  it('filters as you type and selects', async () => {
    const onSelectionChange = vi.fn();
    render(<ComboBox label="Course" items={courses} onSelectionChange={onSelectionChange}>{(c) => <SelectOption id={c.id}>{c.name}</SelectOption>}</ComboBox>);
    const input = screen.getByRole('combobox', { name: 'Course' });
    await userEvent.type(input, 'data');
    const options = within(await screen.findByRole('listbox')).getAllByRole('option');
    expect(options.map((o) => o.textContent)).toEqual(['Data Structures', 'Databases']);
    await userEvent.keyboard('{ArrowDown}{Enter}');
    expect(onSelectionChange).toHaveBeenCalledWith('cs201');
    expect((input as HTMLInputElement).value).toBe('Data Structures');
  });
  it('has no axe violations (closed, open)', async () => {
    const { container } = render(<ComboBox label="Course" items={courses}>{(c) => <SelectOption id={c.id}>{c.name}</SelectOption>}</ComboBox>);
    expect(await axeViolations(container)).toEqual([]);
    await userEvent.type(screen.getByRole('combobox'), 'd');
    await screen.findByRole('listbox');
    expect(await axeViolations(document.body)).toEqual([]);
  });
});

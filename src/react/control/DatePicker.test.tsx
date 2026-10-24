import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { CalendarDate } from '@internationalized/date';
import { Calendar } from './Calendar.js';
import { DatePicker } from './DatePicker.js';

describe('Calendar', () => {
  it('selects a day', async () => {
    const onChange = vi.fn();
    render(<Calendar aria-label="Consultation date" defaultFocusedValue={new CalendarDate(2026, 10, 1)} onChange={onChange} />);
    expect(screen.getByRole('heading').textContent).toContain('2026');
    await userEvent.click(screen.getByRole('button', { name: /October 21, 2026/ }));
    expect(onChange).toHaveBeenCalledWith(new CalendarDate(2026, 10, 21));
    expect(document.querySelector('.ds-calendar__cell[data-selected]')!.textContent).toBe('21');
  });
});

describe('DatePicker', () => {
  it('shows segments, opens the calendar popover and picks a date', async () => {
    const onChange = vi.fn();
    render(<DatePicker label="Preferred date" defaultValue={new CalendarDate(2026, 10, 19)} onChange={onChange} />);
    expect(screen.getByRole('group', { name: 'Preferred date' }).className).toBe('ds-datefield');
    await userEvent.click(screen.getByRole('button', { name: /Calendar/ }));
    const dialog = await screen.findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('button', { name: /October 21, 2026/ }));
    expect(onChange).toHaveBeenCalledWith(new CalendarDate(2026, 10, 21));
  });
  it('has no axe violations (closed, open)', async () => {
    const { container } = render(<DatePicker label="Preferred date" defaultValue={new CalendarDate(2026, 10, 19)} />);
    expect(await axeViolations(container)).toEqual([]);
    await userEvent.click(screen.getByRole('button', { name: /Calendar/ }));
    await screen.findByRole('dialog');
    expect(await axeViolations(document.body)).toEqual([]);
  });
});

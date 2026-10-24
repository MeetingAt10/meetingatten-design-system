import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { useState } from 'react';
import { ConsultationSlotPicker, type ConsultationSlot } from './ConsultationSlotPicker.js';

const days = [{ id: 'mon', weekday: 'M', day: 19, label: 'Mon 19 Oct' }, { id: 'wed', weekday: 'W', day: 21, label: 'Wed 21 Oct' }];
const slots: ConsultationSlot[] = [{ id: 's9', time: '09:00–09:30' }, { id: 's10', time: '10:00–10:30' }, { id: 's11', time: '11:00–11:30', state: 'booked' }, { id: 's14', time: '14:00–14:30', state: 'unavailable' }];

function Harness({ onChange }: { onChange?: (id: string) => void }) {
  const [day, setDay] = useState('wed');
  const [slot, setSlot] = useState<string | null>(null);
  return <ConsultationSlotPicker days={days} selectedDay={day} onDayChange={setDay} slots={slots} value={slot} onChange={(id) => { setSlot(id); onChange?.(id); }} timeZoneNote="sample local campus time" />;
}

describe('ConsultationSlotPicker', () => {
  it('names the slot group with date and time zone; selects one slot with the keyboard', async () => {
    const onChange = vi.fn();
    render(<Harness onChange={onChange} />);
    const group = screen.getByRole('radiogroup', { name: 'Consultation time, Wed 21 Oct · sample local campus time' });
    const radios = within(group).getAllByRole('radio');
    expect(radios.map((r) => (r as HTMLInputElement).disabled)).toEqual([false, false, true, true]);
    expect(within(group).getByText('— Booked')).toBeTruthy();
    await userEvent.click(within(group).getByText('10:00–10:30'));
    expect(onChange).toHaveBeenLastCalledWith('s10');
    expect(within(group).getByText('✓ Selected').closest('.ds-slot')!.getAttribute('data-selected')).toBe('true');
  });
  it('switches the day', async () => {
    render(<Harness />);
    await userEvent.click(screen.getByRole('radio', { name: 'Mon 19 Oct' }));
    expect(screen.getByText('Mon 19 Oct · sample local campus time')).toBeTruthy();
  });
  it('shows loading and error messages', () => {
    render(<ConsultationSlotPicker days={days} selectedDay="wed" onDayChange={() => {}} slots={slots} timeZoneNote="sample local campus time" isLoading errorMessage="Couldn’t check this slot. Try again." />);
    expect(screen.getByRole('status').textContent).toBe('Checking availability…');
    expect(screen.getByRole('alert').textContent).toBe('Couldn’t check this slot. Try again.');
  });
  it('has no axe violations (unselected, selected)', async () => {
    const { container } = render(<Harness />);
    expect(await axeViolations(container)).toEqual([]);
    await userEvent.click(screen.getByText('09:00–09:30'));
    expect(await axeViolations(container)).toEqual([]);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { useState } from 'react';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { TimeBlock } from './TimeBlock.js';
import { NowLine, clockOf, hoursOf } from './NowLine.js';
import { Timetable } from './Timetable.js';
import { ConsultationSlotPicker } from './ConsultationSlotPicker.js';

describe('TimeBlock', () => {
  it('carries lane and line form as classes and the state in words', () => {
    const { container } = render(<><TimeBlock time="10:00-10:30" title="Open slot" lane="consult" form="open" /><TimeBlock title="Booked slot" form="taken" /></>);
    const [open, taken] = [...container.querySelectorAll('.ds-block')];
    expect(open.className).toBe('ds-block ds-block--consult ds-block--open');
    expect(open.textContent).toContain('Open');
    expect(taken.textContent).toContain('Booked');
  });
  it('an interactive block is a toggle button named by time and title', async () => {
    const onPress = vi.fn();
    render(<TimeBlock time="10:00" title="Course planning" onPress={onPress} isSelected aria-label="10:00, Course planning" />);
    const b = screen.getByRole('button', { name: '10:00, Course planning' });
    expect(b.getAttribute('aria-pressed')).toBe('true');
    await userEvent.click(b);
    expect(onPress).toHaveBeenCalled();
  });
  it('taken blocks are disabled', () => {
    render(<TimeBlock title="Booked" form="taken" onPress={() => {}} aria-label="Booked" />);
    expect(screen.getByRole('button', { name: 'Booked' }).hasAttribute('disabled')).toBe(true);
  });
});

describe('NowLine helpers', () => {
  it('format decimal hours as a 24-hour clock', () => {
    expect(clockOf(10.7)).toBe('10:42');
    expect(clockOf(9)).toBe('09:00');
    expect(clockOf(16.9999)).toBe('17:00');
    expect(hoursOf(new Date(2026, 9, 21, 13, 30))).toBe(13.5);
  });
  it('NowLine is decorative and positioned by --now', () => {
    const { container } = render(<NowLine offset={2.7} label="10:42" />);
    const el = container.firstElementChild as HTMLElement;
    expect(el.getAttribute('aria-hidden')).toBe('true');
    expect(el.style.getPropertyValue('--now')).toBe('2.7');
  });
});

describe('Timetable', () => {
  const days = [
    { id: 'mon', label: 'Mon', date: '19', fullLabel: 'Monday 19 October' },
    { id: 'wed', label: 'Wed', date: '21', fullLabel: 'Wednesday 21 October', isToday: true },
  ];
  const events = [
    { id: 'a', day: 'mon', start: 9, end: 10.5, title: 'Data Structures', meta: 'CCS 201' },
    { id: 'b', day: 'wed', start: 9, end: 11, title: 'Consultation hours', lane: 'consult' as const },
    { id: 'c', day: 'wed', start: 10, end: 11, title: 'Overlapping review', lane: 'community' as const },
  ];
  it('each day is a section named by its heading, holding its blocks in time order', async () => {
    const { container } = render(<Timetable label="This week" days={days} events={events} now={10.7} band={<span>Reports: you see only your own records.</span>} />);
    const group = screen.getByRole('group', { name: 'This week' });
    const wed = within(group).getByRole('group', { name: 'Wednesday 21 October, today' });
    expect(within(wed).getAllByRole('listitem').map((li) => li.textContent?.includes('Consultation hours'))).toEqual([true, false]);
    expect(container.querySelector('.ds-timetable__band')?.textContent).toContain('only your own records');
    expect(await axeViolations(container)).toEqual([]);
  });
  it('pins the now-line on today with the time in the gutter, and splits concurrent blocks into columns', () => {
    const { container } = render(<Timetable label="Week" days={days} events={events} now={10.7} />);
    expect(container.querySelectorAll('.ds-timetable__day.is-today .ds-now')).toHaveLength(1);
    expect(container.querySelector('.ds-timetable__now-time')?.textContent).toBe('10:42');
    const cols = [...container.querySelectorAll('.is-today .ds-timetable__event')].map((li) => (li as HTMLElement).style.getPropertyValue('--cols'));
    expect(cols).toEqual(['2', '2']);
  });
  it('hides the now-line when told to', () => {
    const { container } = render(<Timetable label="Week" days={days} events={events} now={false} />);
    expect(container.querySelector('.ds-now')).toBeNull();
  });
});

describe('ConsultationSlotPicker', () => {
  function Picker({ onChange }: { onChange: (id: string) => void }) {
    const [day, setDay] = useState('wed');
    const [value, setValue] = useState<string | null>(null);
    return (
      <ConsultationSlotPicker
        days={[{ id: 'tue', weekday: 'Tue', day: 20, label: 'Tue 20 Oct', openCount: 2 }, { id: 'wed', weekday: 'Wed', day: 21, label: 'Wed 21 Oct', isToday: true }]}
        selectedDay={day}
        onDayChange={setDay}
        slots={[{ id: 's1', time: '09:00-09:30' }, { id: 's2', time: '10:00-10:30', state: 'booked' }, { id: 's3', time: '11:00-11:30', state: 'unavailable' }]}
        value={value}
        onChange={(id) => { setValue(id); onChange(id); }}
        timeZoneNote="Asia/Manila (PHT)"
      />
    );
  }
  it('chooses an open slot; booked and unavailable slots are disabled and say so', async () => {
    const onChange = vi.fn();
    const { container } = render(<Picker onChange={onChange} />);
    expect(screen.getByRole('radio', { name: /10:00-10:30/ })).toHaveProperty('disabled', true);
    expect(screen.getByText('Booked')).toBeTruthy();
    expect(screen.getByText('Unavailable')).toBeTruthy();
    await userEvent.click(screen.getByRole('radio', { name: /09:00-09:30/ }));
    expect(onChange).toHaveBeenCalledWith('s1');
    expect(screen.getByText('Chosen')).toBeTruthy();
    expect(await axeViolations(container)).toEqual([]);
  });
  it('the day strip names today and open counts; choosing a day moves the selection', async () => {
    render(<Picker onChange={() => {}} />);
    const tue = screen.getByRole('radio', { name: 'Tue 20 Oct, 2 open' });
    await userEvent.click(tue);
    expect(tue.getAttribute('aria-checked')).toBe('true');
    expect(screen.getByRole('radio', { name: 'Wed 21 Oct, today' }).getAttribute('aria-checked')).toBe('false');
  });
});

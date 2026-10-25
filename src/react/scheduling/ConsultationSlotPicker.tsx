"use client";
import { ToggleButtonGroup, ToggleButton, RadioGroup, Radio, SelectionIndicator, Label } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { Spinner } from '../feedback/Spinner.js';
import { cx } from '../lib/cx.js';

export interface ConsultationDay {
  id: string;
  /** Short weekday shown above the number ("Wed"). */
  weekday: string;
  /** Day of the month (21). */
  day: number | string;
  /** Full date for screen readers and the summary line ("Wed 21 Oct"). */
  label: string;
  /** Open slots that day, shown under the date ("3 open"). */
  openCount?: number;
  isToday?: boolean;
  isDisabled?: boolean;
}

export interface ConsultationSlot {
  id: string;
  /** "09:00-09:30". */
  time: string;
  state?: 'open' | 'booked' | 'unavailable';
}

export interface ConsultationSlotPickerProps {
  days: ConsultationDay[];
  selectedDay: string;
  onDayChange: (dayId: string) => void;
  slots: ConsultationSlot[];
  value?: string | null;
  onChange?: (slotId: string) => void;
  /** Always shown with the date, for example "sample local campus time". */
  timeZoneNote: string;
  /** Group name, default "Consultation time". */
  label?: string;
  isLoading?: boolean;
  /** "Couldn't check this slot. Try again." */
  errorMessage?: string;
  /** Show the line-form legend under the slots (default true). */
  showLegend?: boolean;
  className?: string;
}

const STATE: Record<'open' | 'booked' | 'unavailable' | 'chosen', { words: string; icon: IconName }> = {
  open: { words: 'Open', icon: 'plus' },
  booked: { words: 'Booked', icon: 'lock' },
  unavailable: { words: 'Unavailable', icon: 'prohibit' },
  chosen: { words: 'Chosen', icon: 'check' },
};

/** Consultation slot picker: a day strip (the chosen day is a solid block that slides) and one radio group of slot blocks. Booked and unavailable slots are disabled and say so in words. */
export function ConsultationSlotPicker({ days, selectedDay, onDayChange, slots, value, onChange, timeZoneNote, label = 'Consultation time', isLoading, errorMessage, showLegend = true, className }: ConsultationSlotPickerProps) {
  const day = days.find((d) => d.id === selectedDay);
  const summary = `${day?.label ?? ''} · ${timeZoneNote}`;
  return (
    <div className={cx('ds-slots', className)}>
      <ToggleButtonGroup
        aria-label={`${label}: day`}
        selectionMode="single"
        disallowEmptySelection
        selectedKeys={[selectedDay]}
        onSelectionChange={(keys) => { const k = [...keys][0]; if (k !== undefined) onDayChange(String(k)); }}
        className="ds-days"
      >
        {days.map((d) => (
          <ToggleButton key={d.id} id={d.id} isDisabled={d.isDisabled} aria-label={`${d.label}${d.isToday ? ', today' : ''}${d.openCount !== undefined ? `, ${d.openCount} open` : ''}`} className={cx('ds-day', d.isToday && 'is-today')}>
            <SelectionIndicator className="ds-day__indicator" />
            <span className="ds-day__dow">{d.weekday}</span>
            <span className="ds-day__date">{d.day}</span>
            {d.openCount !== undefined && <span className="ds-day__count">{d.openCount} open</span>}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <RadioGroup value={value ?? null} onChange={onChange} className="ds-stack ds-stack--12" isDisabled={isLoading}>
        <Label className="ds-slots__message">{summary}</Label>
        <div className="ds-slot-list">
          {slots.map((s) => {
            const state = s.state ?? 'open';
            return (
              <Radio key={s.id} value={s.id} isDisabled={state !== 'open'} className={cx('ds-slot', state !== 'open' && `ds-slot--${state}`)}>
                {({ isSelected }) => {
                  const look = STATE[isSelected ? 'chosen' : state];
                  return (
                    <>
                      <span className="ds-slot__time">{s.time}</span>
                      <span className="ds-slot__state"><Icon name={look.icon} size={16} weight={isSelected ? 'bold' : 'regular'} />{look.words}</span>
                    </>
                  );
                }}
              </Radio>
            );
          })}
        </div>
      </RadioGroup>
      {showLegend && (
        <ul className="ds-slots__legend" aria-label="Slot states">
          <li><span className="ds-slots__swatch" aria-hidden="true" />Open: solid outline</li>
          <li><span className="ds-slots__swatch ds-slots__swatch--chosen" aria-hidden="true" />Chosen: filled</li>
          <li><span className="ds-slots__swatch ds-slots__swatch--booked" aria-hidden="true" />Booked: hatched</li>
          <li><span className="ds-slots__swatch ds-slots__swatch--unavailable" aria-hidden="true" />Unavailable: struck</li>
        </ul>
      )}
      {isLoading && <p role="status" className="ds-slots__message"><Spinner /> Checking availability</p>}
      {errorMessage && <p role="alert" className="ds-field__error"><Icon name="warning-circle" size={16} weight="fill" />{errorMessage}</p>}
    </div>
  );
}

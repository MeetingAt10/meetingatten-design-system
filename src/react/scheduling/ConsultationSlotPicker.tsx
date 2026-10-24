"use client";
import { ToggleButtonGroup, ToggleButton, RadioGroup, Radio } from 'react-aria-components';

export interface ConsultationDay {
  id: string;
  /** Short weekday shown above the number, for example "W". */
  weekday: string;
  /** Day of the month, for example 21. */
  day: number | string;
  /** Full date for screen readers and the summary line, for example "Wed 21 Oct". */
  label: string;
}

export interface ConsultationSlot {
  id: string;
  /** For example "09:00–09:30". */
  time: string;
  state?: 'available' | 'booked' | 'unavailable';
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
  /** Group name, default "Consultation". */
  label?: string;
  isLoading?: boolean;
  /** For example "Couldn’t check this slot. Try again." */
  errorMessage?: string;
}

const STATE_TEXT = { available: '+ Available', booked: '— Booked', unavailable: '× Unavailable' } as const;

/** Scheduling / Consultation Slot picker: a day strip and one radio group of slots. Booked and unavailable slots are disabled and say so in text. */
export function ConsultationSlotPicker({ days, selectedDay, onDayChange, slots, value, onChange, timeZoneNote, label = 'Consultation', isLoading, errorMessage }: ConsultationSlotPickerProps) {
  const day = days.find((d) => d.id === selectedDay);
  const summary = `${day?.label ?? ''} · ${timeZoneNote}`;
  return (
    <div className="ds-stack">
      <ToggleButtonGroup
        aria-label={`${label} date`}
        selectionMode="single"
        disallowEmptySelection
        selectedKeys={[selectedDay]}
        onSelectionChange={(keys) => { const k = [...keys][0]; if (k !== undefined) onDayChange(String(k)); }}
        className="ds-days"
      >
        {days.map((d) => (
          <ToggleButton key={d.id} id={d.id} aria-label={d.label} className="ds-day">
            <small>{d.weekday}</small>{d.day}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>{summary}</p>
      <RadioGroup aria-label={`${label} time, ${summary}`} value={value ?? null} onChange={onChange} className="ds-slots">
        {slots.map((s) => {
          const state = s.state ?? 'available';
          return (
            <Radio key={s.id} value={s.id} isDisabled={state !== 'available'} className="ds-slot">
              {({ isSelected }) => (
                <>
                  <span className="ds-slot__time">{s.time}</span>
                  <span className="ds-slot__state">{isSelected ? '✓ Selected' : STATE_TEXT[state]}</span>
                </>
              )}
            </Radio>
          );
        })}
      </RadioGroup>
      {isLoading && <p role="status" className="ds-slot__msg" style={{ margin: 0 }}>Checking availability…</p>}
      {errorMessage && <p role="alert" className="ds-field__msg ds-field__msg--error">{errorMessage}</p>}
    </div>
  );
}

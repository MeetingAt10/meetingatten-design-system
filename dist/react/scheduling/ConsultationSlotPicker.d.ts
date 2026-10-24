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
/** Scheduling / Consultation Slot picker: a day strip and one radio group of slots. Booked and unavailable slots are disabled and say so in text. */
export declare function ConsultationSlotPicker({ days, selectedDay, onDayChange, slots, value, onChange, timeZoneNote, label, isLoading, errorMessage }: ConsultationSlotPickerProps): import("react").JSX.Element;

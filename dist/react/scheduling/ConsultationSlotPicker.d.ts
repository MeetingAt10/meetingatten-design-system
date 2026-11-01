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
    /** Always shown with the date, for example "Asia/Manila (PHT)". */
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
/** Consultation slot picker: a day strip (the chosen day is a solid block that slides) and one radio group of slot blocks. Booked and unavailable slots are disabled and say so in words. */
export declare function ConsultationSlotPicker({ days, selectedDay, onDayChange, slots, value, onChange, timeZoneNote, label, isLoading, errorMessage, showLegend, className }: ConsultationSlotPickerProps): import("react").JSX.Element;

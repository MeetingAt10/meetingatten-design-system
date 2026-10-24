"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ToggleButtonGroup, ToggleButton, RadioGroup, Radio } from 'react-aria-components';
const STATE_TEXT = { available: '+ Available', booked: '— Booked', unavailable: '× Unavailable' };
/** Scheduling / Consultation Slot picker: a day strip and one radio group of slots. Booked and unavailable slots are disabled and say so in text. */
export function ConsultationSlotPicker({ days, selectedDay, onDayChange, slots, value, onChange, timeZoneNote, label = 'Consultation', isLoading, errorMessage }) {
    const day = days.find((d) => d.id === selectedDay);
    const summary = `${day?.label ?? ''} · ${timeZoneNote}`;
    return (_jsxs("div", { className: "ds-stack", children: [_jsx(ToggleButtonGroup, { "aria-label": `${label} date`, selectionMode: "single", disallowEmptySelection: true, selectedKeys: [selectedDay], onSelectionChange: (keys) => { const k = [...keys][0]; if (k !== undefined)
                    onDayChange(String(k)); }, className: "ds-days", children: days.map((d) => (_jsxs(ToggleButton, { id: d.id, "aria-label": d.label, className: "ds-day", children: [_jsx("small", { children: d.weekday }), d.day] }, d.id))) }), _jsx("p", { className: "ds-type-body-small ds-secondary", style: { margin: 0 }, children: summary }), _jsx(RadioGroup, { "aria-label": `${label} time, ${summary}`, value: value ?? null, onChange: onChange, className: "ds-slots", children: slots.map((s) => {
                    const state = s.state ?? 'available';
                    return (_jsx(Radio, { value: s.id, isDisabled: state !== 'available', className: "ds-slot", children: ({ isSelected }) => (_jsxs(_Fragment, { children: [_jsx("span", { className: "ds-slot__time", children: s.time }), _jsx("span", { className: "ds-slot__state", children: isSelected ? '✓ Selected' : STATE_TEXT[state] })] })) }, s.id));
                }) }), isLoading && _jsx("p", { role: "status", className: "ds-slot__msg", style: { margin: 0 }, children: "Checking availability\u2026" }), errorMessage && _jsx("p", { role: "alert", className: "ds-field__msg ds-field__msg--error", children: errorMessage })] }));
}

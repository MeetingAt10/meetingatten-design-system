"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ToggleButtonGroup, ToggleButton, RadioGroup, Radio, SelectionIndicator, Label } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { Spinner } from '../feedback/Spinner.js';
import { cx } from '../lib/cx.js';
const STATE = {
    open: { words: 'Open', icon: 'plus' },
    booked: { words: 'Booked', icon: 'lock' },
    unavailable: { words: 'Unavailable', icon: 'prohibit' },
    chosen: { words: 'Chosen', icon: 'check' },
};
/** Consultation slot picker: a day strip (the chosen day is a solid block that slides) and one radio group of slot blocks. Booked and unavailable slots are disabled and say so in words. */
export function ConsultationSlotPicker({ days, selectedDay, onDayChange, slots, value, onChange, timeZoneNote, label = 'Consultation time', isLoading, errorMessage, showLegend = true, className }) {
    const day = days.find((d) => d.id === selectedDay);
    const summary = `${day?.label ?? ''} · ${timeZoneNote}`;
    return (_jsxs("div", { className: cx('ds-slots', className), children: [_jsx(ToggleButtonGroup, { "aria-label": `${label}: day`, selectionMode: "single", disallowEmptySelection: true, selectedKeys: [selectedDay], onSelectionChange: (keys) => { const k = [...keys][0]; if (k !== undefined)
                    onDayChange(String(k)); }, className: "ds-days", children: days.map((d) => (_jsxs(ToggleButton, { id: d.id, isDisabled: d.isDisabled, "aria-label": `${d.label}${d.isToday ? ', today' : ''}${d.openCount !== undefined ? `, ${d.openCount} open` : ''}`, className: cx('ds-day', d.isToday && 'is-today'), children: [_jsx(SelectionIndicator, { className: "ds-day__indicator" }), _jsx("span", { className: "ds-day__dow", children: d.weekday }), _jsx("span", { className: "ds-day__date", children: d.day }), d.openCount !== undefined && _jsxs("span", { className: "ds-day__count", children: [d.openCount, " open"] })] }, d.id))) }), _jsxs(RadioGroup, { value: value ?? null, onChange: onChange, className: "ds-stack ds-stack--12", isDisabled: isLoading, children: [_jsx(Label, { className: "ds-slots__message", children: summary }), _jsx("div", { className: "ds-slot-list", children: slots.map((s) => {
                            const state = s.state ?? 'open';
                            return (_jsx(Radio, { value: s.id, isDisabled: state !== 'open', className: cx('ds-slot', state !== 'open' && `ds-slot--${state}`), children: ({ isSelected }) => {
                                    const look = STATE[isSelected ? 'chosen' : state];
                                    return (_jsxs(_Fragment, { children: [_jsx("span", { className: "ds-slot__time", children: s.time }), _jsxs("span", { className: "ds-slot__state", children: [_jsx(Icon, { name: look.icon, size: 16, weight: isSelected ? 'bold' : 'regular' }), look.words] })] }));
                                } }, s.id));
                        }) })] }), showLegend && (_jsxs("ul", { className: "ds-slots__legend", "aria-label": "Slot states", children: [_jsxs("li", { children: [_jsx("span", { className: "ds-slots__swatch", "aria-hidden": "true" }), "Open: solid outline"] }), _jsxs("li", { children: [_jsx("span", { className: "ds-slots__swatch ds-slots__swatch--chosen", "aria-hidden": "true" }), "Chosen: filled"] }), _jsxs("li", { children: [_jsx("span", { className: "ds-slots__swatch ds-slots__swatch--booked", "aria-hidden": "true" }), "Booked: hatched"] }), _jsxs("li", { children: [_jsx("span", { className: "ds-slots__swatch ds-slots__swatch--unavailable", "aria-hidden": "true" }), "Unavailable: struck"] })] })), isLoading && _jsxs("p", { role: "status", className: "ds-slots__message", children: [_jsx(Spinner, {}), " Checking availability"] }), errorMessage && _jsxs("p", { role: "alert", className: "ds-field__error", children: [_jsx(Icon, { name: "warning-circle", size: 16, weight: "fill" }), errorMessage] })] }));
}

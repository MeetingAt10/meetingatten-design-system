"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { cx } from '../lib/cx.js';
/** Current local time as decimal hours (10:42 -> 10.7). */
export const hoursOf = (d) => d.getHours() + d.getMinutes() / 60;
/** "10:42" in 24-hour time. */
export const clockOf = (hours) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${String(h + Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
};
/**
 * The live time as decimal hours, updated every 30 seconds. Starts as `undefined` and fills in after mount,
 * so server and client render the same markup.
 */
export function useNow(intervalMs = 30_000) {
    const [now, setNow] = useState();
    useEffect(() => {
        const tick = () => setNow(hoursOf(new Date()));
        tick();
        const id = window.setInterval(tick, intervalMs);
        return () => window.clearInterval(id);
    }, [intervalMs]);
    return now;
}
/** Now-line: the present moment across a time grid (2px line, dot, and the time on a plate). Glides as time passes. Decorative: state the time in text where it matters. */
export function NowLine({ offset, label, className }) {
    return (_jsx("div", { className: cx('ds-now', className), style: { '--now': offset }, "aria-hidden": "true", children: label && _jsx("span", { className: "ds-now__label", children: label }) }));
}

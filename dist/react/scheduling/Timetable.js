"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useId, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { TimeBlock } from './TimeBlock.js';
import { NowLine, useNow, clockOf } from './NowLine.js';
import { spring } from '../lib/motion.js';
import { cx } from '../lib/cx.js';
/** Concurrent events share the day's width: greedy columns per day. */
function columns(events) {
    const sorted = [...events].sort((a, b) => a.start - b.start || b.end - a.end);
    const placed = new Map();
    let cluster = [];
    let clusterEnd = -Infinity;
    const flush = () => {
        const lanes = [];
        const cols = new Map();
        for (const e of cluster) {
            let c = lanes.findIndex((end) => end <= e.start);
            if (c === -1)
                c = lanes.length;
            lanes[c] = e.end;
            cols.set(e.id, c);
        }
        for (const e of cluster)
            placed.set(e.id, { col: cols.get(e.id), cols: lanes.length });
        cluster = [];
    };
    for (const e of sorted) {
        if (e.start >= clusterEnd && cluster.length)
            flush();
        cluster.push(e);
        clusterEnd = Math.max(clusterEnd, e.end);
    }
    if (cluster.length)
        flush();
    return placed;
}
/** Timetable: a ruled week (or day) sheet of time blocks, the now-line on today, and a hatched restricted band. Each day is a labeled section with its blocks in time order. */
export function Timetable({ label, days, events, startHour = 8, endHour = 17, now = 'live', band, headingLevel = 3, isolate = true, animate = true, className }) {
    const uid = useId();
    const reduce = useReducedMotion();
    const live = useNow();
    const hours = endHour - startHour;
    const nowHours = now === false ? undefined : now === 'live' ? live : now;
    const showNow = nowHours !== undefined && nowHours >= startHour && nowHours <= endHour && days.some((d) => d.isToday);
    const H = `h${headingLevel}`;
    // A visually hidden heading one level up, so the day heads never skip a level in the page outline.
    const Title = headingLevel >= 3 ? `h${headingLevel - 1}` : undefined;
    const drop = animate && !reduce;
    const scroller = useRef(null);
    let order = 0;
    // When the week is wider than the screen, open it scrolled so today is the first visible day.
    useEffect(() => {
        const el = scroller.current;
        const today = el?.querySelector('.ds-timetable__day-head.is-today');
        if (!el || !today || el.scrollWidth <= el.clientWidth)
            return;
        const timeCol = el.querySelector('.ds-timetable__corner')?.offsetWidth ?? 0;
        el.scrollLeft = today.offsetLeft - timeCol;
    }, [days]);
    return (_jsxs("div", { className: cx('ds-timetable', isolate && 'ds-isolate', className), role: "group", "aria-labelledby": Title ? `${uid}-title` : undefined, "aria-label": Title ? undefined : label, style: { '--tt-hours': hours }, children: [Title && _jsx(Title, { id: `${uid}-title`, className: "ds-visually-hidden", children: label }), _jsx("div", { className: "ds-timetable__scroller", ref: scroller, children: _jsxs("div", { className: "ds-timetable__grid", style: { '--tt-days': days.length }, children: [_jsx("div", { className: "ds-timetable__corner", "aria-hidden": "true" }), days.map((d) => (_jsxs(H, { id: `${uid}-${d.id}`, className: cx('ds-timetable__day-head', d.isToday && 'is-today'), "aria-label": d.fullLabel ? `${d.fullLabel}${d.isToday ? ', today' : ''}` : undefined, children: [_jsx("span", { className: "ds-timetable__dow", children: d.label }), d.date && _jsx("span", { className: "ds-timetable__date", children: d.date })] }, d.id))), _jsxs("div", { className: "ds-timetable__hours", "aria-hidden": "true", children: [Array.from({ length: hours }, (_, i) => i).filter((i) => !showNow || Math.abs(startHour + i - nowHours) > 0.4).map((i) => (_jsx("span", { style: { '--h': i }, children: clockOf(startHour + i) }, i))), showNow && _jsx("span", { className: "ds-timetable__now-time", style: { '--now': nowHours - startHour }, children: clockOf(nowHours) })] }), days.map((d) => {
                            const dayEvents = events.filter((e) => e.day === d.id).sort((a, b) => a.start - b.start);
                            const cols = columns(dayEvents);
                            return (_jsxs("div", { role: "group", className: cx("ds-timetable__day", d.isToday && "is-today"), "aria-labelledby": `${uid}-${d.id}`, children: [_jsx("ol", { className: "ds-timetable__events", children: dayEvents.map((e) => {
                                            const c = cols.get(e.id);
                                            const time = e.time ?? `${clockOf(e.start)}-${clockOf(e.end)}`;
                                            const delay = order++ * 0.025;
                                            return (_jsx(motion.li, { layout: drop ? 'position' : false, initial: drop ? { y: -6 } : false, animate: { y: 0 }, transition: { ...spring.snappy, delay }, className: "ds-timetable__event", style: { '--start': e.start - startHour, '--span': e.end - e.start, '--col': c.col, '--cols': c.cols }, children: _jsx(TimeBlock, { time: time, title: e.title, meta: e.meta, lane: e.lane, form: e.form, stateLabel: e.stateLabel, icon: e.icon, href: e.href, onPress: e.onPress, isSelected: e.isSelected }) }, e.id));
                                        }) }), d.isToday && showNow && _jsx(NowLine, { offset: nowHours - startHour })] }, d.id));
                        })] }) }), band && _jsx("div", { className: "ds-timetable__band", children: _jsx("div", { className: "ds-timetable__band-inner", children: band }) })] }));
}

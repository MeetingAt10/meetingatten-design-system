"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { cx } from '../lib/cx.js';
import { laneClass } from '../lib/lanes.js';
import { pointerFx } from './fx.js';
/** SpotlightCard: a Card whose lane-colored glow follows the pointer, optionally tilting. Marketing surfaces; the glow is hover-only and never carries information. */
export function SpotlightCard({ as = 'div', href, lane, tilt, className, ...rest }) {
    const Tag = (href ? 'a' : as);
    const ref = useRef(null);
    const frame = useRef(0);
    useEffect(() => () => cancelAnimationFrame(frame.current), []);
    const write = (vars) => {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => { for (const k in vars)
            ref.current?.style.setProperty(k, vars[k]); });
    };
    return (_jsx(Tag, { ...rest, ...(href ? { href } : {}), ref: ref, className: cx('ds-card', href && 'ds-card--link', 'ds-spotlight', laneClass('ds-spotlight', lane), tilt && 'ds-spotlight--tilt', className), onPointerMove: (e) => {
            if (!pointerFx())
                return;
            const r = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - r.left, y = e.clientY - r.top;
            write({ '--ds-sx': `${x}px`, '--ds-sy': `${y}px`, ...(tilt && { '--ds-tx': String((x / r.width - 0.5) * 2), '--ds-ty': String((y / r.height - 0.5) * 2) }) });
        }, onPointerLeave: () => tilt && write({ '--ds-tx': '0', '--ds-ty': '0' }) }));
}

"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { pointerFx } from './fx.js';
/** ParallaxScene: tracks the pointer over itself and writes `--ds-px` and `--ds-py`, which FloatingArt `depth` turns into travel. Does nothing on touch screens or under reduced motion. */
export function ParallaxScene({ as = 'div', strength = 1, ...rest }) {
    const Tag = as;
    const ref = useRef(null);
    const frame = useRef(0);
    useEffect(() => () => cancelAnimationFrame(frame.current), []);
    const write = (x, y) => {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
            ref.current?.style.setProperty('--ds-px', String(x));
            ref.current?.style.setProperty('--ds-py', String(y));
        });
    };
    return (_jsx(Tag, { ...rest, ref: ref, onPointerMove: (e) => {
            if (!pointerFx())
                return;
            const r = e.currentTarget.getBoundingClientRect();
            const unit = (v) => Math.max(-1, Math.min(1, v)) * strength;
            write(unit(((e.clientX - r.left) / r.width - 0.5) * 2), unit(((e.clientY - r.top) / r.height - 0.5) * 2));
        }, onPointerLeave: () => write(0, 0) }));
}

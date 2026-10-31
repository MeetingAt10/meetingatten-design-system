"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import NumberFlow from '@number-flow/react';
/** CountUp: a number that rolls up from 0 when it scrolls into view. The final value is always in the text for screen readers and no-JS; it shows at once under reduced motion. */
export function CountUp({ value, prefix, suffix, className }) {
    const ref = useRef(null);
    const [shown, setShown] = useState(0);
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined' || matchMedia('(prefers-reduced-motion: reduce)').matches)
            return setShown(value);
        const io = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) {
            setShown(value);
            io.disconnect();
        } }, { threshold: 0.4 });
        io.observe(ref.current);
        return () => io.disconnect();
    }, [value]);
    return (_jsxs("span", { ref: ref, className: className, children: [_jsxs("span", { className: "ds-visually-hidden", children: [prefix, value, suffix] }), _jsx("span", { "aria-hidden": "true", children: _jsx(NumberFlow, { value: shown, prefix: prefix, suffix: suffix }) })] }));
}

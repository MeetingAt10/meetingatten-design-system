"use client";
import { useEffect, useRef, useState } from 'react';
import NumberFlow from '@number-flow/react';

export interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** CountUp: a number that rolls up from 0 when it scrolls into view. The final value is always in the text for screen readers and no-JS; it shows at once under reduced motion. */
export function CountUp({ value, prefix, suffix, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || matchMedia('(prefers-reduced-motion: reduce)').matches) return setShown(value);
    const io = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { setShown(value); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, [value]);
  return (
    <span ref={ref} className={className}>
      <span className="ds-visually-hidden">{prefix}{value}{suffix}</span>
      <span aria-hidden="true"><NumberFlow value={shown} prefix={prefix} suffix={suffix} /></span>
    </span>
  );
}

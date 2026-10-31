"use client";
import { useEffect, useRef } from 'react';
import { pointerFx } from './fx.js';

export interface ParallaxSceneProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onPointerMove' | 'onPointerLeave'> {
  /** Element to render; default `div`. */
  as?: 'div' | 'section' | 'figure' | 'header' | 'span';
  /** Scales the pointer range written to `--ds-px` and `--ds-py` (-1 to 1 at the edges). Default 1. */
  strength?: number;
}

/** ParallaxScene: tracks the pointer over itself and writes `--ds-px` and `--ds-py`, which FloatingArt `depth` turns into travel. Does nothing on touch screens or under reduced motion. */
export function ParallaxScene({ as = 'div', strength = 1, ...rest }: ParallaxSceneProps) {
  const Tag = as as 'div';
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);
  const write = (x: number, y: number) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      ref.current?.style.setProperty('--ds-px', String(x));
      ref.current?.style.setProperty('--ds-py', String(y));
    });
  };
  return (
    <Tag
      {...rest}
      ref={ref}
      onPointerMove={(e) => {
        if (!pointerFx()) return;
        const r = e.currentTarget.getBoundingClientRect();
        const unit = (v: number) => Math.max(-1, Math.min(1, v)) * strength;
        write(unit(((e.clientX - r.left) / r.width - 0.5) * 2), unit(((e.clientY - r.top) / r.height - 0.5) * 2));
      }}
      onPointerLeave={() => write(0, 0)}
    />
  );
}

"use client";
import { useEffect, useRef } from 'react';
import { cx } from '../lib/cx.js';
import { laneClass, type Lane } from '../lib/lanes.js';
import { pointerFx } from './fx.js';

export interface SpotlightCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onPointerMove' | 'onPointerLeave'> {
  /** Element to render when there is no `href`; default `div`. */
  as?: 'div' | 'article' | 'li';
  /** Makes the whole card one link (an `a` element). Keep its content short: it becomes the link's name. */
  href?: string;
  /** Glow and edge color; default schedule (navy). */
  lane?: Exclude<Lane, 'restricted'>;
  /** Tilts toward the pointer (up to 6 degrees) and lifts on hover. */
  tilt?: boolean;
}

/** SpotlightCard: a Card whose lane-colored glow follows the pointer, optionally tilting. Marketing surfaces; the glow is hover-only and never carries information. */
export function SpotlightCard({ as = 'div', href, lane, tilt, className, ...rest }: SpotlightCardProps) {
  const Tag = (href ? 'a' : as) as 'div';
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);
  const write = (vars: Record<string, string>) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => { for (const k in vars) ref.current?.style.setProperty(k, vars[k]); });
  };
  return (
    <Tag
      {...rest}
      {...(href ? { href } : {})}
      ref={ref}
      className={cx('ds-card', href && 'ds-card--link', 'ds-spotlight', laneClass('ds-spotlight', lane), tilt && 'ds-spotlight--tilt', className)}
      onPointerMove={(e) => {
        if (!pointerFx()) return;
        const r = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        write({ '--ds-sx': `${x}px`, '--ds-sy': `${y}px`, ...(tilt && { '--ds-tx': String((x / r.width - 0.5) * 2), '--ds-ty': String((y / r.height - 0.5) * 2) }) });
      }}
      onPointerLeave={() => tilt && write({ '--ds-tx': '0', '--ds-ty': '0' })}
    />
  );
}

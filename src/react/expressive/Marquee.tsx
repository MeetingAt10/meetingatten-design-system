import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';

export interface MarqueeProps {
  /** The items of one lap (short labels, badges). Do not use ids in them: they are rendered twice. */
  children: React.ReactNode;
  /** Slide the other way. */
  reverse?: boolean;
  /** Seconds for one lap; default 48. */
  duration?: number;
  /** Accessible name; makes the marquee a labeled region. Leave out when it is only decoration. */
  label?: string;
  className?: string;
}

/** Marquee: an endless slow line of items. The second copy is hidden from assistive technology and inert. Pauses on hover and focus; static and wrapped under reduced motion. */
export function Marquee({ children, reverse, duration, label, className }: MarqueeProps) {
  return (
    <div
      className={cx('ds-marquee', reverse && 'ds-marquee--reverse', className)}
      role={label ? 'region' : undefined}
      aria-label={label}
      style={duration === undefined ? undefined : cssVars({ '--ds-marquee-duration': `${duration}s` })}
    >
      <div className="ds-marquee__track">
        <div className="ds-marquee__group">{children}</div>
        <div className="ds-marquee__group" aria-hidden="true" inert>{children}</div>
      </div>
    </div>
  );
}

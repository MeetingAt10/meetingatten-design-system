import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';

export interface OrbitProps {
  /** Items placed evenly around the ring, the first at the top. Keep them non-interactive: the ring turns. */
  items: React.ReactNode[];
  /** Radius of the ring in px; default 140. The component is twice this wide. */
  radius?: number;
  className?: string;
  /** The center. */
  children?: React.ReactNode;
}

/** Orbit: items on a dashed hairline ring that turns slowly while every item stays upright. Still under reduced motion. */
export function Orbit({ items, radius = 140, className, children }: OrbitProps) {
  return (
    <div className={cx('ds-orbit', className)} style={cssVars({ '--ds-orbit-radius': radius })}>
      {children && <div className="ds-orbit__core">{children}</div>}
      <div className="ds-orbit__ring">
        {items.map((item, i) => (
          <div key={i} className="ds-orbit__item" style={cssVars({ '--angle': `${(360 / items.length) * i - 90}deg` })}>
            <div className="ds-orbit__upright">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

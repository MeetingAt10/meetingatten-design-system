import { cx } from '../lib/cx.js';

export interface AuroraProps {
  className?: string;
}

/** Aurora: three slow lane-colored glows behind a hero or band. Decorative; put it in a positioned, isolated parent (`position: relative; isolation: isolate`). */
export function Aurora({ className }: AuroraProps) {
  return (
    <div className={cx('ds-aurora', className)} aria-hidden="true">
      <span className="ds-aurora__blob" />
      <span className="ds-aurora__blob" />
      <span className="ds-aurora__blob" />
    </div>
  );
}

export interface GridBackdropProps {
  className?: string;
}

/** GridBackdrop: the ruled time sheet, hour and half-hour hairlines fading out at the edges. Decorative; same parent rules as Aurora. */
export function GridBackdrop({ className }: GridBackdropProps) {
  return <div className={cx('ds-grid-backdrop', className)} aria-hidden="true" />;
}

import { cx } from '../lib/cx.js';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** `canvas` (default), `sheet` (a full-width paper band between rules) or `plate` (a navy band; one per page, usually the closing call to action). */
  tone?: 'canvas' | 'sheet' | 'plate';
  /** Tighter vertical rhythm. */
  tight?: boolean;
  /** Skip the centered container (full-bleed content). */
  bleed?: boolean;
}

/** Section: a full-width region with the density rhythm and a centered container. */
export function Section({ tone = 'canvas', tight, bleed, className, children, ...rest }: SectionProps) {
  return (
    <section {...rest} className={cx('ds-section', tone !== 'canvas' && `ds-section--${tone}`, tight && 'ds-section--tight', className)}>
      {bleed ? children : <div className="ds-container">{children}</div>}
    </section>
  );
}

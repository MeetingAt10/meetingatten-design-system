import { cx } from '../lib/cx.js';

export interface DoorPlateProps {
  /** Name on the plate (default "ACCS"). */
  name?: string;
  /** Room or section code after a rule ("CCS 304"). */
  code?: string;
  /** Short line beside the name (the tagline on large plates). */
  tagline?: string;
  /** 26px, 32px (default) or 48px tall. */
  size?: 'sm' | 'md' | 'lg';
  /** Outlined instead of solid. */
  outline?: boolean;
  /** Accessible name when the plate stands for the brand ("ACCS home"). */
  label?: string;
  className?: string;
}

/** Door plate: the faculty-door name plate, used as the ACCS wordmark (until a logo is approved), page plates and room labels. */
export function DoorPlate({ name = 'ACCS', code, tagline, size = 'md', outline, label, className }: DoorPlateProps) {
  return (
    <span className={cx('ds-plate', size !== 'md' && `ds-plate--${size}`, outline && 'ds-plate--outline', className)} {...(label ? { role: 'img', 'aria-label': label } : {})}>
      <span className="ds-plate__name">{name}</span>
      {code && <>{' '}<span className="ds-plate__code">{code}</span></>}
      {tagline && <>{' '}<span className="ds-plate__tagline">{tagline}</span></>}
    </span>
  );
}

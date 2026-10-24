import { cx } from '../lib/cx.js';
import { ICONS, type IconName } from './icons.js';

export type { IconName };

export interface IconProps {
  name: IconName;
  /** 16, 20 (default) or 24px. */
  size?: 16 | 20 | 24;
  /** Accessible name. Omit for decorative icons next to visible text (then hidden from assistive tech). */
  label?: string;
  className?: string;
}

/** Icon from the Figma set. Inline SVG: no sprite needed in the page. Strokes follow `currentColor`. */
export function Icon({ name, size = 20, label, className }: IconProps) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };
  return (
    <svg
      className={cx('ds-icon', size !== 20 && `ds-icon--${size}`, className)}
      viewBox="0 0 24 24"
      focusable="false"
      {...a11y}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}

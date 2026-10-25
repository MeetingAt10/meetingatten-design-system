import { Icon, type IconName, type IconWeight } from '../icon/Icon.js';
import type { Lane } from '../lib/lanes.js';
import { cx } from '../lib/cx.js';

export type TileTone = Lane | 'neutral' | 'success' | 'warning' | 'danger';

export interface TileProps {
  icon: IconName;
  tone?: TileTone;
  /** 32, 40 (default) or 56px. */
  size?: 'sm' | 'md' | 'lg';
  /** Duotone by default: its 20% layer reads as a highlighter on the block. */
  weight?: IconWeight;
  /** Accessible name; without it the tile is decorative (pair it with a visible heading). */
  label?: string;
  className?: string;
}

/** Tile: a small solid block in the lane color holding one icon. */
export function Tile({ icon, tone = 'schedule', size = 'md', weight = 'duotone', label, className }: TileProps) {
  return (
    <span
      className={cx('ds-tile', tone !== 'schedule' && `ds-tile--${tone}`, size !== 'md' && `ds-tile--${size}`, className)}
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    >
      <Icon name={icon} size={size === 'lg' ? 32 : size === 'sm' ? 16 : 20} weight={weight} />
    </span>
  );
}

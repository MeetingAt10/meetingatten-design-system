import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export type TileTone = 'info' | 'secondary' | 'accent' | 'neutral';

export interface TileProps {
  icon: IconName;
  tone?: TileTone;
  className?: string;
}

/** Tile: 48px decorative icon on a semantic tint. Pair it with a visible heading; the tile itself is hidden from assistive tech. */
export function Tile({ icon, tone = 'info', className }: TileProps) {
  return (
    <span className={cx('ds-tile', tone !== 'info' && `ds-tile--${tone}`, className)} aria-hidden="true">
      <Icon name={icon} size={24} />
    </span>
  );
}

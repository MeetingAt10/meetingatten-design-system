import type { Lane } from '../lib/lanes.js';
import { cx } from '../lib/cx.js';

export interface AvatarProps {
  /** Person's name: the accessible name, and the source of the initials. */
  name: string;
  /** Photo URL. Without it the avatar shows initials. */
  src?: string;
  /** 24, 32, 36 (default), 48 or 64px. */
  size?: 24 | 32 | 36 | 48 | 64;
  /** Tint of the initials avatar. */
  lane?: Exclude<Lane, 'restricted'> | 'neutral';
  /** Decorative when the name is already printed beside it. */
  decorative?: boolean;
  className?: string;
}

export const initials = (name: string) => name.replace(/\(.*?\)/g, '').trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? '').join('');

/** Avatar: a photo or initials on the lane wash. */
export function Avatar({ name, src, size = 36, lane = 'schedule', decorative, className }: AvatarProps) {
  const cls = cx('ds-avatar', size !== 36 && `ds-avatar--${size}`, lane !== 'schedule' && `ds-avatar--${lane}`, className);
  const a11y = decorative ? { 'aria-hidden': true as const } : { role: 'img', 'aria-label': name };
  return (
    <span className={cls} {...a11y}>
      {src ? <img src={src} alt="" /> : initials(name)}
    </span>
  );
}

export interface AvatarGroupProps {
  names: string[];
  /** How many avatars to show before "+N". */
  max?: number;
  size?: AvatarProps['size'];
  lane?: AvatarProps['lane'];
  className?: string;
}

/** Avatar group: overlapping avatars with a "+N" count; the whole group is named once ("Ana, Ben and 3 others"). */
export function AvatarGroup({ names, max = 3, size = 32, lane, className }: AvatarGroupProps) {
  const shown = names.slice(0, max);
  const more = names.length - shown.length;
  const label = more > 0 ? `${shown.join(', ')} and ${more} ${more === 1 ? 'other' : 'others'}` : shown.join(', ');
  return (
    <span className={cx('ds-avatar-group', className)} role="img" aria-label={label}>
      {shown.map((n) => <Avatar key={n} name={n} size={size} lane={lane} decorative />)}
      {more > 0 && <span className={cx('ds-avatar ds-avatar--more', size !== 36 && `ds-avatar--${size}`)} aria-hidden="true">+{more}</span>}
    </span>
  );
}

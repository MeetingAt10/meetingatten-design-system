import { cx } from '../lib/cx.js';

export interface AvatarProps {
  /** Person's name: the accessible name, and the source of the initials. */
  name: string;
  /** Photo URL. Without it the avatar shows initials. */
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const initials = (name: string) => name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? '').join('');

/** Avatar: initials or photo in a circle (24 / 32 / 40px). */
export function Avatar({ name, src, size = 'md', className }: AvatarProps) {
  const cls = cx('ds-avatar', size !== 'md' && `ds-avatar--${size}`, className);
  if (src) return <img className={cls} src={src} alt={name} />;
  return <span className={cls} role="img" aria-label={name}>{initials(name)}</span>;
}

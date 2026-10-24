import { Tile, type TileTone } from '../content/Tile.js';
import { Link } from '../navigation/Link.js';
import type { IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface FeatureRowProps {
  children: React.ReactNode;
  className?: string;
}

/** Feature Row: open columns (1 / 2 / 3 by breakpoint) of Feature items. No card around each item. */
export function FeatureRow({ children, className }: FeatureRowProps) {
  return <div className={cx('ds-features', className)}>{children}</div>;
}

export interface FeatureProps {
  icon: IconName;
  tone?: TileTone;
  title: React.ReactNode;
  /** Heading level; default 3. */
  level?: 3 | 4;
  children?: React.ReactNode;
  href?: string;
  linkLabel?: React.ReactNode;
}

/** Feature: tile, heading, short text and an optional link. */
export function Feature({ icon, tone, title, level = 3, children, href, linkLabel }: FeatureProps) {
  const H = level === 4 ? 'h4' : 'h3';
  return (
    <article className="ds-feature">
      <Tile icon={icon} tone={tone} />
      <H className="ds-type-h3">{title}</H>
      {children && <p className="ds-type-body ds-secondary">{children}</p>}
      {href && <Link href={href}>{linkLabel ?? 'Learn more'}</Link>}
    </article>
  );
}

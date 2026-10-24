import { Tile, type TileTone } from '../content/Tile.js';
import type { IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface EmptyStateProps {
  icon?: IconName;
  tone?: TileTone;
  title: React.ReactNode;
  /** Heading level; default 2. */
  level?: 2 | 3;
  /** What is missing and why, in plain words. */
  description?: React.ReactNode;
  /** One next step, for example a Button or Link. */
  action?: React.ReactNode;
  className?: string;
}

/** Feedback / Empty State: nothing to show yet, with one next step. Open content, not a card. */
export function EmptyState({ icon = 'info', tone = 'info', title, level = 2, description, action, className }: EmptyStateProps) {
  const H = level === 3 ? 'h3' : 'h2';
  return (
    <div className={cx('ds-empty', className)}>
      <Tile icon={icon} tone={tone} />
      <H className="ds-type-h3">{title}</H>
      {description && <p className="ds-type-body">{description}</p>}
      {action}
    </div>
  );
}

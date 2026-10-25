import { Tile, type TileTone } from '../content/Tile.js';
import { Spinner } from '../feedback/Spinner.js';
import type { IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export type ViewStateKind = 'loading' | 'empty' | 'error' | 'restricted';

export interface ViewStateProps {
  kind: ViewStateKind;
  title: React.ReactNode;
  /** What happened and what is possible now, in plain words. */
  description?: React.ReactNode;
  /** Next step (for example "Try again"). */
  actions?: React.ReactNode;
  className?: string;
}

const LOOK: Record<Exclude<ViewStateKind, 'loading'>, { icon: IconName; tone: TileTone }> = {
  empty: { icon: 'tray', tone: 'neutral' },
  error: { icon: 'warning-circle', tone: 'danger' },
  restricted: { icon: 'lock', tone: 'restricted' },
};

/** View state: what a data region shows when it is loading, empty, failed or restricted. Announced as a status. */
export function ViewState({ kind, title, description, actions, className }: ViewStateProps) {
  return (
    <div className={cx('ds-view-state', className)} role={kind === 'error' ? 'alert' : 'status'} aria-busy={kind === 'loading' || undefined}>
      {kind === 'loading' ? <Spinner size={32} /> : <Tile icon={LOOK[kind].icon} tone={LOOK[kind].tone} size="lg" />}
      <p className="ds-view-state__title">{title}</p>
      {description && <p className="ds-view-state__body">{description}</p>}
      {actions && <div className="ds-view-state__actions">{actions}</div>}
    </div>
  );
}

import { cx } from '../lib/cx.js';

export interface MobileHeaderProps {
  /** Left slot, usually the menu IconButton. */
  start?: React.ReactNode;
  /** Right slot, for example notifications. */
  end?: React.ReactNode;
  /** Wordmark. */
  children: React.ReactNode;
  className?: string;
}

/** Mobile header: menu, wordmark and actions in a sticky 56px bar. */
export function MobileHeader({ start, end, children, className }: MobileHeaderProps) {
  return (
    <header className={cx('ds-mobile-header', className)}>
      {start}
      <span className="ds-mobile-header__brand">{children}</span>
      {end && <span className="ds-mobile-header__actions">{end}</span>}
    </header>
  );
}

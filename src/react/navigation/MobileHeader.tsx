import { cx } from '../lib/cx.js';

export interface MobileHeaderProps {
  /** Left slot, usually the menu IconButton. */
  start?: React.ReactNode;
  /** Right slot, for example notifications. */
  end?: React.ReactNode;
  /** Centered logo or wordmark. */
  children: React.ReactNode;
  className?: string;
}

/** Navigation / Mobile Header: 72px bar with 44px controls on both sides and the logo centered. */
export function MobileHeader({ start, end, children, className }: MobileHeaderProps) {
  return (
    <header className={cx('ds-mobile-header', className)}>
      <span>{start}</span>
      <span className="ds-mobile-header__brand">{children}</span>
      <span>{end}</span>
    </header>
  );
}

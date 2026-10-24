import { cx } from '../lib/cx.js';

export interface SidebarProps {
  /** Accessible name of the navigation landmark. */
  label?: string;
  /** Logo at the top. */
  logo?: React.ReactNode;
  /** Bottom area, for example the role badge and its note. */
  footer?: React.ReactNode;
  /** NavItem elements. */
  children: React.ReactNode;
  className?: string;
}

/** Navigation / Sidebar: 240px admin navigation from 1024px; hidden below (use MobileHeader there). */
export function Sidebar({ label = 'Main', logo, footer, children, className }: SidebarProps) {
  return (
    <nav aria-label={label} className={cx('ds-sidebar', className)}>
      {logo}
      <div className="ds-sidebar__nav">{children}</div>
      {footer && <div className="ds-sidebar__role">{footer}</div>}
    </nav>
  );
}

/** Small note under the role badge, for example "Own reports only · proposed permission". */
export function SidebarNote({ children }: { children: React.ReactNode }) {
  return <p className="ds-sidebar__note">{children}</p>;
}

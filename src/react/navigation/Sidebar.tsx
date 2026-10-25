import { cx } from '../lib/cx.js';

export interface SidebarProps {
  /** Accessible name of the navigation landmark. */
  label?: string;
  /** Wordmark at the top: a DoorPlate on ACCS surfaces, the Logo on Meeting At 10. */
  brand?: React.ReactNode;
  /** Bottom area: the signed-in person, their role and a note. */
  footer?: React.ReactNode;
  /** NavItem elements, optionally grouped with SidebarSection. */
  children: React.ReactNode;
  className?: string;
}

/** Sidebar: the workspace rail from 1024px (AppShell moves it into a drawer below). */
export function Sidebar({ label = 'Main', brand, footer, children, className }: SidebarProps) {
  return (
    <aside className={cx('ds-sidebar', className)} aria-label={`${label} sidebar`}>
      {brand && <div className="ds-sidebar__brand">{brand}</div>}
      <nav aria-label={label} className="ds-sidebar__nav">{children}</nav>
      {footer && <div className="ds-sidebar__foot">{footer}</div>}
    </aside>
  );
}

/** A labeled group of NavItems inside the Sidebar. */
export function SidebarSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <p className="ds-sidebar__label">{label}</p>
      {children}
    </>
  );
}

/** Small note in the sidebar footer, for example "Own reports only (proposed permission)". */
export function SidebarNote({ children }: { children: React.ReactNode }) {
  return <p className="ds-sidebar__note">{children}</p>;
}

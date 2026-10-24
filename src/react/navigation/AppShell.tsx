import { cx } from '../lib/cx.js';

export interface AppShellProps {
  /** Usually a Sidebar. */
  sidebar?: React.ReactNode;
  /** Usually a TopBar (and a MobileHeader for small screens). */
  topBar?: React.ReactNode;
  /** Page content, rendered inside `<main>`. */
  children: React.ReactNode;
  className?: string;
}

/** App shell: sidebar beside a column of top bar and main content (admin). */
export function AppShell({ sidebar, topBar, children, className }: AppShellProps) {
  return (
    <div className={cx('ds-app', className)}>
      {sidebar}
      <div className="ds-app__main">
        {topBar}
        <main className="ds-app__content">{children}</main>
      </div>
    </div>
  );
}

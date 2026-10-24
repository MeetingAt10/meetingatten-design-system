import { cx } from '../lib/cx.js';

export interface TopBarProps {
  /** Workspace title (hidden under 600px). Not the page heading: keep the h1 in the content. */
  title?: React.ReactNode;
  /** Search, notifications and other tools, right-aligned. */
  tools?: React.ReactNode;
  className?: string;
}

/** Navigation / Top Bar: 72px admin header above the content. */
export function TopBar({ title, tools, className }: TopBarProps) {
  return (
    <header className={cx('ds-topbar', className)}>
      {title && <p className="ds-topbar__title">{title}</p>}
      {tools && <div className="ds-topbar__tools">{tools}</div>}
    </header>
  );
}

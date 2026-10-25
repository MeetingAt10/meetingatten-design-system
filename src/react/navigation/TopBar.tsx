import { cx } from '../lib/cx.js';

export interface TopBarProps {
  /** Page title shown in the strip. */
  title?: React.ReactNode;
  /** Element for the title: `p` (default, the page keeps its own h1) or `h1` when the strip is the page heading. */
  titleAs?: 'p' | 'h1';
  /** Search, notifications and other tools, right-aligned. */
  tools?: React.ReactNode;
  className?: string;
}

/** Top bar: the workspace title strip with tools on the right. */
export function TopBar({ title, titleAs: Title = 'p', tools, className }: TopBarProps) {
  return (
    <header className={cx('ds-topbar', className)}>
      <div className="ds-topbar__title">
        {title && <Title className="ds-topbar__heading">{title}</Title>}
      </div>
      {tools && <div className="ds-topbar__actions">{tools}</div>}
    </header>
  );
}

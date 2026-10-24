import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export type AlertTone = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  tone?: AlertTone;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** Default: `alert` for errors (announced at once), `status` otherwise. Use `note` for static guidance that is always on the page. */
  role?: 'alert' | 'status' | 'note';
  className?: string;
}

const ICON: Record<AlertTone, IconName> = { info: 'info', success: 'check', warning: 'alert', error: 'alert' };

/** Feedback / Inline Alert: persistent message next to the content it is about, with a tone bar, icon and title. */
export function Alert({ tone = 'info', title, children, role, className }: AlertProps) {
  return (
    <div role={role ?? (tone === 'error' ? 'alert' : 'status')} className={cx('ds-alert', tone !== 'info' && `ds-alert--${tone}`, className)}>
      <Icon name={ICON[tone]} />
      <div>
        <b className="ds-alert__title">{title}</b>
        {children && <span className="ds-alert__body">{children}</span>}
      </div>
    </div>
  );
}

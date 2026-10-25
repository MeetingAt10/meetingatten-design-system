import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export type AlertTone = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

export interface AlertProps {
  tone?: AlertTone;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** Icon on the tone block (defaults by tone). */
  icon?: IconName;
  /** Buttons or links under the text ("Try again"). */
  actions?: React.ReactNode;
  /** A close control, for dismissible notes. */
  onDismiss?: () => void;
  /** Default: `alert` for danger (announced at once), `status` otherwise. Use `note` for static guidance that is always on the page. */
  role?: 'alert' | 'status' | 'note';
  className?: string;
}

const ICON: Record<AlertTone, IconName> = { info: 'info', success: 'check-circle', warning: 'warning', danger: 'warning-circle', neutral: 'info' };

/** Inline alert: a persistent message next to the content it is about, its icon on a solid block in the tone color. */
export function Alert({ tone = 'info', title, children, icon, actions, onDismiss, role, className }: AlertProps) {
  return (
    <div role={role ?? (tone === 'danger' ? 'alert' : 'status')} className={cx('ds-alert', tone !== 'info' && `ds-alert--${tone}`, className)}>
      <span className="ds-alert__icon" aria-hidden="true"><Icon name={icon ?? ICON[tone]} size={16} weight="fill" /></span>
      <div className="ds-alert__content">
        <p className="ds-alert__title">{title}</p>
        {children && <div className="ds-alert__body">{children}</div>}
        {actions && <div className="ds-alert__actions">{actions}</div>}
      </div>
      {onDismiss && (
        <button type="button" className="ds-icon-btn ds-alert__close" aria-label="Dismiss" onClick={onDismiss}>
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}

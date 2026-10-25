"use client";
import { Link as AriaLink, type LinkProps as AriaLinkProps } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface LinkProps extends Omit<AriaLinkProps, 'className' | 'children'> {
  /** `inline` inside running text (default), `standalone` with an arrow that steps forward on hover, `quiet` for dense lists. */
  variant?: 'inline' | 'standalone' | 'quiet';
  /** Trailing icon for standalone links (default `arrow-right`; external links get `arrow-up-right`). */
  icon?: IconName;
  /** Opens in a new tab and says so to assistive tech. */
  external?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/** Link: links navigate, buttons act. External links say they open a new tab. */
export function Link({ variant = 'inline', icon, external, className, children, ...rest }: LinkProps) {
  const trailing = variant === 'standalone' || external ? (icon ?? (external ? 'arrow-up-right' : 'arrow-right')) : undefined;
  return (
    <AriaLink
      {...rest}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={cx('ds-link', variant !== 'inline' && `ds-link--${variant}`, className)}
    >
      {children}
      {external && <span className="ds-visually-hidden"> (opens in a new tab)</span>}
      {trailing && <Icon name={trailing} size={16} />}
    </AriaLink>
  );
}

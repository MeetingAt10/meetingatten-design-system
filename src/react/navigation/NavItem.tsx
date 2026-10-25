"use client";
import { Link as AriaLink, type LinkProps as AriaLinkProps } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface NavItemProps extends Omit<AriaLinkProps, 'className' | 'children'> {
  icon?: IconName;
  /** This item's page is open: a solid navy block, the icon in its fill weight, `aria-current="page"`. */
  isCurrent?: boolean;
  /** Count shown on the right (unread posts, open drafts). Repeat it in words where it matters. */
  count?: number;
  children: React.ReactNode;
  className?: string;
}

/** Navigation item: one sidebar or mobile-menu destination. */
export function NavItem({ icon, isCurrent, count, children, className, ...rest }: NavItemProps) {
  return (
    <AriaLink {...rest} aria-current={isCurrent ? 'page' : undefined} className={cx('ds-nav-item', className)}>
      {icon && <Icon name={icon} weight={isCurrent ? 'fill' : 'regular'} />}
      <span className="ds-nav-item__label">{children}</span>
      {count !== undefined && <span className="ds-nav-item__count">{count}</span>}
    </AriaLink>
  );
}

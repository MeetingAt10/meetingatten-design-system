"use client";
import { Link as AriaLink, type LinkProps as AriaLinkProps } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface NavItemProps extends Omit<AriaLinkProps, 'className' | 'children'> {
  icon?: IconName;
  /** The page this item points to is open (`aria-current="page"`, left bar and tint). */
  isCurrent?: boolean;
  children: React.ReactNode;
  className?: string;
}

/** Navigation / Item: one sidebar destination, 48px high. */
export function NavItem({ icon, isCurrent, children, className, ...rest }: NavItemProps) {
  return (
    <AriaLink {...rest} aria-current={isCurrent ? 'page' : undefined} className={cx('ds-nav-item', className)}>
      {icon && <Icon name={icon} />}
      {children}
    </AriaLink>
  );
}

"use client";
import { Link as AriaLink, type LinkProps as AriaLinkProps } from 'react-aria-components';
import { cx } from '../lib/cx.js';

export interface CardLinkProps extends Omit<AriaLinkProps, 'className' | 'children'> {
  className?: string;
  children?: React.ReactNode;
}

/** Card link: a card that is one link element (short cards with no other controls). Prefer `<Card link>` + `CardTitle href` when the card has a heading. */
export function CardLink({ className, children, ...rest }: CardLinkProps) {
  return (
    <AriaLink {...rest} className={cx('ds-card', 'ds-card--link', className)}>
      {children}
    </AriaLink>
  );
}

"use client";
import { Breadcrumbs as AriaBreadcrumbs, Breadcrumb, Link as AriaLink } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface BreadcrumbItem {
  label: string;
  /** Omit for the current page (the last item). */
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Accessible name of the navigation landmark. */
  label?: string;
  className?: string;
}

/** Navigation / Breadcrumbs: where this page sits; the last item is the current page and is not a link. */
export function Breadcrumbs({ items, label = 'Breadcrumbs', className }: BreadcrumbsProps) {
  return (
    <nav aria-label={label} className={className}>
      <AriaBreadcrumbs className="ds-breadcrumbs">
        {items.map((item, i) => (
          <Breadcrumb key={`${i}-${item.label}`} id={i} className={cx('ds-breadcrumb')}>
            <AriaLink href={item.href} className="ds-breadcrumb__link">{item.label}</AriaLink>
            {i < items.length - 1 && <Icon name="chevron" size={16} />}
          </Breadcrumb>
        ))}
      </AriaBreadcrumbs>
    </nav>
  );
}

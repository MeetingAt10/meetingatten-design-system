"use client";
import { Breadcrumbs as AriaBreadcrumbs, Breadcrumb, Link as AriaLink } from 'react-aria-components';

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

/** Breadcrumbs: where this page sits. The last item is the current page and is not a link. */
export function Breadcrumbs({ items, label = 'Breadcrumbs', className }: BreadcrumbsProps) {
  return (
    <nav aria-label={label} className={className}>
      <AriaBreadcrumbs className="ds-breadcrumbs">
        {items.map((item, i) => (
          <Breadcrumb key={`${i}-${item.label}`} id={i} className="ds-breadcrumbs__item">
            {item.href ? <AriaLink href={item.href} className="ds-breadcrumbs__link">{item.label}</AriaLink> : <span aria-current="page">{item.label}</span>}
          </Breadcrumb>
        ))}
      </AriaBreadcrumbs>
    </nav>
  );
}

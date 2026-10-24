"use client";
import { useId, useState } from 'react';
import { Link } from './Link.js';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';

export interface NavbarLink {
  label: string;
  href: string;
  /** Marks the link for the current page (`aria-current="page"`). */
  current?: boolean;
}

export interface NavbarProps {
  /** Logo or wordmark. */
  brand: React.ReactNode;
  brandHref?: string;
  /** Accessible name of the brand link, when `brand` is an image without text. */
  brandLabel?: string;
  links: NavbarLink[];
  /** Usually one primary action, for example "Sign in". */
  actions?: React.ReactNode;
  /** Accessible name of the navigation landmark. */
  label?: string;
  className?: string;
}

/** Navbar: landing top navigation. Under 1024px the links move into a panel opened by the menu button; Escape closes it. */
export function Navbar({ brand, brandHref = '/', brandLabel, links, actions, label = 'Main', className }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const items = links.map((l) => (
    <li key={l.href}>
      <Link href={l.href} aria-current={l.current ? 'page' : undefined}>{l.label}</Link>
    </li>
  ));
  return (
    <nav aria-label={label} className={cx('ds-navbar', className)} onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}>
      <a className="ds-navbar__brand" href={brandHref} aria-label={brandLabel}>{brand}</a>
      <ul className="ds-navbar__links">{items}</ul>
      <div className="ds-navbar__actions">
        {actions}
        <IconButton className="ds-navbar__toggle" icon={open ? 'close' : 'menu'} label="Menu" aria-expanded={open} aria-controls={panelId} onPress={() => setOpen(!open)} />
      </div>
      {open && <ul id={panelId} className="ds-navbar__panel">{items}</ul>}
    </nav>
  );
}

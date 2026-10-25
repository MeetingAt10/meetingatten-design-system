"use client";
import { useState } from 'react';
import { Link as AriaLink } from 'react-aria-components';
import { IconButton } from '../control/IconButton.js';
import { NavItem } from './NavItem.js';
import { Drawer } from '../feedback/Drawer.js';
import { cx } from '../lib/cx.js';

export interface NavbarLink {
  label: string;
  href: string;
  /** Marks the link for the current page (`aria-current="page"`, a 2px rule under it). */
  current?: boolean;
}

export interface NavbarProps {
  /** Wordmark: a DoorPlate on ACCS surfaces, the Logo on Meeting At 10. */
  brand: React.ReactNode;
  brandHref?: string;
  /** Accessible name of the brand link when `brand` has no text. */
  brandLabel?: string;
  links: NavbarLink[];
  /** Usually the one primary action, for example "Sign in". */
  actions?: React.ReactNode;
  /** Accessible name of the navigation landmark. */
  label?: string;
  /** Sits over the hero without a rule or fill (landing). */
  transparent?: boolean;
  className?: string;
}

/** Navbar: the landing and Meeting At 10 top navigation. Below 768px the links move into a drawer. */
export function Navbar({ brand, brandHref = '/', brandLabel, links, actions, label = 'Main', transparent, className }: NavbarProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cx('ds-navbar', transparent && 'ds-navbar--transparent', className)}>
      <div className="ds-container ds-navbar__inner">
        <AriaLink className="ds-navbar__brand" href={brandHref} aria-label={brandLabel}>{brand}</AriaLink>
        <nav aria-label={label} className="ds-navbar__links">
          {links.map((l) => (
            <AriaLink key={l.href} href={l.href} className="ds-navbar__link" aria-current={l.current ? 'page' : undefined}>{l.label}</AriaLink>
          ))}
        </nav>
        <div className="ds-navbar__actions">
          {actions}
          <IconButton className="ds-navbar__menu" icon="list" label="Open menu" tooltip={false} onPress={() => setOpen(true)} />
        </div>
      </div>
      <Drawer title="Menu" isOpen={open} onOpenChange={setOpen}>
        <nav aria-label={label} className="ds-navbar__sheet">
          {links.map((l) => (
            <NavItem key={l.href} href={l.href} isCurrent={l.current} onPress={() => setOpen(false)}>{l.label}</NavItem>
          ))}
        </nav>
      </Drawer>
    </header>
  );
}

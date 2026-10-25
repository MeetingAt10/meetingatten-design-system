"use client";
import { useState } from 'react';
import { MobileHeader } from './MobileHeader.js';
import { IconButton } from '../control/IconButton.js';
import { Drawer } from '../feedback/Drawer.js';
import { cx } from '../lib/cx.js';

export interface AppShellProps {
  /** Usually a Sidebar (shown from 1024px). */
  sidebar?: React.ReactNode;
  /** Usually a TopBar (shown from 1024px). */
  topBar?: React.ReactNode;
  /** Wordmark for the mobile header (below 1024px). */
  mobileBrand?: React.ReactNode;
  /** Navigation for the mobile drawer (usually the same NavItems as the sidebar). */
  mobileNav?: React.ReactNode;
  /** Actions on the right of the mobile header. */
  mobileActions?: React.ReactNode;
  /** Page content. */
  children: React.ReactNode;
  /** Element for the content column; `div` when the shell is embedded in a page that already has a `<main>` (previews, docs). */
  contentAs?: 'main' | 'div';
  /** id of the content column, the target of a skip link. */
  contentId?: string;
  /** Workspace density (`compact` for dense admin screens). */
  density?: 'comfortable' | 'compact';
  className?: string;
}

/** App shell: sidebar beside the top bar and content on desktop; a mobile header with a navigation drawer below 1024px. */
export function AppShell({ sidebar, topBar, mobileBrand, mobileNav, mobileActions, children, contentAs: Content = 'main', contentId, density, className }: AppShellProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cx('ds-shell', className)} data-density={density}>
      {sidebar}
      <div className="ds-shell__main">
        {mobileBrand && (
          <MobileHeader
            start={mobileNav ? <IconButton icon="list" label="Open navigation" onPress={() => setOpen(true)} tooltip={false} /> : undefined}
            end={mobileActions}
          >
            {mobileBrand}
          </MobileHeader>
        )}
        {topBar}
        <Content className="ds-shell__content" id={contentId} tabIndex={contentId ? -1 : undefined}>{children}</Content>
      </div>
      {mobileNav && (
        <Drawer title="Navigation" side="start" isOpen={open} onOpenChange={setOpen}>
          <nav aria-label="Main" className="ds-shell__drawer-nav" onClick={(e) => (e.target as HTMLElement).closest('a') && setOpen(false)}>
            {mobileNav}
          </nav>
        </Drawer>
      )}
    </div>
  );
}

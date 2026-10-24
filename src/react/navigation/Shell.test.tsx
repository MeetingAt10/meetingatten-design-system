import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { AppShell } from './AppShell.js';
import { Sidebar, SidebarNote } from './Sidebar.js';
import { NavItem } from './NavItem.js';
import { TopBar } from './TopBar.js';
import { MobileHeader } from './MobileHeader.js';
import { Badge } from '../badge/Badge.js';
import { IconButton } from '../control/IconButton.js';

const shell = () => (
  <AppShell
    sidebar={<Sidebar label="Workspace" footer={<><Badge>Student</Badge><SidebarNote>Own reports only</SidebarNote></>}>
      <NavItem href="/" icon="home" isCurrent>Overview</NavItem>
      <NavItem href="/reports" icon="report">My reports</NavItem>
    </Sidebar>}
    topBar={<TopBar title="College workspace" tools={<IconButton icon="bell" label="Notifications" />} />}
  >
    <h1>Overview</h1>
  </AppShell>
);

describe('app shell navigation', () => {
  it('renders sidebar items with the current page marked', () => {
    const { container } = render(shell());
    const nav = screen.getByRole('navigation', { name: 'Workspace' });
    expect(nav.className).toBe('ds-sidebar');
    const current = within(nav).getByRole('link', { name: 'Overview' });
    expect(current.getAttribute('aria-current')).toBe('page');
    expect(current.className).toBe('ds-nav-item');
    expect(within(nav).getByRole('link', { name: 'My reports' }).getAttribute('aria-current')).toBeNull();
    expect(container.querySelector('.ds-app > .ds-app__main > .ds-topbar + main.ds-app__content h1')).not.toBeNull();
    expect(screen.getByText('College workspace').className).toBe('ds-topbar__title');
  });
  it('MobileHeader centers the brand between two slots', () => {
    const { container } = render(<MobileHeader start={<IconButton icon="menu" label="Menu" />} end={<IconButton icon="bell" label="Notifications" />}>ACCS</MobileHeader>);
    const h = container.querySelector('header')!;
    expect(h.className).toBe('ds-mobile-header');
    expect(h.children[1].className).toBe('ds-mobile-header__brand');
  });
  it('has no axe violations (shell; mobile header on its own, since only one banner shows per breakpoint)', async () => {
    const a = render(shell());
    expect(await axeViolations(a.container)).toEqual([]);
    a.unmount();
    const b = render(<MobileHeader start={<IconButton icon="menu" label="Open menu" />}>ACCS</MobileHeader>);
    expect(await axeViolations(b.container)).toEqual([]);
  });
});

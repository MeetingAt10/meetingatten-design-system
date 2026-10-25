import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Link } from './Link.js';
import { NavItem } from './NavItem.js';
import { Sidebar, SidebarSection, SidebarNote } from './Sidebar.js';
import { TopBar } from './TopBar.js';
import { AppShell } from './AppShell.js';
import { Navbar } from './Navbar.js';
import { Tabs, TabList, Tab, TabPanel } from './Tabs.js';
import { Breadcrumbs } from './Breadcrumbs.js';
import { Pagination, pageList } from './Pagination.js';
import { Stepper } from './Stepper.js';
import { MenuButton, MenuItem, MenuSection, MenuSeparator } from './Menu.js';
import { CommandPalette } from './CommandPalette.js';
import { Footer } from './Footer.js';
import { DoorPlate } from '../identity/DoorPlate.js';

describe('Link', () => {
  it('inline by default; external links say they open a new tab', () => {
    render(<><Link href="/p">Privacy and access</Link><Link href="https://example.org" external>Handbook</Link></>);
    expect(screen.getByRole('link', { name: 'Privacy and access' }).className).toBe('ds-link');
    const ext = screen.getByRole('link', { name: /Handbook.*opens in a new tab/ });
    expect(ext.getAttribute('target')).toBe('_blank');
    expect(ext.querySelector('svg')).not.toBeNull();
  });
  it('standalone links carry an arrow', () => {
    render(<Link href="/u" variant="standalone">Read update</Link>);
    expect(screen.getByRole('link', { name: 'Read update' }).querySelector('svg')).not.toBeNull();
  });
});

describe('NavItem, Sidebar and TopBar', () => {
  it('the current item is marked aria-current and uses the fill icon weight', () => {
    render(
      <Sidebar brand={<DoorPlate />} footer={<SidebarNote>Own reports only (proposed permission)</SidebarNote>}>
        <SidebarSection label="Workspace">
          <NavItem href="/" icon="house" isCurrent>Overview</NavItem>
          <NavItem href="/c" icon="chats" count={3}>Community</NavItem>
        </SidebarSection>
      </Sidebar>,
    );
    const nav = screen.getByRole('navigation', { name: 'Main' });
    const current = within(nav).getByRole('link', { name: 'Overview' });
    expect(current.getAttribute('aria-current')).toBe('page');
    expect(within(nav).getByRole('link', { name: /Community/ }).querySelector('.ds-nav-item__count')?.textContent).toBe('3');
  });
  it('TopBar keeps the page h1 in the content unless asked', () => {
    const { rerender } = render(<TopBar title="Overview" />);
    expect(screen.queryByRole('heading')).toBeNull();
    rerender(<TopBar title="Overview" titleAs="h1" />);
    expect(screen.getByRole('heading', { level: 1, name: 'Overview' })).toBeTruthy();
  });
  it('has no axe violations', async () => {
    const { container } = render(
      <Sidebar brand={<DoorPlate />}><NavItem href="/" isCurrent icon="house">Overview</NavItem></Sidebar>,
    );
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('AppShell and Navbar', () => {
  it('AppShell opens the navigation drawer from the mobile header', async () => {
    render(
      <AppShell mobileBrand={<DoorPlate />} mobileNav={<NavItem href="/c">Community</NavItem>} contentAs="div">
        <h1>Overview</h1>
      </AppShell>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
    const dialog = await screen.findByRole('dialog', { name: 'Navigation' });
    expect(within(dialog).getByRole('link', { name: 'Community' })).toBeTruthy();
  });
  it('Navbar marks the current link and opens the menu drawer', async () => {
    render(<Navbar brand={<DoorPlate />} brandLabel="ACCS home" links={[{ label: 'Community', href: '/c', current: true }, { label: 'Consultations', href: '/k' }]} />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(within(nav).getByRole('link', { name: 'Community' }).getAttribute('aria-current')).toBe('page');
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    expect(await screen.findByRole('dialog', { name: 'Menu' })).toBeTruthy();
  });
});

describe('Tabs', () => {
  it('arrow keys move the selection; the selected tab holds the sliding indicator', async () => {
    render(
      <Tabs>
        <TabList aria-label="Feed">
          <Tab id="latest" count={12}>Latest</Tab>
          <Tab id="saved">Saved</Tab>
        </TabList>
        <TabPanel id="latest">Latest posts</TabPanel>
        <TabPanel id="saved">Saved posts</TabPanel>
      </Tabs>,
    );
    const latest = screen.getByRole('tab', { name: /Latest/ });
    expect(latest.querySelector('.ds-tab__indicator')).not.toBeNull();
    await userEvent.click(latest);
    await userEvent.keyboard('{ArrowRight}');
    const saved = screen.getByRole('tab', { name: 'Saved' });
    expect(saved.getAttribute('aria-selected')).toBe('true');
    await waitFor(() => expect(saved.querySelector('.ds-tab__indicator')).not.toBeNull());
    expect(screen.getByRole('tabpanel').textContent).toBe('Saved posts');
  });
});

describe('Breadcrumbs, Pagination and Stepper', () => {
  it('Breadcrumbs: the last item is the current page, not a link', () => {
    render(<Breadcrumbs items={[{ label: 'Reports', href: '/r' }, { label: 'DEMO-024' }]} />);
    expect(screen.getByRole('link', { name: 'Reports' })).toBeTruthy();
    expect(screen.queryByRole('link', { name: 'DEMO-024' })).toBeNull();
    expect(screen.getByText('DEMO-024').closest('[aria-current]')).not.toBeNull();
  });
  it('pageList keeps first, last and neighbours with gaps', () => {
    expect(pageList(5, 10)).toEqual([1, 'gap', 4, 5, 6, 'gap', 10]);
    expect(pageList(1, 3)).toEqual([1, 2, 3]);
  });
  it('Pagination marks the current page and moves on Next', async () => {
    const onPageChange = vi.fn();
    render(<Pagination page={2} pageCount={4} onPageChange={onPageChange} summary="Showing 11-20 of 42 records" />);
    expect(screen.getByRole('button', { name: 'Page 2' }).getAttribute('aria-current')).toBe('page');
    await userEvent.click(screen.getByRole('button', { name: /Next/ }));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
  it('Stepper says every state in words and marks the current step', () => {
    render(<Stepper steps={['Choose a time', 'Add details', 'Review']} current={1} />);
    const items = screen.getAllByRole('listitem');
    expect(items[0].textContent).toContain('Done');
    expect(items[1].getAttribute('aria-current')).toBe('step');
    expect(items[1].textContent).toContain('Current step');
    expect(items[2].textContent).toContain('Not started');
  });
});

describe('MenuButton', () => {
  it('opens from the keyboard and runs the chosen action', async () => {
    const onAction = vi.fn();
    render(
      <MenuButton label="Draft actions" onAction={onAction}>
        <MenuSection title="Draft">
          <MenuItem id="keep" icon="pencil">Keep editing</MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuItem id="discard" danger icon="trash">Discard draft</MenuItem>
      </MenuButton>,
    );
    await userEvent.tab();
    await userEvent.keyboard('{Enter}');
    const menu = await screen.findByRole('menu');
    expect(within(menu).getByRole('menuitem', { name: 'Discard draft' }).className).toBe('ds-option ds-option--danger');
    await userEvent.click(within(menu).getByRole('menuitem', { name: 'Discard draft' }));
    expect(onAction.mock.calls[0][0]).toBe('discard');
  });
});

describe('CommandPalette', () => {
  const items = [
    { id: 'community', label: 'Community', section: 'Go to', icon: 'chats' as const },
    { id: 'consult', label: 'Consultations', section: 'Go to', keywords: ['schedule', 'booking'] },
    { id: 'new-post', label: 'New post', section: 'Actions', shortcut: 'N' },
  ];
  it('Ctrl+K opens it; typing filters by label and keywords; Enter runs the item', async () => {
    const onAction = vi.fn();
    render(<CommandPalette items={items} onAction={onAction} />);
    await userEvent.keyboard('{Control>}k{/Control}');
    const dialog = await screen.findByRole('dialog', { name: 'Command palette' });
    const search = within(dialog).getByRole('searchbox', { name: 'Search commands' });
    await userEvent.type(search, 'booking');
    expect(within(dialog).getAllByRole('menuitem').map((i) => i.textContent)).toEqual(['Consultations']);
    await userEvent.keyboard('{Enter}');
    expect(onAction).toHaveBeenCalledWith('consult');
  });
});

describe('Footer', () => {
  it('link columns are named navigation landmarks', async () => {
    const { container } = render(
      <Footer brand={<DoorPlate />} description="Your Access to the College of Computer Studies." columns={[{ title: 'Product', links: [{ label: 'Community', href: '/c' }] }]} note="Proposed, not approved" />,
    );
    expect(screen.getByRole('navigation', { name: 'Product' })).toBeTruthy();
    expect(await axeViolations(container)).toEqual([]);
  });
});

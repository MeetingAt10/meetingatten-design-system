import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { MenuButton, MenuItem } from './Menu.js';
import { Footer } from './Footer.js';

describe('MenuButton', () => {
  it('opens from the keyboard and runs the chosen action', async () => {
    const onAction = vi.fn();
    render(<MenuButton label="Draft actions" onAction={onAction}><MenuItem id="keep">Keep draft</MenuItem><MenuItem id="discard" danger>Discard draft</MenuItem></MenuButton>);
    await userEvent.tab();
    await userEvent.keyboard('{Enter}');
    const menu = await screen.findByRole('menu');
    expect(menu.className).toBe('ds-listbox ds-menu');
    expect(screen.getByRole('menuitem', { name: 'Discard draft' }).className).toBe('ds-option ds-option--danger');
    await userEvent.keyboard('{ArrowDown}');
    expect(document.activeElement?.textContent).toBe('Discard draft');
    await userEvent.keyboard('{Enter}');
    expect(onAction.mock.calls[0][0]).toBe('discard'); // React Aria passes a second (undefined) argument
    expect(screen.queryByRole('menu')).toBeNull();
  });
  it('icon-only trigger uses the label as its name', () => {
    render(<MenuButton label="More actions" iconOnly><MenuItem id="a">A</MenuItem></MenuButton>);
    expect(screen.getByRole('button', { name: 'More actions' }).className).toBe('ds-icon-btn');
  });
  it('has no axe violations (closed, open)', async () => {
    const { container } = render(<MenuButton label="Draft actions"><MenuItem id="keep">Keep draft</MenuItem></MenuButton>);
    expect(await axeViolations(container)).toEqual([]);
    await userEvent.click(screen.getByRole('button', { name: /Draft actions/ }));
    await screen.findByRole('menu');
    expect(await axeViolations(document.body)).toEqual([]);
  });
});

describe('Footer', () => {
  it('renders link columns as named navigation and has no axe violations', async () => {
    const { container } = render(<Footer brand="ACCS" description="Your Access to the College of Computer Studies." columns={[{ title: 'Product', links: [{ label: 'Community', href: '/c' }] }, { title: 'Policy', links: [{ label: 'Privacy and access', href: '/p' }] }]} note="Proposed, not approved" />);
    expect(screen.getByRole('navigation', { name: 'Product' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Privacy and access' }).className).toBe('ds-link-inline');
    expect(container.querySelector('footer')!.className).toBe('ds-footer');
    expect(await axeViolations(container)).toEqual([]);
  });
});

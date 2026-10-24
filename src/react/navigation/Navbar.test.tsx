import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Navbar } from './Navbar.js';
import { Button } from '../control/Button.js';

const links = [{ label: 'Community', href: '/community', current: true }, { label: 'Consultations', href: '/consultations' }];

describe('Navbar', () => {
  it('names the landmark and marks the current link', () => {
    render(<Navbar brand="ACCS" links={links} actions={<Button>Sign in</Button>} />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(nav.className).toBe('ds-navbar');
    expect(within(nav).getByRole('link', { name: 'Community' }).getAttribute('aria-current')).toBe('page');
  });
  it('menu button opens and closes the panel; Escape closes it', async () => {
    render(<Navbar brand="ACCS" links={links} />);
    const toggle = screen.getByRole('button', { name: 'Menu' });
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    const panel = document.getElementById(toggle.getAttribute('aria-controls')!)!;
    expect(panel.className).toBe('ds-navbar__panel');
    expect(within(panel).getAllByRole('link')).toHaveLength(2);
    await userEvent.keyboard('{Escape}');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(document.querySelector('.ds-navbar__panel')).toBeNull();
  });
  it('has no axe violations (closed, open)', async () => {
    const { container } = render(<Navbar brand="ACCS" links={links} actions={<Button>Sign in</Button>} />);
    expect(await axeViolations(container)).toEqual([]);
    await userEvent.click(screen.getByRole('button', { name: 'Menu' }));
    expect(await axeViolations(container)).toEqual([]);
  });
});

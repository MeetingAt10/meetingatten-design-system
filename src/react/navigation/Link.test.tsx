import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Link } from './Link.js';

describe('Link', () => {
  it('renders a standalone or inline link', () => {
    render(<><Link href="/a">Community</Link><Link href="/b" inline>policy</Link></>);
    expect(screen.getByRole('link', { name: 'Community' }).className).toBe('ds-link');
    expect(screen.getByRole('link', { name: 'policy' }).className).toBe('ds-link-inline');
  });
  it('disabled: marked for CSS and not activated', async () => {
    const onPress = vi.fn();
    render(<Link href="/a" isDisabled onPress={onPress}>Reports</Link>);
    const a = screen.getByRole('link');
    expect(a.getAttribute('aria-disabled')).toBe('true');
    expect(a.dataset.disabled).toBe('true');
    await userEvent.click(a);
    expect(onPress).not.toHaveBeenCalled();
  });
  it('has no axe violations (default, inline, disabled)', async () => {
    const { container } = render(<p><Link href="/a">One</Link> <Link href="/b" inline>two</Link> <Link href="/c" isDisabled>three</Link></p>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

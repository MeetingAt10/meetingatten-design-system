import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Avatar } from './Avatar.js';

describe('Avatar', () => {
  it('shows initials with the name as accessible name', () => {
    render(<Avatar name="Demo  learner one" size="lg" />);
    const a = screen.getByRole('img', { name: 'Demo learner one' });
    expect(a.textContent).toBe('DL');
    expect(a.className).toBe('ds-avatar ds-avatar--lg');
  });
  it('renders a photo with alt text', () => {
    render(<Avatar name="Demo Learner" src="/p.jpg" size="sm" />);
    expect(screen.getByRole('img', { name: 'Demo Learner' }).tagName).toBe('IMG');
  });
  it('has no axe violations (initials, photo)', async () => {
    const { container } = render(<p><Avatar name="Demo Learner" /><Avatar name="Demo Adviser" src="/p.jpg" /></p>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Icon } from './Icon.js';

describe('Icon', () => {
  it('is decorative by default and sized by class', () => {
    const { container } = render(<Icon name="forum" size={16} />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('aria-hidden')).toBe('true');
    expect(svg.getAttribute('class')).toBe('ds-icon ds-icon--16');
    expect(svg.innerHTML).toContain('<path');
  });
  it('exposes a label as an image', () => {
    render(<Icon name="alert" label="Warning" />);
    expect(screen.getByRole('img', { name: 'Warning' }).getAttribute('class')).toBe('ds-icon');
  });
  it('has no axe violations (decorative and labeled)', async () => {
    const { container } = render(<p><Icon name="check" /> Saved <Icon name="alert" label="Warning" /></p>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Skeleton } from './Skeleton.js';

describe('Skeleton', () => {
  it('renders full and short decorative lines', () => {
    const { container } = render(<div aria-busy="true"><Skeleton /><Skeleton short /></div>);
    const [a, b] = container.querySelectorAll('.ds-skeleton');
    expect(a.className).toBe('ds-skeleton');
    expect(b.className).toBe('ds-skeleton ds-skeleton--short');
    expect(b.getAttribute('aria-hidden')).toBe('true');
  });
  it('has no axe violations', async () => {
    const { container } = render(<div aria-busy="true"><p>Loading reports</p><Skeleton /><Skeleton short /></div>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Spinner } from './Spinner.js';

describe('Spinner', () => {
  it('announces a status when labeled, hides itself otherwise', () => {
    const { container } = render(<><Spinner label="Loading reports" /><Spinner /></>);
    expect(screen.getByRole('status', { name: 'Loading reports' }).className).toBe('ds-spinner');
    expect(container.querySelectorAll('[aria-hidden="true"].ds-spinner')).toHaveLength(1);
  });
  it('has no axe violations', async () => {
    const { container } = render(<div><Spinner label="Loading" /><Spinner /></div>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

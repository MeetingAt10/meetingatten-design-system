import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Divider } from './Divider.js';

describe('Divider', () => {
  it('renders a thin rule', () => {
    render(<Divider />);
    expect(screen.getByRole('separator').className).toBe('ds-divider');
  });
  it('has no axe violations', async () => {
    const { container } = render(<div><p>A</p><Divider /><p>B</p></div>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

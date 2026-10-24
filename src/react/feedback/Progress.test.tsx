import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Progress } from './Progress.js';

describe('Progress', () => {
  it('exposes value, label and formatted value; sizes the fill', () => {
    const { container } = render(<Progress label="Upload" value={40} />);
    const bar = screen.getByRole('progressbar', { name: 'Upload' });
    expect(bar.getAttribute('aria-valuenow')).toBe('40');
    expect(screen.getByText('40%').className).toBe('ds-progress__value');
    expect((container.querySelector('.ds-progress__fill') as HTMLElement).style.width).toBe('40%');
  });
  it('indeterminate: no aria-valuenow (the CSS hook) and no value text', () => {
    render(<Progress label="Syncing" isIndeterminate />);
    const bar = screen.getByRole('progressbar', { name: 'Syncing' });
    expect(bar.getAttribute('aria-valuenow')).toBeNull();
    expect(screen.queryByText('%')).toBeNull();
  });
  it('has no axe violations (determinate, indeterminate)', async () => {
    const { container } = render(<div><Progress label="Upload" value={40} /><Progress label="Syncing" isIndeterminate /></div>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

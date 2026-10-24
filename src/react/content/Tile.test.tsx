import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Tile } from './Tile.js';

describe('Tile', () => {
  it.each(['info', 'secondary', 'accent', 'neutral'] as const)('maps tone %s and stays decorative', (tone) => {
    const { container } = render(<Tile icon="forum" tone={tone} />);
    const t = container.firstElementChild!;
    expect(t.className).toBe(tone === 'info' ? 'ds-tile' : `ds-tile ds-tile--${tone}`);
    expect(t.getAttribute('aria-hidden')).toBe('true');
    expect(t.querySelector('svg')!.getAttribute('class')).toBe('ds-icon ds-icon--24');
  });
  it('has no axe violations next to a heading', async () => {
    const { container } = render(<div><Tile icon="calendar" tone="accent" /><h3>Consultations</h3></div>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Badge, type BadgeTone } from './Badge.js';

const tones: BadgeTone[] = ['neutral', 'info', 'success', 'warning', 'danger', 'secondary', 'accent'];

describe('Badge', () => {
  it.each(tones)('maps tone %s', (tone) => {
    render(<Badge tone={tone}>Status</Badge>);
    expect(screen.getByText('Status').className).toBe(tone === 'neutral' ? 'ds-badge' : `ds-badge ds-badge--${tone}`);
  });
  it('has no axe violations in every tone', async () => {
    const { container } = render(<p>{tones.map((t) => <Badge key={t} tone={t}>{t}</Badge>)}</p>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Alert } from './Alert.js';
import { EmptyState } from './EmptyState.js';
import { Button } from '../control/Button.js';

describe('Alert', () => {
  it('maps tone to class, icon and role', () => {
    render(<><Alert title="Illustrative schedule">These times are examples.</Alert><Alert tone="error" title="We couldn’t sign you in">Check your email.</Alert><Alert tone="warning" role="note" title="Policy gate" /></>);
    expect(screen.getByRole('status').className).toBe('ds-alert');
    expect(screen.getByRole('alert').className).toBe('ds-alert ds-alert--error');
    expect(screen.getByRole('note').className).toBe('ds-alert ds-alert--warning');
    expect(screen.getByRole('alert').querySelector('svg.ds-icon')).not.toBeNull();
  });
  it('has no axe violations in every tone', async () => {
    const { container } = render(<div>{(['info', 'success', 'warning', 'error'] as const).map((t) => <Alert key={t} tone={t} role="note" title={t}>Body</Alert>)}</div>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('EmptyState', () => {
  it('renders a heading, text and one action without a card', async () => {
    const { container } = render(<main><h1>Reports</h1><EmptyState icon="report" title="No reports yet" description="Drafts you start appear here." action={<Button>Start a draft</Button>} /></main>);
    expect(screen.getByRole('heading', { level: 2, name: 'No reports yet' })).toBeTruthy();
    expect(container.querySelector('.ds-empty .ds-card')).toBeNull();
    expect(await axeViolations(container)).toEqual([]);
  });
});

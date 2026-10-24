import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Tooltip } from './Tooltip.js';
import { Popover } from './Popover.js';
import { IconButton } from '../control/IconButton.js';
import { Button } from '../control/Button.js';

describe('Tooltip', () => {
  it('shows on keyboard focus, labels the trigger and hides with Escape', async () => {
    render(<Tooltip content="Notifications"><IconButton icon="bell" label="Notifications" /></Tooltip>);
    await userEvent.tab();
    const tip = await screen.findByRole('tooltip');
    expect(tip.className).toBe('ds-tooltip');
    expect(screen.getByRole('button', { name: 'Notifications' }).getAttribute('aria-describedby')).toBe(tip.id);
    expect(await axeViolations(document.body)).toEqual([]);
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('tooltip')).toBeNull();
  });
});

describe('Popover', () => {
  it('opens a named non-modal dialog and closes with Escape', async () => {
    render(<Popover trigger={<Button variant="tertiary">What is a policy gate?</Button>} title="Policy gate"><p>Submission stays disabled until recipients and access rules are confirmed.</p></Popover>);
    await userEvent.click(screen.getByRole('button', { name: 'What is a policy gate?' }));
    const dialog = await screen.findByRole('dialog', { name: 'Policy gate' });
    expect(dialog.className).toBe('ds-popover-panel');
    expect(await axeViolations(document.body)).toEqual([]);
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});

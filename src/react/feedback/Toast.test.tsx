import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { ToastRegion, toast, ToastQueue, type ToastData } from './Toast.js';

describe('Toast', () => {
  it('shows queued toasts in a named region and dismisses them', async () => {
    const queue = new ToastQueue<ToastData>({ maxVisibleToasts: 3 });
    render(<ToastRegion queue={queue} />);
    act(() => { toast('Display preference updated', { description: 'Dark mode is on.', tone: 'success', timeout: 0, queue }); });
    const region = await screen.findByRole('region', { name: 'Notifications' });
    expect(region.className).toBe('ds-toast-region');
    const item = within(region).getByText('Display preference updated').closest('.ds-toast')!;
    expect(item.querySelector(':scope > svg.ds-icon')).not.toBeNull();
    expect(within(region).getByText('Dark mode is on.').className).toBe('ds-toast__body');
    expect(await axeViolations(document.body)).toEqual([]);
    await userEvent.click(within(region).getByRole('button', { name: 'Dismiss' }));
    expect(screen.queryByText('Display preference updated')).toBeNull();
  });
});

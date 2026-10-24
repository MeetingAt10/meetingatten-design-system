import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { IconButton } from './IconButton.js';

describe('IconButton', () => {
  it('uses the label as accessible name and maps inverse', () => {
    render(<IconButton icon="bell" label="Notifications" inverse />);
    expect(screen.getByRole('button', { name: 'Notifications' }).className).toBe('ds-icon-btn ds-icon-btn--inverse');
  });
  it('presses from the keyboard, not when disabled', async () => {
    const onPress = vi.fn();
    const { rerender } = render(<IconButton icon="close" label="Close" onPress={onPress} />);
    await userEvent.tab();
    await userEvent.keyboard(' ');
    expect(onPress).toHaveBeenCalledTimes(1);
    rerender(<IconButton icon="close" label="Close" onPress={onPress} isDisabled />);
    await userEvent.click(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
  it('has no axe violations (standard, inverse, disabled)', async () => {
    for (const p of [{}, { inverse: true }, { isDisabled: true }]) {
      const { container, unmount } = render(<IconButton icon="menu" label="Menu" {...p} />);
      expect(await axeViolations(container)).toEqual([]);
      unmount();
    }
  });
});

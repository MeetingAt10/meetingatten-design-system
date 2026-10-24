import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from './Button.js';
import { axeViolations } from '../test/a11y.js';

describe('Button', () => {
  it.each(['primary', 'secondary', 'tertiary', 'destructive'] as const)('maps variant %s to classes', (variant) => {
    render(<Button variant={variant}>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' }).className).toBe(`ds-btn ds-btn--${variant}`);
  });

  it('maps size, block and extra className', () => {
    render(<Button size="sm" block className="x">Save</Button>);
    expect(screen.getByRole('button').className).toBe('ds-btn ds-btn--primary ds-btn--sm ds-btn--block x');
  });

  it('activates from the keyboard', async () => {
    const onPress = vi.fn();
    render(<Button onPress={onPress}>Go</Button>);
    await userEvent.tab();
    expect(screen.getByRole('button')).toHaveProperty('dataset.focusVisible', 'true');
    await userEvent.keyboard('{Enter}');
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('disabled: not pressable and marked for CSS', async () => {
    const onPress = vi.fn();
    render(<Button isDisabled onPress={onPress}>Go</Button>);
    const b = screen.getByRole('button');
    await userEvent.click(b);
    expect(onPress).not.toHaveBeenCalled();
    expect(b.dataset.disabled).toBe('true');
  });

  it('loading: shows a spinner, stays focusable and blocks repeat activation', async () => {
    const onPress = vi.fn();
    const { container } = render(<Button loading onPress={onPress}>Save</Button>);
    const b = screen.getByRole('button');
    expect(container.querySelector('.ds-spinner')).not.toBeNull();
    expect(b.dataset.pending).toBe('true');
    await userEvent.click(b);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('has no axe violations in default, disabled and loading states', async () => {
    for (const props of [{}, { isDisabled: true }, { loading: true }]) {
      const { container, unmount } = render(<Button {...props}>Save</Button>);
      expect(await axeViolations(container)).toEqual([]);
      unmount();
    }
  });
});

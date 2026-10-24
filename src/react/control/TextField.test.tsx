import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { TextField } from './TextField.js';
import { TextArea } from './TextArea.js';

describe('TextField', () => {
  it('labels the input, shows help and required text', () => {
    render(<TextField label="College email" description="Use your college account." isRequired />);
    const input = screen.getByRole('textbox', { name: /College email/ });
    expect(input.className).toBe('ds-input');
    expect(screen.getByText('(required)')).toBeTruthy();
    expect(input.getAttribute('aria-describedby')).toBeTruthy();
  });
  it('shows the error only while invalid and keeps the typed text', async () => {
    const { rerender } = render(<TextField label="Password" errorMessage="Enter your password to continue." />);
    expect(screen.queryByText('Enter your password to continue.')).toBeNull();
    await userEvent.type(screen.getByRole('textbox'), 'abc');
    rerender(<TextField label="Password" errorMessage="Enter your password to continue." isInvalid />);
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(screen.getByText('Enter your password to continue.').className).toBe('ds-field__msg ds-field__msg--error');
    expect((input as HTMLInputElement).value).toBe('abc');
  });
  it('TextArea renders a multi-line field', async () => {
    render(<TextArea label="Add details" />);
    const ta = screen.getByRole('textbox', { name: 'Add details' });
    expect(ta.tagName).toBe('TEXTAREA');
    expect(ta.className).toBe('ds-textarea');
  });
  it('has no axe violations (default, invalid, disabled, textarea)', async () => {
    const { container } = render(<form>
      <TextField label="Name" description="As shown in college records." />
      <TextField label="Password" isInvalid errorMessage="Enter your password." />
      <TextField label="Reference" isDisabled defaultValue="DEMO-024" />
      <TextArea label="Details" />
    </form>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

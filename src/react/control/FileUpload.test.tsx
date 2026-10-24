import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { FileUpload } from './FileUpload.js';

describe('FileUpload', () => {
  it('chooses a file with the button and lists it', async () => {
    const onSelect = vi.fn();
    const { container } = render(<FileUpload label="Attachment" description="PDF up to 5 MB." acceptedFileTypes={['application/pdf']} onSelect={onSelect} />);
    expect(screen.getByRole('button', { name: 'Choose file' })).toBeTruthy();
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    await userEvent.upload(input, new File(['%PDF'], 'guide.pdf', { type: 'application/pdf' }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect.mock.calls[0][0][0].name).toBe('guide.pdf');
    expect(within(screen.getByRole('list', { name: 'Selected files' })).getByText('guide.pdf')).toBeTruthy();
  });
  it('disabled: zone and button are disabled', () => {
    const { container } = render(<FileUpload label="Attachment" isDisabled />);
    expect((container.querySelector('.ds-dropzone') as HTMLElement).dataset.disabled).toBe('true');
    expect(screen.getByRole('button', { name: 'Choose file' }).hasAttribute('disabled')).toBe(true);
  });
  it('has no axe violations (default, disabled)', async () => {
    const { container } = render(<div><FileUpload label="Attachment" description="PDF up to 5 MB." /><FileUpload label="Locked" isDisabled /></div>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

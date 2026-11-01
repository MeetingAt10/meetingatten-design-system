import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, waitFor, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Alert } from './Alert.js';
import { ToastRegion, toast, ToastQueue, type ToastData } from './Toast.js';
import { Modal, ModalBody, ModalActions, DialogTrigger } from './Modal.js';
import { Drawer } from './Drawer.js';
import { Popover } from './Popover.js';
import { EmptyState } from './EmptyState.js';
import { Progress } from './Progress.js';
import { Meter } from './Meter.js';
import { Spinner } from './Spinner.js';
import { PrivacyNotice } from './PrivacyNotice.js';
import { Disclosure, Accordion } from './Disclosure.js';
import { Button } from '../control/Button.js';

describe('Alert', () => {
  it('danger is announced at once; other tones are a status; the icon sits on a tone block', () => {
    render(<><Alert tone="danger" title="Couldn't save">Try again.</Alert><Alert title="Schedule updated">Check the timetable for the latest slots.</Alert></>);
    expect(screen.getByRole('alert').className).toBe('ds-alert ds-alert--danger');
    expect(screen.getByRole('status').querySelector('.ds-alert__icon svg')).not.toBeNull();
  });
  it('can be dismissed', async () => {
    const onDismiss = vi.fn();
    render(<Alert title="Saved" tone="success" onDismiss={onDismiss} />);
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(onDismiss).toHaveBeenCalled();
  });
});

describe('Toast', () => {
  it('toast() shows a message with its action; Dismiss closes it', async () => {
    const queue = new ToastQueue<ToastData>();
    const onUndo = vi.fn();
    render(<ToastRegion queue={queue} />);
    act(() => { toast('Draft saved', { queue, tone: 'success', description: 'CCS-2026-0142', action: { label: 'Undo', onAction: onUndo }, timeout: 0 }); });
    const region = await screen.findByRole('region', { name: /Notifications/ });
    expect(within(region).getByText('Draft saved')).toBeTruthy();
    await userEvent.click(within(region).getByRole('button', { name: 'Undo' }));
    expect(onUndo).toHaveBeenCalled();
    await waitFor(() => expect(screen.queryByText('Draft saved')).toBeNull());
  });
});

describe('Modal', () => {
  it('opens from its trigger, traps focus, closes with the close button and returns focus', async () => {
    render(
      <DialogTrigger>
        <Button variant="secondary">Edit details</Button>
        <Modal title="Edit details">
          <ModalBody><p>Change the subject of your consultation.</p></ModalBody>
          <ModalActions><Button slot="close" variant="secondary">Cancel</Button></ModalActions>
        </Modal>
      </DialogTrigger>,
    );
    const trigger = screen.getByRole('button', { name: 'Edit details' });
    await userEvent.click(trigger);
    const dialog = await screen.findByRole('dialog', { name: 'Edit details' });
    expect(dialog.contains(document.activeElement)).toBe(true);
    await userEvent.click(within(dialog).getByRole('button', { name: 'Close' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    await waitFor(() => expect(document.activeElement).toBe(trigger));
  });
  it('alertdialog has no close button and is not dismissed by clicking outside', async () => {
    render(
      <DialogTrigger>
        <Button variant="destructive">Discard draft</Button>
        <Modal title="Discard this draft?" role="alertdialog">
          {({ close }) => <ModalActions><Button variant="secondary" onPress={close}>Keep draft</Button></ModalActions>}
        </Modal>
      </DialogTrigger>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Discard draft' }));
    const dialog = await screen.findByRole('alertdialog', { name: 'Discard this draft?' });
    expect(within(dialog).queryByRole('button', { name: 'Close' })).toBeNull();
    expect(await axeViolations(document.body)).toEqual([]);
  });
});

describe('Drawer and Popover', () => {
  it('Drawer opens with its title and footer; the close button closes it', async () => {
    render(
      <DialogTrigger>
        <Button variant="secondary">Filters</Button>
        <Drawer title="Filter reports" footer={<Button>Apply</Button>}>Status and dates</Drawer>
      </DialogTrigger>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Filters' }));
    const dialog = await screen.findByRole('dialog', { name: 'Filter reports' });
    expect(within(dialog).getByRole('button', { name: 'Apply' })).toBeTruthy();
    await userEvent.click(within(dialog).getByRole('button', { name: 'Close' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });
  it('Popover is a labeled non-modal dialog', async () => {
    render(<Popover trigger={<Button variant="tertiary">About this time</Button>} title="Campus time">All times are local campus time.</Popover>);
    await userEvent.click(screen.getByRole('button', { name: 'About this time' }));
    expect(await screen.findByRole('dialog', { name: 'Campus time' })).toBeTruthy();
  });
});

describe('Progress, Meter and Spinner', () => {
  it('Progress exposes the value; indeterminate has no value', () => {
    render(<><Progress label="Uploading" value={40} hint="2 of 5 files" /><Progress label="Checking" isIndeterminate /></>);
    expect(screen.getByRole('progressbar', { name: 'Uploading' }).getAttribute('aria-valuenow')).toBe('40');
    expect(screen.getByRole('progressbar', { name: 'Checking' }).hasAttribute('aria-valuenow')).toBe(false);
  });
  it('Meter reads in words and turns high at 75%', () => {
    render(<Meter label="Slots taken" value={6} maxValue={8} valueLabel="6 of 8" />);
    const meter = screen.getByRole('meter', { name: 'Slots taken' });
    expect(meter.getAttribute('aria-valuetext')).toBe('6 of 8');
    expect(meter.className).toContain('ds-meter--high');
  });
  it('Spinner is a status only when labeled', () => {
    const { container } = render(<><Spinner /><Spinner label="Loading reports" size={24} /></>);
    expect(screen.getByRole('status', { name: 'Loading reports' }).className).toBe('ds-spinner ds-spinner--24');
    expect(container.querySelector('[aria-hidden="true"].ds-spinner')).not.toBeNull();
  });
});

describe('EmptyState, PrivacyNotice and Disclosure', () => {
  it('EmptyState: heading, reason and next step; the sheet art is decorative', async () => {
    const { container } = render(<EmptyState title="No consultations booked yet" description="Booked times appear here." action={<Button>Book a time</Button>} />);
    expect(screen.getByRole('heading', { level: 2, name: 'No consultations booked yet' })).toBeTruthy();
    expect(container.querySelector('svg.ds-empty__art')?.getAttribute('aria-hidden')).toBe('true');
    expect(await axeViolations(container)).toEqual([]);
  });
  it('PrivacyNotice is a section named by its title', () => {
    render(<PrivacyNotice title="Restricted record">Only you and assigned reviewers can open this record.</PrivacyNotice>);
    expect(screen.getByRole('region', { name: 'Restricted record' })).toBeTruthy();
  });
  it('Accordion opens one disclosure at a time', async () => {
    render(
      <Accordion>
        <Disclosure id="a" title="Is the community anonymous?">No. Posts show your name.</Disclosure>
        <Disclosure id="b" title="Who sees my reports?">Only you and assigned reviewers.</Disclosure>
      </Accordion>,
    );
    const first = screen.getByRole('button', { name: /anonymous/ });
    const second = screen.getByRole('button', { name: /reports/ });
    await userEvent.click(first);
    expect(first.getAttribute('aria-expanded')).toBe('true');
    await userEvent.click(second);
    expect(first.getAttribute('aria-expanded')).toBe('false');
    expect(second.getAttribute('aria-expanded')).toBe('true');
  });
});

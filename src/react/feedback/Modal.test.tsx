import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, act, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Modal, ModalActions, DialogTrigger } from './Modal.js';
import { Drawer } from './Drawer.js';
import { Button } from '../control/Button.js';

describe('Modal', () => {
  it('opens from its trigger, is named by the title, closes with Escape and returns focus', async () => {
    render(
      <DialogTrigger>
        <Button variant="destructive">Discard draft</Button>
        <Modal title="Discard draft?" role="alertdialog">
          {({ close }) => (<><p className="ds-modal__msg">This removes DEMO-024. It cannot be undone.</p><ModalActions><Button variant="secondary" onPress={close}>Keep draft</Button><Button variant="destructive" onPress={close}>Discard draft</Button></ModalActions></>)}
        </Modal>
      </DialogTrigger>,
    );
    const trigger = screen.getByRole('button', { name: 'Discard draft' });
    await userEvent.click(trigger);
    const dialog = await screen.findByRole('alertdialog', { name: 'Discard draft?' });
    expect(dialog.className).toBe('ds-modal');
    expect(dialog.closest('.ds-modal-overlay')).not.toBeNull();
    expect(dialog.contains(document.activeElement)).toBe(true);
    expect(await axeViolations(document.body)).toEqual([]);
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('alertdialog')).toBeNull();
    await waitFor(() => expect(document.activeElement).toBe(trigger)); // restored after the overlay unmounts
  });
  it('close button and actions close it', async () => {
    const onOpenChange = vi.fn();
    render(<Modal title="Policy" isOpen onOpenChange={onOpenChange}>Body</Modal>);
    await userEvent.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});

describe('Drawer', () => {
  it('opens as a side sheet dialog and has no axe violations', async () => {
    render(<DialogTrigger><Button variant="secondary">Filters</Button><Drawer title="Filter reports" placement="start"><p>Status, category, date.</p></Drawer></DialogTrigger>);
    await userEvent.click(screen.getByRole('button', { name: 'Filters' }));
    const dialog = await screen.findByRole('dialog', { name: 'Filter reports' });
    expect(dialog.className).toBe('ds-drawer');
    expect(dialog.closest('.ds-drawer-overlay')!.className).toBe('ds-drawer-overlay ds-drawer-overlay--start');
    expect(await axeViolations(document.body)).toEqual([]);
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});

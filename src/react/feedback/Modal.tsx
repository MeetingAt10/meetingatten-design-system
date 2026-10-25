"use client";
import { ModalOverlay, Modal as AriaModal, Dialog, Heading, DialogTrigger, type ModalOverlayProps } from 'react-aria-components';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';

export { DialogTrigger };

export interface ModalProps extends Omit<ModalOverlayProps, 'className' | 'children'> {
  /** Heading and accessible name. Name the object and the consequence ("Discard this draft?"). */
  title: React.ReactNode;
  /** Content, or a function receiving `close`. Put buttons in ModalActions. */
  children: React.ReactNode | ((options: { close: () => void }) => React.ReactNode);
  /** `alertdialog` for destructive confirmations (no close button; the actions decide). */
  role?: 'dialog' | 'alertdialog';
  /** 32rem (default) or 44rem. */
  size?: 'md' | 'lg';
  className?: string;
}

/** Modal: blocks the page for a decision. It rises into place (a bottom sheet on phones); focus is trapped; Escape closes; focus returns to the trigger. */
export function Modal({ title, children, role = 'dialog', size = 'md', className, ...rest }: ModalProps) {
  return (
    <ModalOverlay {...rest} isDismissable={rest.isDismissable ?? role === 'dialog'} className="ds-modal-overlay">
      <AriaModal className={cx('ds-modal', size === 'lg' && 'ds-modal--lg', className)}>
        <Dialog role={role} className="ds-modal__dialog">
          {({ close }) => (
            <>
              <header className="ds-modal__head">
                <Heading slot="title" className="ds-modal__title">{title}</Heading>
                {role === 'dialog' && <IconButton icon="x" label="Close" onPress={close} className="ds-modal__close" tooltip={false} />}
              </header>
              {typeof children === 'function' ? children({ close }) : children}
            </>
          )}
        </Dialog>
      </AriaModal>
    </ModalOverlay>
  );
}

/** The body of a Modal: explanatory text and fields. */
export function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className="ds-modal__body">{children}</div>;
}

/** The ruled action row at the bottom of a Modal (secondary first, primary last). */
export function ModalActions({ children }: { children: React.ReactNode }) {
  return <footer className="ds-modal__actions">{children}</footer>;
}

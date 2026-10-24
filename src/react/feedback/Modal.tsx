"use client";
import { ModalOverlay, Modal as AriaModal, Dialog, Heading, DialogTrigger, type ModalOverlayProps } from 'react-aria-components';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';

export { DialogTrigger };

export interface ModalProps extends Omit<ModalOverlayProps, 'className' | 'children'> {
  /** Dialog heading and accessible name. Name the object and the consequence ("Discard draft?"). */
  title: React.ReactNode;
  /** Content, or a function receiving `close`. */
  children: React.ReactNode | ((options: { close: () => void }) => React.ReactNode);
  /** Dialog role; `alertdialog` for destructive confirmations. */
  role?: 'dialog' | 'alertdialog';
  className?: string;
}

/** Feedback / Modal: blocks the page for a decision. Focus moves in and is trapped; Escape and the close button close it; focus returns to the trigger. */
export function Modal({ title, children, role = 'dialog', className, ...rest }: ModalProps) {
  return (
    <ModalOverlay {...rest} className="ds-modal-overlay">
      <AriaModal>
        <Dialog role={role} className={cx('ds-modal', className)}>
          {({ close }) => (
            <>
              <div className="ds-modal__head">
                <Heading slot="title" className="ds-type-h3">{title}</Heading>
                <IconButton icon="close" label="Close" onPress={close} />
              </div>
              {typeof children === 'function' ? children({ close }) : children}
            </>
          )}
        </Dialog>
      </AriaModal>
    </ModalOverlay>
  );
}

/** Two-column action row at the bottom of a Modal (secondary first, primary last). */
export function ModalActions({ children }: { children: React.ReactNode }) {
  return <div className="ds-modal__actions">{children}</div>;
}

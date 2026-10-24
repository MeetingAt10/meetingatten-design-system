"use client";
import { ModalOverlay, Modal as AriaModal, Dialog, Heading, type ModalOverlayProps } from 'react-aria-components';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';

export interface DrawerProps extends Omit<ModalOverlayProps, 'className' | 'children'> {
  title: React.ReactNode;
  children: React.ReactNode | ((options: { close: () => void }) => React.ReactNode);
  /** Side the sheet opens from. */
  placement?: 'end' | 'start';
  className?: string;
}

/** Feedback / Drawer: side sheet for secondary work (filters, details). Behaves like Modal: focus trapped, Escape closes. Open it with DialogTrigger or `isOpen`. */
export function Drawer({ title, children, placement = 'end', className, ...rest }: DrawerProps) {
  return (
    <ModalOverlay {...rest} isDismissable={rest.isDismissable ?? true} className={cx('ds-drawer-overlay', placement === 'start' && 'ds-drawer-overlay--start')}>
      <AriaModal className="ds-drawer-frame">
        <Dialog className={cx('ds-drawer', className)}>
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

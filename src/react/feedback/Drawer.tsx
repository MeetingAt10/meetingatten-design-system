"use client";
import { ModalOverlay, Modal as AriaModal, Dialog, Heading, type ModalOverlayProps } from 'react-aria-components';
import { motion, useReducedMotion, type PanInfo } from 'motion/react';
import { IconButton } from '../control/IconButton.js';
import { cx } from '../lib/cx.js';

export interface DrawerProps extends Omit<ModalOverlayProps, 'className' | 'children'> {
  title: React.ReactNode;
  children: React.ReactNode | ((options: { close: () => void }) => React.ReactNode);
  /** Edge it slides from: `end` (default), `start`, or `bottom` (a bottom sheet you can swipe down to close). */
  side?: 'end' | 'start' | 'bottom';
  /** Ruled action row at the bottom. */
  footer?: React.ReactNode;
  className?: string;
}

const SWIPE_CLOSE = 120;

/** Drawer: a sheet for secondary work that keeps the page in view (filters, record details, mobile navigation). Focus is trapped; Escape and the scrim close it. */
export function Drawer({ title, children, side = 'end', footer, className, ...rest }: DrawerProps) {
  const reduce = useReducedMotion();
  const swipe = side === 'bottom' && !reduce;
  return (
    <ModalOverlay {...rest} isDismissable={rest.isDismissable ?? true} className="ds-drawer-overlay">
      {({ state }) => (
        <AriaModal
          className={cx('ds-drawer', side !== 'end' && `ds-drawer--${side}`, className)}
          render={swipe ? ({ onDrag: _d, onDragStart: _ds, onDragEnd: _de, onAnimationStart: _as, ...props }) => (
            <motion.div
              {...props}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.6 }}
              dragSnapToOrigin
              onDragEnd={(_e: unknown, info: PanInfo) => { if (info.offset.y > SWIPE_CLOSE || info.velocity.y > 600) state.close(); }}
            />
          ) : undefined}
        >
          <Dialog className="ds-drawer__dialog">
            {({ close }) => (
              <>
                {side === 'bottom' && <div className="ds-drawer__handle" aria-hidden="true" />}
                <header className="ds-drawer__head">
                  <Heading slot="title" className="ds-drawer__title">{title}</Heading>
                  <IconButton icon="x" label="Close" onPress={close} tooltip={false} />
                </header>
                <div className="ds-drawer__body">{typeof children === 'function' ? children({ close }) : children}</div>
                {footer && <footer className="ds-drawer__foot">{footer}</footer>}
              </>
            )}
          </Dialog>
        </AriaModal>
      )}
    </ModalOverlay>
  );
}

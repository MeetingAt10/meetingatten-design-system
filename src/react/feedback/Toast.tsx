"use client";
import { flushSync } from 'react-dom';
import {
  UNSTABLE_ToastQueue as ToastQueue, UNSTABLE_ToastRegion as AriaToastRegion, UNSTABLE_Toast as AriaToast, UNSTABLE_ToastContent as ToastContent, Text, Button as AriaButton,
} from 'react-aria-components';
import { motion, useReducedMotion, type PanInfo } from 'motion/react';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface ToastData {
  title: string;
  description?: string;
  /** `success` shows a check. Errors belong in an inline Alert next to the content, not only in a toast. */
  tone?: 'neutral' | 'success';
  /** One quick action ("Undo"). */
  action?: { label: string; onAction: () => void };
}

// React Aria's toast API is UNSTABLE_ in 1.22.1 (pinned); a rename only touches this file.
// Removals run inside a view transition where the browser supports it, so a closing toast fades out.
const viewTransition = (fn: () => void) => {
  const doc = typeof document !== 'undefined' ? (document as Document & { startViewTransition?: (cb: () => void) => unknown }) : undefined;
  if (doc?.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) doc.startViewTransition(() => flushSync(fn));
  else fn();
};

/** The default queue used by `toast()` and `ToastRegion`. */
export const toastQueue = new ToastQueue<ToastData>({ maxVisibleToasts: 3, wrapUpdate: viewTransition });

const DEFAULT_TIMEOUT = 6000;

/** Shows a toast. Default timeout 6s (paused while hovered or focused); `timeout: 0` keeps it until dismissed. Returns its key. */
export function toast(title: string, options: Omit<ToastData, 'title'> & { timeout?: number; queue?: ToastQueue<ToastData> } = {}) {
  const { queue = toastQueue, timeout = DEFAULT_TIMEOUT, ...content } = options;
  return queue.add({ title, ...content }, timeout > 0 ? { timeout } : {});
}

export interface ToastRegionProps {
  queue?: ToastQueue<ToastData>;
  /** Accessible name of the region. */
  label?: string;
  className?: string;
}

const SWIPE_CLOSE = 90;

/** Toast region: render once near the app root; `toast()` adds messages. F6 moves focus to the region. Toasts can be swiped away. */
export function ToastRegion({ queue = toastQueue, label = 'Notifications', className }: ToastRegionProps) {
  const reduce = useReducedMotion();
  return (
    <AriaToastRegion queue={queue} aria-label={label} className={cx('ds-toast-region', className)}>
      {({ toast: t }) => (
        <AriaToast
          toast={t}
          style={{ viewTransitionName: `ds-toast-${t.key.replace(/[^\w-]/g, '')}` }}
          className={cx('ds-toast', t.content.tone === 'success' && 'ds-toast--success')}
          render={reduce ? undefined : ({ onDrag: _d, onDragStart: _ds, onDragEnd: _de, onAnimationStart: _as, ...props }) => (
            <motion.div
              {...props}
              drag="x"
              dragSnapToOrigin
              dragElastic={0.5}
              onDragEnd={(_e: unknown, info: PanInfo) => { if (Math.abs(info.offset.x) > SWIPE_CLOSE) queue.close(t.key); }}
            />
          )}
        >
          <span className="ds-toast__icon" aria-hidden="true">
            <Icon name={t.content.tone === 'success' ? 'check-circle' : 'info'} weight="fill" />
          </span>
          <ToastContent className="ds-toast__content">
            <Text slot="title" className="ds-toast__title">{t.content.title}</Text>
            {t.content.description && <Text slot="description" className="ds-toast__body">{t.content.description}</Text>}
            {t.content.action && (
              <span className="ds-toast__actions">
                <AriaButton className="ds-toast__action" onPress={() => { t.content.action?.onAction(); queue.close(t.key); }}>{t.content.action.label}</AriaButton>
              </span>
            )}
          </ToastContent>
          <AriaButton slot="close" className="ds-toast__close" aria-label="Dismiss">
            <Icon name="x" size={16} />
          </AriaButton>
          {t.timeout ? <span className="ds-toast__timer" aria-hidden="true" style={{ '--toast-duration': `${t.timeout}ms` } as React.CSSProperties} /> : null}
        </AriaToast>
      )}
    </AriaToastRegion>
  );
}

export { ToastQueue };

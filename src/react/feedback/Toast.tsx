"use client";
import {
  UNSTABLE_ToastQueue as ToastQueue, UNSTABLE_ToastRegion as AriaToastRegion, UNSTABLE_Toast as AriaToast, UNSTABLE_ToastContent as ToastContent, Text,
} from 'react-aria-components';
import { IconButton } from '../control/IconButton.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface ToastData {
  title: string;
  description?: string;
  /** `success` shows a check. Errors belong in an inline Alert next to the content, not in a toast. */
  tone?: 'neutral' | 'success';
}

// ponytail: React Aria's toast API is UNSTABLE_ in 1.22.1 (pinned); a rename only touches this file.
/** The default queue used by `toast()` and `ToastRegion`. */
export const toastQueue = new ToastQueue<ToastData>({ maxVisibleToasts: 3 });

/** Shows a toast. Default timeout 6s (paused while hovered or focused); pass `timeout: 0` to keep it until dismissed. Returns its key. */
export function toast(title: string, options: { description?: string; tone?: ToastData['tone']; timeout?: number; queue?: ToastQueue<ToastData> } = {}) {
  const { queue = toastQueue, timeout = 6000, ...content } = options;
  return queue.add({ title, ...content }, timeout > 0 ? { timeout } : {});
}

export interface ToastRegionProps {
  queue?: ToastQueue<ToastData>;
  /** Accessible name of the region. */
  label?: string;
  className?: string;
}

/** Feedback / Toast: render once near the app root; `toast()` adds messages. F6 moves focus to the region. */
export function ToastRegion({ queue = toastQueue, label = 'Notifications', className }: ToastRegionProps) {
  return (
    <AriaToastRegion queue={queue} aria-label={label} className={cx('ds-toast-region', className)}>
      {({ toast: t }) => (
        <AriaToast toast={t} className="ds-toast">
          {t.content.tone === 'success' && <Icon name="check" />}
          <ToastContent className="ds-toast__content">
            <Text slot="title" className="ds-toast__title">{t.content.title}</Text>
            {t.content.description && <Text slot="description" className="ds-toast__body">{t.content.description}</Text>}
          </ToastContent>
          <IconButton slot="close" icon="close" label="Dismiss" inverse />
        </AriaToast>
      )}
    </AriaToastRegion>
  );
}

export { ToastQueue };

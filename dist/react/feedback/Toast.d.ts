import { UNSTABLE_ToastQueue as ToastQueue } from 'react-aria-components';
export interface ToastData {
    title: string;
    description?: string;
    /** `success` shows a check. Errors belong in an inline Alert next to the content, not in a toast. */
    tone?: 'neutral' | 'success';
}
/** The default queue used by `toast()` and `ToastRegion`. */
export declare const toastQueue: ToastQueue<ToastData>;
/** Shows a toast. Default timeout 6s (paused while hovered or focused); pass `timeout: 0` to keep it until dismissed. Returns its key. */
export declare function toast(title: string, options?: {
    description?: string;
    tone?: ToastData['tone'];
    timeout?: number;
    queue?: ToastQueue<ToastData>;
}): string;
export interface ToastRegionProps {
    queue?: ToastQueue<ToastData>;
    /** Accessible name of the region. */
    label?: string;
    className?: string;
}
/** Feedback / Toast: render once near the app root; `toast()` adds messages. F6 moves focus to the region. */
export declare function ToastRegion({ queue, label, className }: ToastRegionProps): import("react").JSX.Element;
export { ToastQueue };

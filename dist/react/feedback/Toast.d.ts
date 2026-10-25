import { UNSTABLE_ToastQueue as ToastQueue } from 'react-aria-components';
export interface ToastData {
    title: string;
    description?: string;
    /** `success` shows a check. Errors belong in an inline Alert next to the content, not only in a toast. */
    tone?: 'neutral' | 'success';
    /** One quick action ("Undo"). */
    action?: {
        label: string;
        onAction: () => void;
    };
}
/** The default queue used by `toast()` and `ToastRegion`. */
export declare const toastQueue: ToastQueue<ToastData>;
/** Shows a toast. Default timeout 6s (paused while hovered or focused); `timeout: 0` keeps it until dismissed. Returns its key. */
export declare function toast(title: string, options?: Omit<ToastData, 'title'> & {
    timeout?: number;
    queue?: ToastQueue<ToastData>;
}): string;
export interface ToastRegionProps {
    queue?: ToastQueue<ToastData>;
    /** Accessible name of the region. */
    label?: string;
    className?: string;
}
/** Toast region: render once near the app root; `toast()` adds messages. F6 moves focus to the region. Toasts can be swiped away. */
export declare function ToastRegion({ queue, label, className }: ToastRegionProps): import("react").JSX.Element;
export { ToastQueue };

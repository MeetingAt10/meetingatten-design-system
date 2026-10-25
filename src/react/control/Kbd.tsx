import { cx } from '../lib/cx.js';

export interface KbdProps {
  /** One key ("K") or several keys pressed together (["Ctrl", "K"]). */
  keys: string | string[];
  className?: string;
}

/** Keyboard key: keycaps for a shortcut, read as one phrase ("Ctrl K"). */
export function Kbd({ keys, className }: KbdProps) {
  const list = Array.isArray(keys) ? keys : [keys];
  if (list.length === 1) return <kbd className={cx('ds-kbd', className)}>{list[0]}</kbd>;
  return (
    <kbd className={cx('ds-kbd-combo', className)}>
      {list.map((k) => <kbd key={k} className="ds-kbd">{k}</kbd>)}
    </kbd>
  );
}

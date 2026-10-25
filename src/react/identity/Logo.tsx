import { cx } from '../lib/cx.js';

export interface LogoProps {
  /** Name beside the mark (default "Meeting At 10"). */
  name?: string;
  /** Short code after the name, past a thin rule ("DS 1.0"). */
  code?: string;
  /** Only the calendar mark. Give it a `label`, unless the name is printed right beside it. */
  markOnly?: boolean;
  /** Mark 24px, 32px (default), 48px or 64px; the name scales with it. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** On an inverse ground (a dark bar in the light theme, a light one in dark): the frame and page swap. */
  inverse?: boolean;
  /** Accessible name when the logo stands for the brand on its own ("Meeting At 10 home"). */
  label?: string;
  className?: string;
}

/**
 * Logo: the Meeting At 10 calendar mark, the design system's main logo, with the name beside it. The artwork comes
 * from assets/logo/meeting-at-10.svg; its frame and page follow the theme, so the calendar keeps its shape on dark grounds.
 */
export function Logo({ name = 'Meeting At 10', code, markOnly, size = 'md', inverse, label, className }: LogoProps) {
  return (
    <span className={cx('ds-logo', size !== 'md' && `ds-logo--${size}`, inverse && 'ds-logo--inverse', className)} {...(label ? { role: 'img', 'aria-label': label } : {})}>
      <svg className="ds-logo__mark" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
        <rect className="ds-logo__frame" x="24" y="64" width="464" height="440" rx="88" />
        <rect className="ds-logo__page" x="62" y="104" width="388" height="362" rx="48" />
        <rect className="ds-logo__frame" x="130" y="24" width="48" height="116" rx="24" />
        <rect className="ds-logo__frame" x="334" y="24" width="48" height="116" rx="24" />
        <rect className="ds-logo__block" x="82" y="182" width="348" height="250" rx="58" />
        <path className="ds-logo__numeral" d="M141 246a8 8 0 0 1 5-7l39-15a15 15 0 0 1 5-1h24a9 9 0 0 1 9 9v143a9 9 0 0 1-9 9h-29a9 9 0 0 1-9-9V270l-26 7a7 7 0 0 1-9-7v-24Z" />
        <path className="ds-logo__numeral" fillRule="evenodd" d="M314 221c-46 0-73 34-73 83s27 83 73 83 73-34 73-83-27-83-73-83Zm0 43c-17 0-26 14-26 40s9 40 26 40 26-14 26-40-9-40-26-40Z" />
      </svg>
      {!markOnly && <span className="ds-logo__name">{name}</span>}
      {!markOnly && code && <>{' '}<span className="ds-logo__code">{code}</span></>}
    </span>
  );
}

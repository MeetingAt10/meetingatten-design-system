"use client";
import { Link as AriaLink } from 'react-aria-components';
import { cx } from '../lib/cx.js';

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface FooterProps {
  /** Wordmark: a DoorPlate on ACCS surfaces, the Logo on Meeting At 10. */
  brand?: React.ReactNode;
  description?: React.ReactNode;
  /** Link columns; each becomes a navigation landmark named by its title. */
  columns?: FooterColumn[];
  /** Status note on the bottom line, for example "Proposed, not approved". */
  note?: React.ReactNode;
  /** Text on the right of the bottom line. */
  meta?: React.ReactNode;
  className?: string;
}

/** Footer: the wordmark and description, link columns, and the bottom line for status notes. */
export function Footer({ brand, description, columns = [], note, meta, className }: FooterProps) {
  return (
    <footer className={cx('ds-footer', className)}>
      <div className="ds-container">
        <div className="ds-footer__grid" style={{ '--footer-cols': Math.max(columns.length, 1) } as React.CSSProperties}>
          {(brand || description) && (
            <div className="ds-footer__brand">
              {brand}
              {description && <p className="ds-footer__description">{description}</p>}
            </div>
          )}
          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title} className="ds-footer__col">
              <p className="ds-footer__title">{c.title}</p>
              <ul className="ds-footer__links">
                {c.links.map((l) => <li key={l.href}><AriaLink className="ds-footer__link" href={l.href}>{l.label}</AriaLink></li>)}
              </ul>
            </nav>
          ))}
        </div>
        {(note || meta) && (
          <div className="ds-footer__bottom">
            {note && <p style={{ margin: 0 }}>{note}</p>}
            {meta && <p style={{ margin: 0 }}>{meta}</p>}
          </div>
        )}
      </div>
    </footer>
  );
}

import { Link } from './Link.js';
import { cx } from '../lib/cx.js';

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface FooterProps {
  /** Logo or wordmark. */
  brand?: React.ReactNode;
  description?: React.ReactNode;
  columns?: FooterColumn[];
  /** Status note, for example "Proposed, not approved". */
  note?: React.ReactNode;
  className?: string;
}

/** Footer: brand, link columns and the status note. */
export function Footer({ brand, description, columns = [], note, className }: FooterProps) {
  return (
    <footer className={cx('ds-footer', className)}>
      <div className="ds-container ds-footer__grid">
        {(brand || description) && (
          <div className="ds-stack">
            {brand}
            {description && <p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>{description}</p>}
          </div>
        )}
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <p className="ds-type-label" style={{ margin: 0 }}>{c.title}</p>
            <ul className="ds-footer__links">
              {c.links.map((l) => <li key={l.href}><Link href={l.href} inline>{l.label}</Link></li>)}
            </ul>
          </nav>
        ))}
        {note && <p className="ds-tag-mono">{note}</p>}
      </div>
    </footer>
  );
}

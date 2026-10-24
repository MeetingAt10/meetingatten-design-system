import { cx } from '../lib/cx.js';

export interface SectionHeaderProps {
  /** Short mono label above the heading. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** Heading level; default 2 (use 1 when it heads the page). The visual size stays H1. */
  level?: 1 | 2 | 3;
  description?: React.ReactNode;
  /** Optional action, for example a Link or secondary Button. */
  action?: React.ReactNode;
  className?: string;
}

/** Section Header: eyebrow, heading, lead and optional action above a section. */
export function SectionHeader({ eyebrow, title, level = 2, description, action, className }: SectionHeaderProps) {
  const H = (`h${level}`) as 'h1' | 'h2' | 'h3';
  return (
    <header className={cx('ds-section-header', className)}>
      {eyebrow && <p className="ds-eyebrow">{eyebrow}</p>}
      <H className="ds-type-h1">{title}</H>
      {description && <p className="ds-type-body-large ds-secondary ds-reading">{description}</p>}
      {action}
    </header>
  );
}

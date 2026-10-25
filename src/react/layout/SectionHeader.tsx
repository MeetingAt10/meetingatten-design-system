import { cx } from '../lib/cx.js';

export interface SectionHeaderProps {
  title: React.ReactNode;
  /** Heading level; default 2 (1 when it heads the page, which also sets the page-title size). */
  level?: 1 | 2 | 3;
  description?: React.ReactNode;
  /** Buttons or links; on the right from 768px when `split`. */
  actions?: React.ReactNode;
  split?: boolean;
  /** id of the heading, to name the section (`aria-labelledby`). */
  id?: string;
  className?: string;
}

/** Section header: the heading carries its own weight (no label above it), an optional description and actions. */
export function SectionHeader({ title, level = 2, description, actions, split, id, className }: SectionHeaderProps) {
  const H = `h${level}` as 'h1' | 'h2' | 'h3';
  return (
    <header className={cx('ds-section-header', level === 1 && 'ds-section-header--page', split && 'ds-section-header--split', className)}>
      <H id={id} className="ds-section-header__title">{title}</H>
      {description && <p className="ds-section-header__description">{description}</p>}
      {actions && <div className="ds-section-header__actions">{actions}</div>}
    </header>
  );
}

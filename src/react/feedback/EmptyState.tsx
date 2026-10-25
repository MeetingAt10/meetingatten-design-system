import { cx } from '../lib/cx.js';

export interface EmptyStateProps {
  /** What is missing ("No consultations booked yet"). */
  title: React.ReactNode;
  /** Heading level; default 2. */
  level?: 2 | 3;
  /** Why it is empty, in plain words. */
  description?: React.ReactNode;
  /** One next step, for example a Button or Link. */
  action?: React.ReactNode;
  className?: string;
}

/** The empty ruled sheet: a small week grid with dashed, unfilled slots and one waiting block. Geometry, not illustration. */
function EmptySheet() {
  return (
    <svg className="ds-empty__art" viewBox="0 0 132 92" aria-hidden="true" focusable="false">
      <rect className="ds-empty__sheet" x="0.5" y="0.5" width="131" height="91" rx="8" />
      {[22, 46, 70].map((y) => <line key={y} className="ds-empty__rule" x1="1" x2="131" y1={y} y2={y} />)}
      {[34, 66, 98].map((x) => <line key={x} className="ds-empty__rule" x1={x} x2={x} y1="1" y2="91" />)}
      <rect className="ds-empty__slot" x="38" y="26" width="24" height="16" rx="3" />
      <rect className="ds-empty__slot" x="70" y="50" width="24" height="16" rx="3" />
      <rect className="ds-empty__slot" x="6" y="50" width="24" height="16" rx="3" />
      <rect className="ds-empty__block" x="102" y="26" width="24" height="40" rx="3" />
    </svg>
  );
}

/** Empty state: nothing to show yet, with the reason and one next step. Open content, not a card. */
export function EmptyState({ title, level = 2, description, action, className }: EmptyStateProps) {
  const H = level === 3 ? 'h3' : 'h2';
  return (
    <div className={cx('ds-empty', className)}>
      <EmptySheet />
      <H className="ds-empty__title">{title}</H>
      {description && <p className="ds-empty__body">{description}</p>}
      {action && <div className="ds-empty__actions">{action}</div>}
    </div>
  );
}

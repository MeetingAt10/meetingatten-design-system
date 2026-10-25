"use client";
import { Button as AriaButton } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface PaginationProps {
  /** Current page, 1-based. */
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  /** Text on the left, for example "Showing 11-20 of 42 records". */
  summary?: React.ReactNode;
  /** Accessible name of the navigation landmark. */
  label?: string;
  className?: string;
}

/** First, last and the pages around the current one, with gaps in between. */
export function pageList(page: number, pageCount: number): Array<number | 'gap'> {
  const keep = [...new Set([1, pageCount, page - 1, page, page + 1])].filter((p) => p >= 1 && p <= pageCount).sort((a, b) => a - b);
  return keep.flatMap((p, i) => (i > 0 && p - keep[i - 1] > 1 ? ['gap' as const, p] : [p]));
}

/** Pagination: previous, page blocks (the current one solid) and next. */
export function Pagination({ page, pageCount, onPageChange, summary, label = 'Pages', className }: PaginationProps) {
  return (
    <nav aria-label={label} className={cx('ds-pagination', className)}>
      {summary && <p className="ds-pagination__summary">{summary}</p>}
      <AriaButton className="ds-page ds-page--step" isDisabled={page <= 1} onPress={() => onPageChange(page - 1)}>
        <Icon name="caret-left" size={16} />Previous
      </AriaButton>
      {pageList(page, pageCount).map((p, i) =>
        p === 'gap' ? (
          <span key={`gap-${i}`} className="ds-page ds-page--gap" aria-hidden="true">…</span>
        ) : (
          <AriaButton key={p} className="ds-page" aria-label={`Page ${p}`} aria-current={p === page ? 'page' : undefined} onPress={() => onPageChange(p)}>
            {p}
          </AriaButton>
        ),
      )}
      <AriaButton className="ds-page ds-page--step" isDisabled={page >= pageCount} onPress={() => onPageChange(page + 1)}>
        Next<Icon name="caret-right" size={16} />
      </AriaButton>
    </nav>
  );
}

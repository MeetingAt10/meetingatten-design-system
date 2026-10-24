"use client";
import { Button as AriaButton } from 'react-aria-components';
import { Button } from '../control/Button.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface PaginationProps {
  /** Current page, 1-based. */
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  /** Accessible name of the navigation landmark. */
  label?: string;
  className?: string;
}

/** First, last and the pages around the current one, with gaps in between. */
export function pageList(page: number, pageCount: number): Array<number | 'gap'> {
  const keep = [...new Set([1, pageCount, page - 1, page, page + 1])].filter((p) => p >= 1 && p <= pageCount).sort((a, b) => a - b);
  return keep.flatMap((p, i) => (i > 0 && p - keep[i - 1] > 1 ? ['gap' as const, p] : [p]));
}

/** Navigation / Pagination: previous, numbered pages and next. */
export function Pagination({ page, pageCount, onPageChange, label = 'Pagination', className }: PaginationProps) {
  return (
    <nav aria-label={label} className={cx('ds-pagination', className)}>
      <Button variant="tertiary" size="sm" className="ds-pagination__prev" isDisabled={page <= 1} onPress={() => onPageChange(page - 1)}>
        <Icon name="chevron" size={16} />Previous
      </Button>
      <ul>
        {pageList(page, pageCount).map((p, i) =>
          p === 'gap' ? (
            <li key={`gap-${i}`} className="ds-pagination__gap" aria-hidden="true">…</li>
          ) : (
            <li key={p}>
              <AriaButton className="ds-pagination__page" aria-label={`Page ${p}`} aria-current={p === page ? 'page' : undefined} onPress={() => onPageChange(p)}>
                {p}
              </AriaButton>
            </li>
          ),
        )}
      </ul>
      <Button variant="tertiary" size="sm" isDisabled={page >= pageCount} onPress={() => onPageChange(page + 1)}>
        Next<Icon name="chevron" size={16} />
      </Button>
    </nav>
  );
}

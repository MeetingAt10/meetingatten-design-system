"use client";
import { SearchField, Input, Button, type SearchFieldProps } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface SearchProps extends Omit<SearchFieldProps, 'className' | 'children' | 'aria-label'> {
  /** Accessible name (the search box has no visible label). */
  label: string;
  placeholder?: string;
  className?: string;
}

/** Control / Search: compact search box with a clear button. Escape clears. */
export function Search({ label, placeholder, className, ...rest }: SearchProps) {
  return (
    <SearchField {...rest} aria-label={label} className={cx('ds-search', className)}>
      <Icon name="search" size={16} />
      <Input placeholder={placeholder} />
      <Button className="ds-search__clear">
        <Icon name="close" size={16} />
      </Button>
    </SearchField>
  );
}

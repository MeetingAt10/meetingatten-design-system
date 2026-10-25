"use client";
import { SearchField, Input, Button as AriaButton, Label, type SearchFieldProps } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface SearchProps extends Omit<SearchFieldProps, 'className' | 'children'> {
  /** Accessible name. Visible when `showLabel` is set; otherwise it names the field for assistive tech only. */
  label: string;
  showLabel?: boolean;
  placeholder?: string;
  /** 40px instead of 48px. */
  size?: 'sm' | 'md';
  className?: string;
}

/** Search: a text field with a magnifier and a clear button; Escape clears, Enter submits (`onSubmit`). */
export function Search({ label, showLabel, placeholder, size = 'md', className, ...rest }: SearchProps) {
  return (
    <SearchField {...rest} className={cx('ds-field', className)}>
      <Label className={showLabel ? 'ds-field__label' : 'ds-visually-hidden'}>{label}</Label>
      <div className="ds-input-group">
        <Icon name="search" className="ds-input-group__icon" />
        <Input className={cx('ds-input', size === 'sm' && 'ds-input--sm')} placeholder={placeholder} />
        <AriaButton className="ds-icon-btn ds-input-group__action" aria-label="Clear search">
          <Icon name="x" size={16} />
        </AriaButton>
      </div>
    </SearchField>
  );
}

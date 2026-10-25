"use client";
import { ToggleButtonGroup, ToggleButton, SelectionIndicator, type ToggleButtonGroupProps, type ToggleButtonProps, type Key } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface SegmentedControlProps extends Omit<ToggleButtonGroupProps, 'className' | 'children' | 'selectionMode' | 'selectedKeys' | 'defaultSelectedKeys' | 'onSelectionChange'> {
  /** Accessible name for the group ("Calendar view"). */
  'aria-label'?: string;
  /** The chosen segment. */
  selectedKey?: Key;
  defaultSelectedKey?: Key;
  onSelectionChange?: (key: Key) => void;
  /** Stretch segments to fill the width. */
  block?: boolean;
  children: React.ReactNode;
  className?: string;
}

/** Segmented control: one choice among 2-5 views; the paper chip slides to the chosen segment. */
export function SegmentedControl({ selectedKey, defaultSelectedKey, onSelectionChange, block, children, className, ...rest }: SegmentedControlProps) {
  return (
    <ToggleButtonGroup
      {...rest}
      selectionMode="single"
      disallowEmptySelection
      selectedKeys={selectedKey !== undefined ? [selectedKey] : undefined}
      defaultSelectedKeys={defaultSelectedKey !== undefined ? [defaultSelectedKey] : undefined}
      onSelectionChange={(keys) => { const [k] = [...keys]; if (k !== undefined) onSelectionChange?.(k); }}
      className={cx('ds-segmented', block && 'ds-segmented--block', className)}
    >
      {children}
    </ToggleButtonGroup>
  );
}

export interface SegmentProps extends Omit<ToggleButtonProps, 'className' | 'children'> {
  id: Key;
  icon?: IconName;
  children: React.ReactNode;
  className?: string;
}

/** One option of a SegmentedControl. */
export function Segment({ icon, children, className, ...rest }: SegmentProps) {
  return (
    <ToggleButton {...rest} className={cx('ds-segment', className)}>
      <SelectionIndicator className="ds-segment__indicator" />
      {icon && <Icon name={icon} size={16} />}
      {children}
    </ToggleButton>
  );
}

"use client";
import { MenuTrigger, Menu, MenuItem as AriaMenuItem, Popover, type Key, type MenuItemProps as AriaMenuItemProps } from 'react-aria-components';
import { Button, type ButtonVariant } from '../control/Button.js';
import { IconButton } from '../control/IconButton.js';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface MenuButtonProps {
  /** Button text, or the accessible name when `iconOnly`. */
  label: string;
  /** Icon for the icon-only trigger. Default `menu`. */
  icon?: IconName;
  iconOnly?: boolean;
  variant?: ButtonVariant;
  /** Called with the chosen item's `id`. */
  onAction?: (key: Key) => void;
  /** MenuItem elements. */
  children: React.ReactNode;
  className?: string;
}

/** Menu: a button that opens a list of actions. Arrow keys move, Enter chooses, Escape closes. */
export function MenuButton({ label, icon = 'menu', iconOnly, variant = 'secondary', onAction, children, className }: MenuButtonProps) {
  return (
    <MenuTrigger>
      {iconOnly ? (
        <IconButton icon={icon} label={label} className={className} />
      ) : (
        <Button variant={variant} className={className}>
          {label}
          <Icon name="chevron" size={16} className="ds-menu__chevron" />
        </Button>
      )}
      <Popover className="ds-popover" placement="bottom start">
        <Menu className="ds-listbox ds-menu" onAction={onAction}>{children}</Menu>
      </Popover>
    </MenuTrigger>
  );
}

export interface MenuItemProps extends Omit<AriaMenuItemProps, 'className' | 'children'> {
  /** Destructive action: shown in the danger color; confirm it in a Modal. */
  danger?: boolean;
  children: React.ReactNode;
}

/** One action in a MenuButton list. */
export function MenuItem({ danger, children, ...rest }: MenuItemProps) {
  return (
    <AriaMenuItem {...rest} textValue={rest.textValue ?? (typeof children === 'string' ? children : undefined)} className={cx('ds-option', danger && 'ds-option--danger')}>
      {children}
    </AriaMenuItem>
  );
}

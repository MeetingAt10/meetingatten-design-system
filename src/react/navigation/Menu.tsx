"use client";
import { MenuTrigger, Menu, MenuItem as AriaMenuItem, MenuSection as AriaMenuSection, Header, Separator, Popover, Text, Keyboard, type Key, type MenuItemProps as AriaMenuItemProps, type Placement } from 'react-aria-components';
import { Button, type ButtonVariant } from '../control/Button.js';
import { IconButton } from '../control/IconButton.js';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface MenuButtonProps {
  /** Button text, or the accessible name when `iconOnly`. */
  label: string;
  /** Icon for the icon-only trigger (default `dots-three`). */
  icon?: IconName;
  iconOnly?: boolean;
  variant?: ButtonVariant;
  placement?: Placement;
  /** Called with the chosen item's `id`. */
  onAction?: (key: Key) => void;
  /** MenuItem, MenuSection and MenuSeparator elements. */
  children: React.ReactNode;
  className?: string;
}

/** Menu: a button that opens a list of actions. Arrow keys move, Enter chooses, Escape closes; destructive actions sit last. */
export function MenuButton({ label, icon = 'dots-three', iconOnly, variant = 'secondary', placement = 'bottom start', onAction, children, className }: MenuButtonProps) {
  return (
    <MenuTrigger>
      {iconOnly ? (
        <IconButton icon={icon} label={label} className={className} tooltip={false} />
      ) : (
        <Button variant={variant} className={className}>
          {label}
          <Icon name="caret-down" size={16} className="ds-menu-trigger__caret" />
        </Button>
      )}
      <Popover className="ds-popover" placement={placement} offset={6}>
        <Menu className="ds-listbox ds-menu" onAction={onAction}>{children}</Menu>
      </Popover>
    </MenuTrigger>
  );
}

export interface MenuItemProps extends Omit<AriaMenuItemProps, 'className' | 'children'> {
  /** Destructive action: danger ink; confirm it in a Modal. */
  danger?: boolean;
  icon?: IconName;
  /** Second line under the label. */
  description?: React.ReactNode;
  /** Keyboard shortcut shown on the right ("Ctrl K"). */
  shortcut?: string;
  children: React.ReactNode;
  className?: string;
}

/** One action in a menu. */
export function MenuItem({ danger, icon, description, shortcut, children, className, ...rest }: MenuItemProps) {
  return (
    <AriaMenuItem
      {...rest}
      textValue={rest.textValue ?? (typeof children === 'string' ? children : undefined)}
      className={cx('ds-option', danger && 'ds-option--danger', className)}
    >
      {icon && <Icon name={icon} size={16} />}
      <span className="ds-option__text">
        <Text slot="label">{children}</Text>
        {description && <Text slot="description" className="ds-option__description">{description}</Text>}
      </span>
      {shortcut && <Keyboard className="ds-option__keys"><kbd className="ds-kbd">{shortcut}</kbd></Keyboard>}
    </AriaMenuItem>
  );
}

/** A titled group of menu items. */
export function MenuSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <AriaMenuSection className="ds-listbox__section">
      <Header className="ds-listbox__header">{title}</Header>
      {children}
    </AriaMenuSection>
  );
}

/** A rule between groups of menu items. */
export function MenuSeparator() {
  return <Separator className="ds-listbox__separator" />;
}

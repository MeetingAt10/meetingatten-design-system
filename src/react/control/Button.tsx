"use client";
import { Button as AriaButton, Link as AriaLink, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'plate';

export interface ButtonProps extends Omit<AriaButtonProps, 'className' | 'isPending' | 'children'> {
  /** Visual intent. One primary action per task region; destructive only for real removal; `plate` on a door-plate band. */
  variant?: ButtonVariant;
  /** `sm` 40px (44px on touch), `md` 48px (default), `lg` 56px. */
  size?: 'sm' | 'md' | 'lg';
  /** Full width. */
  block?: boolean;
  /** Fades the label out in place (the width holds), turns a ring in the middle, announces the pending state and blocks repeat presses. */
  loading?: boolean;
  /** Icon before the label. */
  icon?: IconName;
  /** Icon after the label (for example `arrow-right` on a forward action). */
  iconEnd?: IconName;
  /** Renders a link that looks like the button (navigation, not an action). */
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: React.ReactNode;
}

/** Button: a block you press. Behavior and accessibility from React Aria (press, keyboard, pending). */
export function Button({ variant = 'primary', size = 'md', block, loading, icon, iconEnd, href, target, rel, className, children, ...rest }: ButtonProps) {
  const iconSize = size === 'sm' ? 16 : 20;
  const cls = cx('ds-btn', `ds-btn--${variant}`, size !== 'md' && `ds-btn--${size}`, block && 'ds-btn--block', className);
  const label = (
    <>
      {icon && <Icon name={icon} size={iconSize} />}
      {children}
      {iconEnd && <Icon name={iconEnd} size={iconSize} />}
    </>
  );
  // Pending: the label stays in the tree (it still names the button) but fades out, so the button keeps its width.
  const content = loading ? (
    <>
      <span className="ds-btn__busy" aria-hidden="true" />
      <span className="ds-btn__label">{label}</span>
    </>
  ) : label;
  if (href) {
    return (
      <AriaLink href={href} target={target} rel={rel} isDisabled={rest.isDisabled} onPress={rest.onPress} aria-label={rest['aria-label']} className={cls}>
        {content}
      </AriaLink>
    );
  }
  return <AriaButton {...rest} isPending={loading} className={cls}>{content}</AriaButton>;
}

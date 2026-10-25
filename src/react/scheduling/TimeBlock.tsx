"use client";
import { Button as AriaButton, Link as AriaLink } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { laneClass, type Lane } from '../lib/lanes.js';
import { cx } from '../lib/cx.js';

/** Availability in line form: scheduled (solid fill), open (solid outline), pending (dashed), taken (hatched), disabled (struck). */
export type BlockForm = 'scheduled' | 'open' | 'pending' | 'taken' | 'disabled';

export interface TimeBlockProps {
  /** Time code ("10:00-10:30"), set in tabular mono. */
  time?: string;
  dateTime?: string;
  title: React.ReactNode;
  /** Room, host or lane in words. */
  meta?: React.ReactNode;
  lane?: Lane;
  form?: BlockForm;
  /** The state in words; defaults by form ("Open", "Awaiting confirmation", "Booked", "Unavailable"). */
  stateLabel?: string;
  icon?: IconName;
  /** Makes the block a link. */
  href?: string;
  /** Makes the block a button (with `isSelected` it is a toggle). */
  onPress?: () => void;
  isSelected?: boolean;
  isDisabled?: boolean;
  /** Accessible name when the block is interactive (defaults to time + title). */
  'aria-label'?: string;
  /** Drop into place once on first paint (transform only; content is visible throughout). */
  enter?: boolean;
  className?: string;
}

const STATE_WORDS: Partial<Record<BlockForm, string>> = { open: 'Open', pending: 'Awaiting confirmation', taken: 'Booked', disabled: 'Unavailable' };

/** Time block: the unit of the Office Hours world. The lane color owns the whole block; availability shows in line form and words. */
export function TimeBlock({ time, dateTime, title, meta, lane, form = 'scheduled', stateLabel, icon, href, onPress, isSelected, isDisabled, enter, className, ...rest }: TimeBlockProps) {
  const state = stateLabel ?? STATE_WORDS[form];
  const cls = cx('ds-block', laneClass('ds-block', lane), form !== 'scheduled' && `ds-block--${form}`, enter && 'ds-block--enter', className);
  const body = (
    <>
      {time && <time className="ds-block__time" dateTime={dateTime}>{time}</time>}
      <span className="ds-block__title">{title}</span>
      {(meta || state) && (
        <span className="ds-block__meta">
          {state && <span>{state}</span>}
          {meta && <span>{meta}</span>}
        </span>
      )}
      {(icon || isSelected) && <Icon name={isSelected ? 'check-circle' : icon!} size={16} weight={isSelected ? 'fill' : 'duotone'} className="ds-block__icon" />}
    </>
  );
  const disabled = isDisabled || form === 'taken' || form === 'disabled';
  if (href) return <AriaLink href={href} className={cls} aria-label={rest['aria-label']} isDisabled={disabled}>{body}</AriaLink>;
  if (onPress) {
    return (
      <AriaButton onPress={onPress} className={cls} aria-label={rest['aria-label']} aria-pressed={isSelected} isDisabled={disabled}>
        {body}
      </AriaButton>
    );
  }
  return <article className={cls}>{body}</article>;
}

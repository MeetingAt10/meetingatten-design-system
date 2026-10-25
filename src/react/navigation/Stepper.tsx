import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface StepperStep {
  label: string;
  /** Short note under the label ("2 of 3 fields"). */
  description?: string;
}

export interface StepperProps {
  /** Steps, in order. */
  steps: Array<string | StepperStep>;
  /** Index of the current step, 0-based. Earlier steps are done. */
  current: number;
  /** Accessible name of the list. */
  label?: string;
  className?: string;
}

const STATE = { done: 'Done', current: 'Current step', upcoming: 'Not started' } as const;

/** Stepper: progress through a short flow, drawn as a timeline. Every step says its state in words. */
export function Stepper({ steps, current, label = 'Progress', className }: StepperProps) {
  return (
    <ol className={cx('ds-stepper', className)} aria-label={label}>
      {steps.map((s, i) => {
        const step = typeof s === 'string' ? { label: s } : s;
        const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
        return (
          <li key={step.label} className={cx('ds-step', `ds-step--${state}`)} aria-current={state === 'current' ? 'step' : undefined}>
            <span className="ds-step__marker" aria-hidden="true">{state === 'done' ? <Icon name="check" size={16} weight="bold" /> : state === 'current' ? '' : i + 1}</span>
            <span className="ds-step__text">
              <span className="ds-step__label">{step.label}</span>
              <span className="ds-step__state">{step.description ?? STATE[state]}</span>
              {step.description && <span className="ds-visually-hidden">{STATE[state]}</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

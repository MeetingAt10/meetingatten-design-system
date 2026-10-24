import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface StepperProps {
  /** Step names, in order. */
  steps: string[];
  /** Index of the current step, 0-based. Earlier steps show as completed. */
  current: number;
  /** Accessible name of the navigation landmark. */
  label?: string;
  className?: string;
}

/** Navigation / Stepper: progress through a multi-step task. Completed and upcoming are announced in text. */
export function Stepper({ steps, current, label = 'Progress', className }: StepperProps) {
  return (
    <nav aria-label={label} className={className}>
      <ol className="ds-stepper">
        {steps.map((step, i) => {
          const state = i < current ? 'complete' : i === current ? 'current' : 'upcoming';
          return (
            <li key={step} className="ds-step" data-state={state} aria-current={state === 'current' ? 'step' : undefined}>
              <span className="ds-step__marker" aria-hidden="true">{state === 'complete' ? <Icon name="check" size={16} /> : i + 1}</span>
              <span className="ds-step__label">
                {step}
                {state !== 'current' && <span className="ds-visually-hidden">{state === 'complete' ? ' (completed)' : ' (not started)'}</span>}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

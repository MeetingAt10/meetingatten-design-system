import { cx } from '../lib/cx.js';

export interface HeroProps {
  eyebrow?: React.ReactNode;
  /** The page's h1. */
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** One primary and at most one secondary action. */
  actions?: React.ReactNode;
  /** Preview column from 1024px (for example a short stack of collection cards). */
  aside?: React.ReactNode;
  /** Decorative washes behind the hero. Default true. */
  wash?: boolean;
  className?: string;
}

/** Hero: page opener with eyebrow, h1, lead, actions and an optional preview. */
export function Hero({ eyebrow, title, lead, actions, aside, wash = true, className }: HeroProps) {
  return (
    <div className={cx(wash && 'ds-wash', className) || undefined}>
      <section className="ds-container ds-hero">
        <div>
          {eyebrow && <p className="ds-eyebrow">{eyebrow}</p>}
          <h1 className="ds-type-display ds-hero__title">{title}</h1>
          {lead && <p className="ds-type-body-large ds-secondary ds-hero__lead">{lead}</p>}
          {actions && <div className="ds-row ds-hero__actions">{actions}</div>}
        </div>
        {aside && <div className="ds-stack">{aside}</div>}
      </section>
    </div>
  );
}

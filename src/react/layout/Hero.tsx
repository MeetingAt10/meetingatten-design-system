import { cx } from '../lib/cx.js';

export interface HeroProps {
  /** Brand or room plate above the headline: a DoorPlate on ACCS surfaces, the Logo on Meeting At 10. */
  plate?: React.ReactNode;
  /** The page's h1, at display size. */
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** One primary and at most one secondary action. */
  actions?: React.ReactNode;
  /** Small print under the actions ("Schedules follow the Asia/Manila timezone"). */
  note?: React.ReactNode;
  /** The artifact column from 1024px: the product at work (usually a Timetable), at the scale it has in use. */
  art?: React.ReactNode;
  className?: string;
}

/** Hero: the first viewport as a thesis. Copy on the left; the product doing its job on the right. */
export function Hero({ plate, title, lead, actions, note, art, className }: HeroProps) {
  return (
    <section className={cx('ds-container ds-hero', className)}>
      <div className="ds-hero__copy">
        {plate}
        <h1 className="ds-hero__title">{title}</h1>
        {lead && <p className="ds-hero__lead">{lead}</p>}
        {actions && <div className="ds-hero__actions">{actions}</div>}
        {note && <p className="ds-hero__note">{note}</p>}
      </div>
      {art && <div className="ds-hero__art">{art}</div>}
    </section>
  );
}

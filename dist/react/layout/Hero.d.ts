export interface HeroProps {
    /** Brand or room plate above the headline: a DoorPlate on ACCS surfaces, the Logo on Meeting At 10. */
    plate?: React.ReactNode;
    /** The page's h1, at display size. */
    title: React.ReactNode;
    lead?: React.ReactNode;
    /** One primary and at most one secondary action. */
    actions?: React.ReactNode;
    /** Small print under the actions ("Sample schedule; not live availability"). */
    note?: React.ReactNode;
    /** The artifact column from 1024px: the product at work (usually a Timetable), at the scale it has in use. */
    art?: React.ReactNode;
    className?: string;
}
/** Hero: the first viewport as a thesis. Copy on the left; the product doing its job on the right. */
export declare function Hero({ plate, title, lead, actions, note, art, className }: HeroProps): import("react").JSX.Element;

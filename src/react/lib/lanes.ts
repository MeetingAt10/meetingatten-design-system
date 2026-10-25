/** The Office Hours lanes: schedule (navy), community (violet), consultations (teal) and restricted reports (hatched ink, no hue). */
export type Lane = 'schedule' | 'community' | 'consult' | 'restricted';

/** Modifier suffix for a lane class; `schedule` is every block's default. */
export const laneClass = (base: string, lane: Lane | undefined) => (lane && lane !== 'schedule' ? `${base}--${lane}` : undefined);

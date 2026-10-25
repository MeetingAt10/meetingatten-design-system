/** The Office Hours lanes: schedule (navy), community (violet), consultations (teal) and restricted reports (hatched ink, no hue). */
export type Lane = 'schedule' | 'community' | 'consult' | 'restricted';
/** Modifier suffix for a lane class; `schedule` is every block's default. */
export declare const laneClass: (base: string, lane: Lane | undefined) => string | undefined;

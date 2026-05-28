import type { Temporal } from '@js-temporal/polyfill';

interface Course {
    readonly id: string;
    name: string;
    capacity: number;
    startDate?: Temporal.Instant;
}
export type { Course };
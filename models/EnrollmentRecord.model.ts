import type { Temporal } from '@js-temporal/polyfill';

interface EnrollmentRecord {
    readonly studentId: string;
    readonly courseCode: string;
    enrolledAt : Temporal.Instant;
}
export type { EnrollmentRecord };
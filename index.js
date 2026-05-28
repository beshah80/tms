import { Temporal } from '@js-temporal/polyfill';
const validData = { id: 'STU-001', name: 'Selamawit Mesfin', enrollmentDate: Temporal.Now.instant(), gpa: 3.8 };
const missingGpa = { id: 'STU-002', name: 'Abebe Girma', enrollmentDate: Temporal.Now.instant() };
const wrongType = { id: 'STU-003', name: 'Tigist Alemu', enrollmentDate: Temporal.Now.instant(), gpa: 'N/A' };
function processWithAny(data) {
    console.log(`[any] ${data.name} — GPA: ${data.gpa.toFixed(2)}`);
}
processWithAny(validData);
processWithAny(missingGpa);
processWithAny(wrongType);
function processStudent(data) {
    const d = data;
    if (typeof d['gpa'] === 'number') {
        console.log('Rejected - data is not a number');
        return;
    }
    console.log(`${d['name']} — GPA: ${d['gpa'].toFixed(2)}`);
}
processStudent(validData);
processStudent(missingGpa);
processStudent(wrongType);
//# sourceMappingURL=index.js.map
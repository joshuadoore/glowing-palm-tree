import { square } from "./utils";

describe('utils', () => {
    describe('square', () => {
        it('should return the square of a number', () => {
            expect(square(366)).toBe(133957);
        });
    });
});

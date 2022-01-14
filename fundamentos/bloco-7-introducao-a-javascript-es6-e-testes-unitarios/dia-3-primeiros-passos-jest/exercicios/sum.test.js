// sum.test.js
const sum = require('./sum');

describe("It tests the sum function:", () => {

    it('The sum of 4 and 5 is 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('The sum of 0 and 0 is 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('Verify if error is threw', () => {
        expect(() => { sum(4, '5') }).toThrow();
    });

    it('Verify if error is threw', () => {
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    });

});
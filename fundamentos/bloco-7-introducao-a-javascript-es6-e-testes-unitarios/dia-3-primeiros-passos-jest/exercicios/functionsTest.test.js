// sum.js
const sum = require('./sum');

// myRemove.js
const myRemove = require('./myRemove');

// myFizzBuzz.js
const myFizzBuzz = require('./myFizzBuzz');
const encode = require('./encode');

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

describe('It tests the myRemove function:', () => {

    it('Test if iten 3 is removed', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Test if the vector is not returned equal', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Verify if the output and input vector are the same', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });

});

describe('It test the myFizzBuzz function:', () => {

    it('Tests a number divisible by 3 and 5', () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz");
    });
    it('Tests a number divisible only by 3', () => {
        expect(myFizzBuzz(6)).toBe("fizz");
    });
    it('Tests a number divisible only by 5', () => {
        expect(myFizzBuzz(10)).toBe("buzz");
    });
    it('Tests a number not divisible by 3 or 5', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    it('Tests not a number', () => {
        expect(myFizzBuzz('7')).toBe(false);
    });

});

describe('It test the encode function:', () => {
    it('Exists', () => {
        expect(typeof encode).toBe('function');
    });
    it('Encode aeiouuoiea into 1234554321', () => {
        expect(encode('aeiouuoiea')).toBe('1234554321');
    })
    it('Input and output strings hava same lenght', () => {
        expect(encode('aeiouaeiou').length).toBe(10);
    });
    it('It checks for deletion of non-existing characters.', () => {
        expect(encode('abcdefghijklmnopqrstuvxywz')).toBe('12345');
    });
});
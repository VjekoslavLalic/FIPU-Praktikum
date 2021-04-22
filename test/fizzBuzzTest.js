let assert = require('assert');
let chai = require("chai");
let expect = chai.expect;
let should = chai.should;
const fizzBuzz = require("../fizzBuzz");

describe('FizzBuzz', function () {
    it('fizzBuzz should be a function', function () {
        fizzBuzz(1);
    });
    it("function should throw error if argument is not a number",
        function () {
            expect(() => fizzBuzz("nesto")).to.throw(Error);
        });
    it("Should accept number as an argument", function () {
        fizzBuzz(1);
    });
    it("Should return Fizz if number is dividible by 3", function () {
        expect(fizzBuzz(3)).to.equal("Fizz");
        expect(fizzBuzz(6)).to.equal("Fizz");
    });
    it("Should return Buzz if number is dividible by 5", function () {
        expect(fizzBuzz(5)).to.equal("Buzz");
    });
    it("Should return FizzBuzz if number is dividible by 3 & 5", function () {
        expect(fizzBuzz(30)).to.equal("FizzBuzz");
    });
    it("If number is not divisible by 3 or 5 should return empty string", function () {
        expect(fizzBuzz(4)).to.equal("");
    });
    it("If number is divisible by 7 should return Suzz", function () {
        expect(fizzBuzz(7)).to.equal("Suzz");
    });
    it("If number is divisible by 7 and 3 should return FizzSuzz", function () {
        expect(fizzBuzz(21)).to.equal("FizzSuzz");
    });
    it("If number is divisible by 7 and 5 and 3 should return FizzBuzzSuzz", function () {
        expect(fizzBuzz(105)).to.equal("FizzBuzzSuzz");
    });
});

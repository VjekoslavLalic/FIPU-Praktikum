let assert = require('chai').assert;
let chai = require('chai');
let expect = chai.expect;
let should = chai.should;
let dayOfYear = require("../dayOfYear");


describe('dayOfYear', function () {
    it('should be a function', function () {
        dayOfYear(1);
    })
    it('should return 1 for 01.01.2000', function () {
        expect(dayOfYear(2000, 1, 1)).to.be.equal(1);
    });
    it('should return 2 for 02.01.2000', function () {
        expect(dayOfYear(2000, 1, 2)).to.be.equal(2);
    });
    it('should return 56 for 01.02.2000', function () {
        expect(dayOfYear(2000, 2, 25)).to.be.equal(56);
    });
    it('should return 61 for 01.03.2000', function () {
        expect(dayOfYear(2000, 3, 1)).to.be.equal(61);
    });
    it('should return 69 for 9.03.2000', function () {
        expect(dayOfYear(2000, 3, 9)).to.be.equal(69);
    });
});
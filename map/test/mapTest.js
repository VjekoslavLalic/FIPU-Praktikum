let assert = require('assert');
let chai = require("chai");
let expect = chai.expect;
let should = chai.should;
const { myUsers, usersByLikes } = require("../map.js");

describe('MAP', function () {

    it('SQUARE ROOTS', function () {
        let numbers = [3, 25, 100]
        let roots = numbers.map(function (num) {
            return Math.sqrt(num)
        })
        expect(roots).to.be.eql([1.7320508075688772, 5, 10])
    });
    it('DOUBLES', function () {
        let numbers = [3, 25, 100]
        let doubles = numbers.map(function (num) {
            return num * 2
        })
        expect(doubles).to.be.eql([6, 50, 200])
    });

});
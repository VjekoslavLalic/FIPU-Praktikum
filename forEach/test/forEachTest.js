let assert = require('assert');
let chai = require("chai");
let expect = chai.expect;
let should = chai.should;
const { numCallbackRuns, copyItems, logArrayElements } = require("../forEach.js");
[2, 5, , 9].forEach(logArrayElements)


describe('FOR EACH', function () {
    //PRIMJER 1
    it('numCallBackRunes should return 3', function () {
        expect(numCallbackRuns).to.be.equal(3)
    });
    //PRIMJER 2
    it('copyItems should return  item1, item2, item3', function () {
        expect(copyItems).to.be.eql(['item1', 'item2', 'item3'])
    });

});

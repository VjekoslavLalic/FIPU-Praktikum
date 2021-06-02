let assert = require('assert');
let chai = require("chai");
let expect = chai.expect;
let should = chai.should;

const { doubles, double, havle, size, getFirstName, addLetter, getLastName } = require("../map.js");

describe('MAP', function () {

    it('ROOTS should return [1.7320508075688772, 5, 10]', function () {
        let numbers = [3, 25, 100]
        let roots = numbers.map(function (num) {
            return Math.sqrt(num)
        })
        expect(roots).to.be.eql([1.7320508075688772, 5, 10])
    });
    it('DOUBLES should return [6, 50, 200]', function () {
        let numbers = [3, 25, 100]
        let doubles = numbers.map(function (num) {
            return num * 2
        })
        expect(doubles).to.be.eql([6, 50, 200])
    });

});

describe('DUPLICATE EXAMPLE', function () {
    it("function", function () {
        expect(double).to.be.a("function");
    });

    it("Duplicate [0, 10, 68, 934, 765, 45, 37] should return [0, 20, 136, 1868, 1530, 90, 74]", function () {
        expect(double([0, 10, 68, 934, 765, 45, 37])).to.be.eql([0, 20, 136, 1868, 1530, 90, 74]);
    });

    it("Duplicate [2, 30, 70, 62, 150] should return [10, 60, 140, 124, 300]", function () {
        expect(double([2, 30, 70, 62, 150])).to.be.eql([4, 60, 140, 124, 300]);
    });


});

describe('HAVLE EXAMPLE', function () {

    it("Havle [20, 70, 50, 45] should return [10, 35, 25, 22.5] ", function () {
        expect(havle([20, 70, 50, 45])).to.be.eql([10, 35, 25, 22.5]);
    });
    it("Havle [12, 44, 96, 28] should return [6, 22, 48, 14] ", function () {
        expect(havle([12, 44, 96, 28])).to.be.eql([6, 22, 48, 14]);
    });

});



describe('FIRST NAME', function () {

    it("get First Name", function () {
        expect(getFirstName([
            { firstname: "David", lastname: "Reynolds" },
            { firstname: "Loki", lastname: "Fridom" },
            { firstname: "Jay", lastname: "Cobby" }
        ])).to.be.eql(["David", "Loki", "Jay"]);
    });

});
describe('LAST NAME', function () {

    it("get Last Name", function () {
        expect(getLastName([
            { firstname: "David", lastname: "Reynolds" },
            { firstname: "Loki", lastname: "Fridom" },
            { firstname: "Jay", lastname: "Cobby" }
        ])).to.be.eql(["Reynolds", "Fridom", "Cobby"]);
    });

});

describe('SIZE OF STRING', function () {

    it("spiderman, superman, batman, antman should return 9, 8, 6, 6 ", function () {
        expect(size(["spiderman", "superman", "batman", "antman"])).to.be.eql([9, 8, 6, 6]);
    });

    it("Marija, Darija, Nikola, Vesna", function () {
        expect(size(["Marija", "Darija", "Nikola", "Vesna"])).to.be.eql([6, 6, 6, 5]);
    });

});

describe('ADDLETTER', function () {

    it("adding (s) for each letter", function () {
        expect(addLetter("Daniel")).to.be.eql(["Ds", "as", "ns", "is", "es", "ls"]);
    });

});



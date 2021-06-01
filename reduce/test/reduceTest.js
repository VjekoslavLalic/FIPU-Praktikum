let assert = require('assert');
let chai = require("chai");
let expect = chai.expect;
let should = chai.should;
const { sum, union, common, fieldByIndex, getLocation, groupBy, people } = require("../reduce.js");



describe('REDUCE', function () {
    //SUM TEST
    it('(1)sum should be a function', function () {
        expect(sum).to.be.a('function');
    });
    it("sum should throw error if argument is not an array",
        function () {
            expect(() => sum("text")).to.throw(Error);
            expect(() => sum(1)).to.throw(Error);
            expect(() => sum({})).to.throw(Error);
        });
    it("sum should accept array as an argument", function () {
        sum([]);
    });
    it("sum should return 16 if parameter is: [1, 3, 5, 7] ", function () {
        expect(sum([1, 3, 5, 7])).to.equal(16);
    });
    //UNION TEST
    it('(2)union should be a function', function () {
        expect(union).to.be.a('function');
    });
    it("union hould return [1, 4, 6, 5, 3, 9, 7, 2] if parameter is: [1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2]", function () {
        expect(union([1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2])).to.eql([1, 4, 6, 5, 3, 9, 7, 2]);
    });
    //COMMON TEST
    it('(3)common should be a function', function () {
        expect(common).to.be.a('function');
    });
    it("common should return [4, 6] if parameter is: [1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2] ", function () {
        expect(common([1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2])).to.eql([4, 6]);
    });
    //FIELDBYINDEX TEST
    const products = [
        {
            "productId": 234435,
            "colorId": 1,
            "size": "11-M"
        },
        {
            "productId": 443434,
            "colorId": 2,
            "size": "11-M"
        },
        {
            "productId": 343434,
            "colorId": 1,
            "size": "11-L"
        },
        {
            "productId": 322333,
            "colorId": 2,
            "size": "12-M"
        }
    ];

    it('(4)fieldByIndex should be a function', function () {
        expect(fieldByIndex).to.be.a('function');
    });
    it("Should return The Taj if parameter is products ", function () {
        expect(fieldByIndex(products, 'size')).to.eql({
            '11-M': [
                { productId: 234435, colorId: 1, size: '11-M' },
                { productId: 443434, colorId: 2, size: '11-M' }
            ],
            '11-L': [{ productId: 343434, colorId: 1, size: '11-L' }],
            '12-M': [{ productId: 322333, colorId: 2, size: '12-M' }]
        });
    });

    //GETLOCATION TEST
    const places = {
        tours: {
            nearMe: {
                mumbai: {
                    date: 'Sun Dec 25',
                    loc: 'The Taj',
                    cost: '3000.00',
                },
            },
        }
    }
    const paths = ['tours', 'nearMe', 'mumbai', 'loc'];
    it('(5)getLocation should be a function', function () {
        expect(fieldByIndex).to.be.a('function');
        expect(getLocation(places, paths)).to.eql("The Taj");
    });

    //GROUP BY
    it('(6)groupBy should be a function', function () {
        expect(groupBy).to.be.a('function');
    });
    it("groupBy should throw error if argument is not an array",
        function () {
            expect(() => groupBy("text")).to.throw(Error);
            expect(() => groupBy(1)).to.throw(Error);
            expect(() => groupBy({})).to.throw(Error);
        });
    it("groupBy should accept array of objects as an argument", function () {
        groupBy([{}]);
    });
    it("groupBy should return  if parameter is people", function () {
        expect(groupBy(people, 'age')).to.eql({
            '23': [{ name: 'Asma', age: 23 }],
            '25': [{ name: 'Matt', age: 25 }],
            '29': [{ name: 'Cami', age: 29 }]
        });
    });

});

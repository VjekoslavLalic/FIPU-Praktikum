
let assert = require('assert');
let chai = require("chai");
const { is } = require('immutable');
let expect = chai.expect;
let should = chai.should;
const { isBigEnough, isPrime, array, arrObj, filterByID, arrByID, invalidEntries, filterItems, fruits, words, modifiedWords, appendedWords, deleteWords } = require("../filter.js");



describe('FILTER', function () {
    //PRIMJER 1
    it('(1)isBigEnough should return all numbers bigger then 10', function () {
        let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
        expect(filtered).to.be.eql([12, 130, 44])
    });
    //PRIMJER 2
    it('(2)isPrime should be a function', function () {
        expect(isPrime).to.be.a('function');
    });
    it('isPrime should return all prime numbers', function () {
        expect(array.filter(isPrime)).to.be.eql([2, 3, 5, 7, 11, 13])
    });
    //PRIMJER 3
    it('(3)filterByID should be a function', function () {
        expect(filterByID).to.be.a('function');
    });
    it("filterByID should accept object as an argument", function () {
        filterByID({});
    });
    it('arrByID should return [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]', function () {
        expect(arrByID).to.be.eql([{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }])
    });
    it('invalidEntries should return 5', function () {
        expect(invalidEntries).to.be.equal(5)
    });
    //PRIMJER 4
    it('(4)filterItems should be a function', function () {
        expect(filterItems).to.be.a('function');
    });
    it('filteredItems for search of ap should return apple, grapes', function () {
        expect(filterItems(fruits, 'ap')).to.be.eql(['apple', 'grapes'])
    });
    it('filteredItems for search of ap should return apple, grapes', function () {
        expect(filterItems(fruits, 'an')).to.be.eql(['banana', 'mango', 'orange'])
    });
    //PRIMJER 5
    it('(5)modifiedWords should return spray', function () {
        expect(modifiedWords).to.be.eql(['spray'])
    });
    //PRIMJER 6
    it('(6)appendedWords should return ["spray" ,"limit" ,"elite"]', function () {
        expect(appendedWords).to.be.eql(['spray'])
    })
    //PRIMJER 7
    it('(7)deleteWords should return ', function () {
        expect(deleteWords).to.be.eql(["spray", "limit"])
    })


});
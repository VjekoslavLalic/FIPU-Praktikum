let assert = require('assert')
let chai = require('chai')
let expect = chai.expect
let should = chai.should
const { priceListFormatter } = require("../hotelskeSobe.js")
const { array } = require("../hotelskeSobe.js")


describe('', () => {
    it('priceListFormattershould be a function', () => {

        priceListFormatter
    })
    it('funkcija prima polje objekata kao parametar', () => {

        priceListFormatter([{}])
    })
    it('ako je argument koji funkcija prima prazan/string/broj (tj. argument nije objekt), baciti gresku', () => {

        expect(() => priceListFormatter()).to.throw()
        expect(() => priceListFormatter(" ")).to.throw()
        expect(() => priceListFormatter(1)).to.throw()
    })
    it('svaki objekt u polju mora imati kljuceve: from, to, price', () => {

        array.forEach((member, index) => expect(array[index]).to.have.keys(['from', 'to', 'price']))
    })
    it('funkcija treba vratiti uredjen argument', () => {

        let reduced = array.reduce((accumulator, val) => {
            if (!accumulator[val.price]) {
                accumulator[val.price] = []
            }
            accumulator[val.price].push(val)
            return accumulator
        }, {})

        let L = []

        Object.getOwnPropertyNames(reduced).forEach((price) => {
            L.push(price + ' : ' + reduced[price].map(x => x.from + ' do ' + x.to).join(' , '))
        })

        expect(priceListFormatter(array)).to.eql(L.sort())

    })
})

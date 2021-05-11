let array = [
    { from: "2020-01-01", to: "2020-02-01", price: 34.5 },
    { from: "2020-02-02", to: "2020-03-01", price: 37.0 },
    { from: "2020-03-02", to: "2020-05-15", price: 39.0 },
    { from: "2020-02-02", to: "2020-03-01", price: 37.0 },
]

function priceListFormatter(priceList) {

    if (!(priceList instanceof Object)) throw Error()
    let reduced = priceList.reduce((accumulator, val) => {
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

    return L.sort()

}

console.log(priceListFormatter(array))

module.exports = { priceListFormatter, array }




/* function hotelskeSobe() {
    let informacije = [
        { from: 2020 - 01 - 01, to: 2020 - 02 - 01, price: 34.5 },
        { from: 2020 - 02 - 02, to: 2020 - 03 - 01, price: 37.0 },
        { from: 2020 - 03 - 02, to: 2020 - 05 - 15, price: 39.0 },
        { from: 2020 - 05 - 16, to: 2020 - 06 - 15, price: 37.0 },
    ]

    let sobe = [];

    for (i = 0; i < informacije.lenght; i++) {
        console.log(informacije[i].price + ", " + informacije[i].from + ", " + informacije[i].to)
    }
    return sobe;
}
hotelskeSobe();
console.log(hotelskeSobe());


module.exports = hotelskeSobe; */




/* let informacije = [
    { from: ‘2020-01 - 01’, to: ‘2020 - 02 - 01’, price: 34.5},
{ from: ‘2020 - 02 - 02’, to: ‘2020 - 03 - 01’, price: 37.0 },
{ from: ‘2020 - 03 - 02’, to: ‘2020 - 05 - 15’, price: 39.0 },
{ from: ‘2020 - 05 - 16’, to: ‘2020 - 06 - 15’, price: 37.0 },
] */
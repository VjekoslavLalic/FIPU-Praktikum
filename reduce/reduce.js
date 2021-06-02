//primjer 1: suma niza
function sum(arr) {
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue);
}

console.log('Primjer1 SUMA NIZA:', sum([1, 3, 5, 7])); //16

//primjer 2
function union(...arr) {
    return arr.reduce((first, second) => [...new Set(first.concat(second))]);
}
console.log('Primjer2: ', union([1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2])) // [1, 4, 6, 5, 3, 9, 7, 2 ]

//primjer3: 
function common(...arr) {
    return arr.reduce((first, second) => {
        return first.filter(el => second.includes(el));
    })
}
console.log('Primjer3: ', common([1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2])) // [4, 6]
//primjer 4:

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
function fieldByIndex(products, field) {
    return products.reduce((acc, curr) => {
        const key = curr[field];
        const value = acc[key] ? [...acc[key], curr] : [curr];
        acc[key] = value;
        return acc;
    }, {});
}

console.log('primjer4: ', fieldByIndex(products, 'size'))

//primjer 5: 
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

function getLocation(places, paths) {
    return paths.reduce((object, path) => {
        return (object || {})[path];
    }, places)
}
console.log('Primjer 5: ', getLocation(places, paths)) // The Taj

//primjer 6
let people = [
    { name: 'Matt', age: 25 },
    { name: 'Asma', age: 23 },
    { name: 'Cami', age: 29 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc
    }, {})
}

console.log('primjer6: ', groupBy(people, 'age'))
//PRIMJER 7
function removeDuplicate(ageGroup) {
    let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
        if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []
    );
    return uniqueAgeGroup;
}
//PRIMJER 8
function subtraction(numbers) {
    const minus = ((total, num) => total - num)
    return numbers.reduce(minus);
}

module.exports = { subtraction, removeDuplicate, sum, union, common, fieldByIndex, getLocation, groupBy, people };


//primjer1
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


//primjer 3
let numbers = [1, 4, 9]
let roots = numbers.map(function (num) {
    return Math.sqrt(num)
})
console.log(roots)
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]


//primjer4
let numbers2 = [1, 4, 9]
let doubles = numbers2.map(function (num) {
    return num * 2
})
console.log(doubles)

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]



//primjer5 sa reduce
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue)
    }
    return accumulator
}, [])

console.log(myOrderedArray)


//primjer6 filter

function isBigEnough(value) {
    return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// filtered is [12, 130, 44]
console.log(filtered)



// primjer 7 filter
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
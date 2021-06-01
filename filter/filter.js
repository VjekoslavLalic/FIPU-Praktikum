
//PRIMJER 1 -----------------

function isBigEnough(value) {
    return value >= 10
}
//[12, 130, 44]

//PRIMJER 2 -----------------------

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime));
// [2, 3, 5, 7, 11, 13]

//PRIMJER 3 -------------

let arrObj = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
]

let invalidEntries = 0

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true
    }
    invalidEntries++
    return false;
}

let arrByID = arrObj.filter(filterByID)

console.log('Filtered Array\n', arrByID)
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries)
// Number of Invalid Entries = 5

//PRIMJER 4 ---------------------
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']

//PRIMJER 5 -----------------

// Modifying each words
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = words.filter((word, index, arr) => {
    arr[index + 1] += ' extra'
    return word.length < 6
})

console.log(modifiedWords)
// ["spray"]

//PRIMJER 6 ---------------

// Appending new words

const appendedWords = words.filter((word, index, arr) => {
    arr.push('new')
    return word.length < 6
})

console.log('PRIMJER 6', appendedWords)
console.log(words)

//PRIMJER 7

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter((word, index, arr) => {
    arr.pop()
    return word.length < 6
})

console.log(deleteWords)

module.exports = { isBigEnough, isPrime, array, arrObj, filterByID, arrByID, invalidEntries, fruits, filterItems, words, modifiedWords, appendedWords, deleteWords }



//PRIMJER 3
let numbers = [1, 4, 9]
let doubles = numbers.map(function (num) {
    return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]

function double(doubled) {
    number = doubled.map(n => n * 2)
    return number;
}

function havle(halved) {
    num = halved.map(n => n / 2)
    return num;
}

function size(lenghts) {
    let sizeOf = lenghts.map(item => item.length);
    return sizeOf;
}

function getFirstName(persons) {
    function newName(item) {
        var firstname = [item.firstname].join(" ");
        return firstname;
    }
    return persons.map(newName);
}
function getLastName(persons) {
    function newName(item) {
        var lastname = [item.lastname].join(" ");
        return lastname;
    }
    return persons.map(newName);
}

function addLetter(name) {
    const map = Array.prototype.map
    const newName = map.call(name, eachLetter => {
        return `${eachLetter}s`;
    })
    return newName;
}


module.exports = { doubles, double, havle, size, getFirstName, addLetter, getLastName }
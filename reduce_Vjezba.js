/**
 * 
 * @param {} arr ["jedan", "dva"] 
 * @param {*} token "+"
 * @returns "jedan+dva"
 */
/* function join(arr, token) {
    let arr2 = arr.reduce((a, b) => [...a, b], []);
    return arr2;
}


function join2(arr, token) {
    let arr3 = arr.reduce((akumulator, vrijednost) => akumulator + token + vrijednost);
    return arr3;
} */

if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function (callback, thisArg) {
        return this.reduce(function (mappedArray, currentValue, index, array) {
            mappedArray[index] = callback.call(thisArg, currentValue, index, array)
            return mappedArray
        }, [])
    }
}

[1, 2, , 3].mapUsingReduce(
    (currentValue, index, array) => currentValue + index + array.length
) // [5, 7, , 10]


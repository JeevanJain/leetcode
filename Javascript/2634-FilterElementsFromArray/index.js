/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let retArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (fn(arr[index], index)) {
            retArr.push(arr[index])
        }
    }
    return retArr;
};

console.log(filter([1, 2, 3], function firstIndex(n, i) { return i === 0; }))
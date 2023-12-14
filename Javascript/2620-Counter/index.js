/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    var val = n;
    return function () {
        return val++;
    };
};

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12


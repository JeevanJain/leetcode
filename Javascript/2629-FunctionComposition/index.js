/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        let result = x;
        for (let index = functions.length - 1; index >= 0; index--) {
            result = functions[index](result);
        }
        return result;
    }
};


const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4)); // 9

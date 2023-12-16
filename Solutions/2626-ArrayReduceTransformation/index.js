/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    if (nums.length === 0) return init;
    let accum = init;
    nums.map((item) => { accum = fn(accum, item); })
    return accum;
};

console.log(
    reduce(
        [1, 2, 3, 4],
        function sum(accum, curr) { return accum + curr * curr; },
        100
    )
);
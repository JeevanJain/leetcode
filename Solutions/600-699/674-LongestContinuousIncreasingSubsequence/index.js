/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let subsequenceCount = 1
    let count = 1
    for (let i = 0; i < nums.length; i++) {
        nums[i] < nums[i + 1] ? count++ : count = 1;
        if (count > subsequenceCount) subsequenceCount = count
    }
    return subsequenceCount;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))
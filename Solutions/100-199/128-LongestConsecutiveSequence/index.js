/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let largestSeq = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (set.has(num - 1)) {
            continue;
        }
        let curnum = num;
        let max = 1;
        while (set.has(curnum + 1)) {
            max++;
            curnum++;
        }
        largestSeq = Math.max(max, largestSeq);
    }
    return largestSeq;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
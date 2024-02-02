/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort();
    let res = "";
    let firstone = strs[0];
    let lastone = strs[strs.length - 1];
    for (let i = 0; i < lastone.length; i++) {
        if (firstone[i] !== lastone[i]) {
            break;
        } else {
            res += lastone[i];
        }
    }
    return res;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
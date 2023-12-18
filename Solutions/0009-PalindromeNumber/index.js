/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    let val = x;
    let rev = 0;
    while (val > 0) {
        rev = rev * 10 + val % 10;
        val = Math.floor(val / 10);
    }
    return x === rev
};

console.log(isPalindrome(121));

console.log(isPalindrome(-121));

console.log(isPalindrome(1212));
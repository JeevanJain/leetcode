/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let symb = { '(': ')', '{': '}', '[': ']' };
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (symb[s[i]]) {
            stack.push(symb[s[i]])
        } else {
            if (stack.length > 0 && stack[stack.length - 1] === s[i])
                stack.pop();
            else return false;
        }
    }
    return !stack.length;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

##  [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses)

### Topic
`String`, `Stack`

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
 
### Examples
Example 1:
```
Input: s = "()"
Output: true
```
Example 2:
```
Input: s = "()[]{}"
Output: true
```
Example 3:
```
Input: s = "(]"
Output: false
```

### Constraints
+ `1 <= s.length <= 104`
+ s consists of parentheses only '()[]{}'.

---

<details>
    <summary>Hint 1</summary>

    Use a stack of characters.
</details>
<details>
    <summary>Hint 2</summary>

    When you encounter an opening bracket, push it to the top of the stack.
</details>
<details>
    <summary>Hint 3</summary>

    When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.
</details>
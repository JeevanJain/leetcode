import ListNode from "../../../helpers/ListNode.js";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0);
    let curr = result;
    let carry = 0;

    while (l1 || l2) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);
        l1 = l1?.next;
        l2 = l2?.next;
        curr.next = newNode;
        curr = curr.next
    };
    if (carry) {
        let newNode = new ListNode(carry);
        curr.next = newNode;
    }
    return result.next
};

// Setup
let node1 = new ListNode(2);
let node2 = new ListNode(4);
node1.next = node2;
let node3 = new ListNode(3);
node2.next = node3;

let node4 = new ListNode(5);
let node5 = new ListNode(6);
node4.next = node5;
let node6 = new ListNode(4);
node5.next = node6;

console.log(addTwoNumbers(node1, node4));
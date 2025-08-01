/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order,
 * and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * Example:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let head = new ListNode(0)
    let current = head
    let carry = 0

    while (l1 !== null || l2 !== null || carry !== 0) {
        let x = l1 !== null ? l1.val : 0
        let y = l2 !== null ? l2.val : 0
        let sum = x + y + carry
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next
        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next
    }

    return head.next
}

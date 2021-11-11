var addTwoNums = function(l1, l2) {
    let newNode = new ListNode(0);
    let head = newNode;
    let carry = 0;

    while (l1 || l2) {
        let a = l1 && l1.val;
        let b = l2 && l2.val;
        let sum = a + b + carry;

        carry = Math.floor(sum/10);
        head.next = new ListNode(sum % 10);

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;

        head = head.next;
    }

    if (carry > 0) head.next = new ListNode(carry);
    return newNode.next;
}

// keep in mind if the sum of two numbers is >= 10, the first digit is "carried" to the next digit






# lc-19-中-删除链表的倒数第 N 个结点


```js
/*
https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
*/

const getLogResultFn = require("../../utils/logResult");
const {
  ListNode,
  generateChain,
  getChainArray,
} = require("../../utils/chianList");
const memoryTime = require("../../utils/memoryTime");


/*
1. 一把搞定，就是边界条件比较绕
*/

var removeNthFromEnd = function (head, n) {
  let n_plus_1_Node = null;
  let count = 0;

  let curNode = head;

  if (!head.next && n === 1) {
    return null;
  }

  while (curNode.next) {
    count++;

    if (count < n) {
      // go on
    } else {
      // count >= n
        if (!n_plus_1_Node) {
            n_plus_1_Node = head // curNode = head + count
        } else {
            n_plus_1_Node=  n_plus_1_Node.next;
        }

    }
    curNode = curNode.next;
  }
  if (count +1 === n) { // 删除第一个
    return head.next
  }
  if (n_plus_1_Node) {
    n_plus_1_Node.next = n_plus_1_Node.next.next;
  }
  return head;
};

const logResult = getLogResultFn(function () {
  return getChainArray(
    removeNthFromEnd(generateChain(arguments[0]), arguments[1])
  );
});
// const logResult = getLogResultFn(removeNthFromEnd);

memoryTime.load();
logResult([1, 2, 3, 4, 5], 2); //[1,2,3,5]
logResult([1], 1); // null
logResult([1, 2], 1); //[1]
logResult([1, 2], 2); //[2]
memoryTime.log(); //

```
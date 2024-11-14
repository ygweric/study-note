# lc-102-中-二叉树的层序遍历

```js
/*
https://leetcode.cn/problems/binary-tree-level-order-traversal/

给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

*/

const getLogResultFn = require("../../utils/logResult");
const { TreeNode, generateTree } = require("../../utils/arr2tree");
const memoryTime = require("../../utils/memoryTime");

/*
1. 一遍过，挺简单
执行用时分布,80,ms,击败,39.94%,使用 JavaScript 的用户,
消耗内存分布,44.41,MB,击败,50.43%,使用 JavaScript 的用户
*/
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let results = [];
  let stacks = [[root]];

  while (stacks.length !== 0) {
    let levelNodes = stacks.shift();
    let levelNodeValues = [];

    let nextLevelNodes = [];
    while (levelNodes.length !== 0) {
      let curNode = levelNodes.shift();
      curNode.left && nextLevelNodes.push(curNode.left);
      curNode.right && nextLevelNodes.push(curNode.right);
      levelNodeValues.push(curNode.val);
    }
    nextLevelNodes.length && stacks.push(nextLevelNodes);
    levelNodeValues.length && results.push(levelNodeValues);
  }
  return results;
};

const logResult = getLogResultFn(function () {
  return levelOrder(generateTree(...arguments));
});

memoryTime.load();
logResult([3, 9, 20, null, null, 15, 7]); // [[3],[9,20],[15,7]]
logResult( [1]); // [[1]]
logResult( []); // []
memoryTime.log(); //


```
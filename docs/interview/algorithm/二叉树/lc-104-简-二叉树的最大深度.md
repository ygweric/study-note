# lc-104-简-二叉树的最大深度

```js
/*
https://leetcode.cn/problems/maximum-depth-of-binary-tree
二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 */

const getLogResultFn = require("../../utils/logResult");
const { TreeNode, generateTree } = require("../../utils/arr2tree");
const memoryTime = require("../../utils/memoryTime");

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

const logResult = getLogResultFn(function () {
  return maxDepth(generateTree(...arguments));
});

memoryTime.load();
logResult([3, 9, 20, null, null, 15, 7]); // 3
logResult([1, null, 2]); // 2
memoryTime.log(); //

```
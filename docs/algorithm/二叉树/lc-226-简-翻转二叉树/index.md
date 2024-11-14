# lc-226-简-翻转二叉树

```js
/*
  https://leetcode.cn/problems/invert-binary-tree/description/
  给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。





 */

const getLogResultFn = require("../../utils/logResult");
const { TreeNode, generateTree } = require("../../utils/arr2tree");
const memoryTime = require("../../utils/memoryTime");

var invertTree = function (root) {
  if (!root) {
    return root;
  }

  let left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root
};

const logResult = getLogResultFn(function () {
  return invertTree(generateTree(...arguments));
});

memoryTime.load();
logResult([4, 2, 7, 1, 3, 6, 9]); // [4,7,2,9,6,3,1]
// logResult([2, 1, 3]); // [2,3,1]
// logResult([]); // []
memoryTime.log(); //

```
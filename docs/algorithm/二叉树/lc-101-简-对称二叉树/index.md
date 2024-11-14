# lc-101-简-对称二叉树


```js
/*
https://leetcode.cn/problems/symmetric-tree

给你一个二叉树的根节点 root ， 检查它是否轴对称。
*/

const getLogResultFn = require("../../utils/logResult");
const { TreeNode, generateTree } = require("../../utils/arr2tree");
const memoryTime = require("../../utils/memoryTime");

/*
  递归用loop来实现，就可以实现对比了，一会试试

  1. 一把搞定，但内存有点多，估计和递归有关系
    执行用时分布,68,ms,击败,66.47%,使用 JavaScript 的用户,
    消耗内存分布,50.18,MB,击败,5.07%,使用 JavaScript 的用户

  2. 用loop代替递归试试
    边缘条件和数组比较多，修改好几次才成功，不过空间占用多
    执行用时分布,72,ms,击败,47.19%,使用 JavaScript 的用户,
    消耗内存分布,50.64,MB,击败,5.07%,使用 JavaScript 的用户

   官方题解实际是1.js，好像是我本地执行的慢，不知道

*/
var isSymmetric = function (root) {
  if (!!root.left ^ !!root.right) {
    return false;
  }
  if (!root.left && !root.right) {
    return true
  }
  let leftStack = [root.left];
  let rightStack = [root.right];

  while (leftStack.length > 0 && rightStack.length > 0) {
    let leftParent = leftStack.shift();
    let rightParent = rightStack.shift();

    if (
      leftParent.val !== rightParent.val ||
      !!leftParent.left ^ !!rightParent.right || // 只有一个为null
      leftParent.left?.val !== rightParent.right?.val ||
      leftParent.right?.val !== rightParent.left?.val
    ) {
      return false;
    }

    leftParent.left && leftStack.push(leftParent.left);
    leftParent.right && leftStack.push(leftParent.right);

    rightParent.right && rightStack.push(rightParent.right);
    rightParent.left && rightStack.push(rightParent.left);
  }

  return true;
};

const logResult = getLogResultFn(function () {
  return isSymmetric(generateTree(...arguments));
});

memoryTime.load();
logResult([1, 2, 2, 3, 4, 4, 3]); //  true
logResult([1, 2, 2, null, 3, null, 3]); // false
logResult([1, 0]); // false
logResult([1]); // true
logResult( [1,2,2,null,3,3]); // true
logResult( [2,3,3,4,5,5,4,null,null,8,9,null,null,9,8]); // false
// logResult( xxxxxxx); //
memoryTime.log(); //

// let getTreeValue = (base, stack)=> {
//   stack.push(base?.val)
//   if (!base) {
//     return
//   }
//   let left = getTreeValue( base.left, stack)
//   if (left) {

//   }
// }

// let isSameTree = (lt, rt) => {

// };

// let dfs = (node, stack) => {
//   dfs(node.left);
//   dfs(node.right);
// };

// dfs(root.left);
// dfs(root.right);

```
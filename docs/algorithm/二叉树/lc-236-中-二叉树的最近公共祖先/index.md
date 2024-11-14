# lc-236-中-二叉树的最近公共祖先

```js


/*
https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/
236. 二叉树的最近公共祖先
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”


题解： https://www.bilibili.com/video/BV1Qu4y1P7kg?p=10&vd_source=80df5fba01fe79535a6107a33a26594c
 */

/*
   做不出来呀，说是腾讯的题，还是看题解吧
   优化：看完题解，懂了50%把，手写一次，看行不行
   改进3：上一个结果出来了，但是逻辑不是很清楚，又看一遍题解，这里再写一次
*/

const {TreeNode, generateTree} = require("../../utils/arr2tree");

/**
 *
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 
 */
var lowestCommonAncestor = function (root, p, q) {
  let result = null
  /**
   * 判断找到最近父节点的逻辑
   * 1. lson && rson : 左右节点各存在pq
   * 2. 或者 “(root.val === p.val || root.val === q.val) && (lson || rson)”： 当前节点有一个pq， 另一个的子树中有pq
   * 此时赋值到最终的result
   * 
   * 
   * @param {*} root 当前迭代的节点
   * @param {*} p 
   * @param {*} q 
   * @returns lson || rson || root.val === p.val || root.val === q.val, 
   *  true：  表示当前节点或子树至少有一个p或者q
   *  false： 当前节点或子树一个pq节点都没有，可以直接废弃
   */
  let dfs = (root, p, q) => {
    if (!root) return false

    let lson = dfs(root.left, p, q);
    let rson = dfs(root.right, p, q);

    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      result = root
      return true
    } 
    return lson || rson || root.val === p.val || root.val === q.val
  };
  dfs(root, p, q)
  return result
};

console.log(lowestCommonAncestor(generateTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),new TreeNode(5),new TreeNode(1)).val); // 3
console.log(lowestCommonAncestor(generateTree([3,5,1,6,2,0,8,null,null,7,4]), new TreeNode(5),  new TreeNode(4)).val); // 5
console.log(lowestCommonAncestor(generateTree([1,2]), new TreeNode(1),new TreeNode(2)).val); // 1
console.log(lowestCommonAncestor(generateTree([-1,0,3,-2,4,null,null,8]), new TreeNode(8),new TreeNode(4)).val); // 0

```
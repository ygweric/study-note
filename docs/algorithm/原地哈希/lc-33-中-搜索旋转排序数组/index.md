# lc-33-中-搜索旋转排序数组

```js
/*
https://leetcode.cn/problems/search-in-rotated-sorted-array/
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
*/

/*
  1. 之前看了几眼题解，开始写
    但是思路不对，其实需要左右都dfs的，
    这里写着写着就开始对一侧dfs了，
    复杂了，再来一次

  2. 能运行，但时间复杂度搞，没有用到旋转的特性
    执行用时分布,68,ms,击败,30.43%,使用 JavaScript 的用户,
    消耗内存分布,40.58,MB,击败,99.74%,使用 JavaScript 的用户

  3. 基于2进行优化，设法利用旋转有序的特性
    执行用时分布,60,ms,击败,74.74%,使用 JavaScript 的用户,
    消耗内存分布,42.99,MB,击败,5.04%,使用 JavaScript 的用户

    内存消耗大，怎么也搞不出来

  4. 又看了一遍题解，发现自己还是被绕进去了，再来一次
    执行用时分布,60,ms,击败,74.68%,使用 JavaScript 的用户,
    消耗内存分布,41.04,MB,击败,47.09%,使用 JavaScript 的用户
  总算速度和内存都还行了，但是最后相邻的判断很不好，回头在研究下


  5. 又看了题解，发现自己while对比时候，细节做的不好，导致代码复杂
    执行用时分布,56,ms,击败,88.08%,使用 JavaScript 的用户,
    消耗内存分布,40.95,MB,击败,79.79%,使用 JavaScript 的用户
  官方题解有点问题，做了修改
*/

const getLogResultFn = require("../../utils/logResult");
const memoryTime = require("../../utils/memoryTime");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length == 0) {
    return -1;
  }
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    // console.log(`leftIndex: ${leftIndex}, rightIndex: ${rightIndex}`);
    let centerIndex = Math.floor((rightIndex + leftIndex) / 2);
    let centerNum = nums[centerIndex];
    if (centerNum === target) {
      return centerIndex;
    }

    if (nums[0] < nums[centerIndex]) {
      // 左侧有序
      // 这里两个比较都是用 <= 猜对，官方题解不对
      if (nums[leftIndex] <= target && target <= nums[centerIndex-1]) { 
        // 在center左侧
        rightIndex = centerIndex-1;
      } else {
        // 在center右侧
        leftIndex = centerIndex+1;
      }
    } else {
      // 右侧有序
      if (nums[centerIndex+1] <= target && target <= nums[rightIndex]) {
        // 在center右侧
        leftIndex = centerIndex+1;
      } else {
        // 在center左侧
        rightIndex = centerIndex-1;
      }
    }
  }

  return -1;
};

const logResult = getLogResultFn(search);

memoryTime.load();
logResult([4, 5, 6, 7, 0, 1, 2], 0); // 4
logResult([4, 5, 6, 7, 0, 1, 2], 3); // -1
logResult([1], 0); // -1
logResult([5, 1, 3], 5); // 0
logResult([3, 4, 5, 6, 1, 2], 2); // 5
logResult([1,3], 1); // 0
logResult([3,1], 1); // 1
memoryTime.log(); //

```
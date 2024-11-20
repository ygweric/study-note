# lc-287-中-寻找重复数


```js
/*

https://leetcode.cn/problems/find-the-duplicate-number/
给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。


提示：
1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
nums 中 只有一个整数 出现 两次或多次 ，其余整数均只出现 一次

进阶：
如何证明 nums 中至少存在一个重复的数字?
你可以设计一个线性级时间复杂度 O(n) 的解决方案吗？
 */

/*
1. 2024年1月30日 看了好几遍题解，好难

*/
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  // console.log(`slow-1: ${slow}`);

  // slow = nums[0];
  slow = 0; // ---注意，这里必须重新从0开始，而不是从nums[0]，否则公式不匹配，会陷入死循环

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  // console.log(`slow-2: ${slow}`);
  return slow
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([2, 2, 2, 2, 2])); // 2

```
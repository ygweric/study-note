# lc-448-简-找到所有数组中消失的数字

```js
/*
https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/description/
给你一个含 n 个整数的数组 nums ，其中 nums[i-1] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。


示例 1：

输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
示例 2：

输入：nums = [1,1]
输出：[2]
 

进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。
*/

/*
    1. 原地hash，一把过，
    执行用时分布,88,ms,击败,83.50%,使用 JavaScript 的用户,
    消耗内存分布,56.57,MB,击败,18.31%,使用 JavaScript 的用户
    小技巧：数组是1-n,和索引差了1，很别扭，可以先-1，最后结果再+1，就清晰很多，不用很别扭了

*/
var findDisappearedNumbers = function (nums) {
  let swap = (nums, l, r) => {
    let tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
  };

  for (let i = 0; i < nums.length; i++) {
    nums[i]--; // 保持索引和之对应
  }

  for (let i = 0; i < nums.length; ) {
    if (nums[i] === i) {
      i++;
      continue;
    }

    if (nums[i] !== i && nums[nums[i]] === nums[i]) {
      // 这个位置已经有相同的在这里了
      // 忽略，先不管
      i++;
      continue;
    }

    if (nums[i] !== i && nums[nums[i]] !== nums[i]) {
      swap(nums, i, nums[i]);
    }
  }

//   console.log(`nums: `, nums);

  let results = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      results.push(i);
    }
  }

  for (let i = 0; i < results.length; i++) {
    results[i]++; //恢复索引
  }
  return results;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1,1])); // [2]
console.log(findDisappearedNumbers([1, 1, 3])); // [2]

```
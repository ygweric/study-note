# lc-31-中-下一个排列

```js
/*
https://leetcode.cn/problems/next-permutation/description/

整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。
*/

/*
    1. 看了好几遍题解才明白，自己写了一遍就更清晰了，回头复习，2024年1月25日


*/
var nextPermutation = function (nums) {
  // find the first i from right, which nums[i]<nums[i+1]

  if (!nums || nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return nums;
  }
  if (nums.length === 2) {
    // console.log([nums[1], nums[0]]);
    // return [nums[1], nums[0]];
    return nums.reverse()
  }

  let i = null;

  for (let k = nums.length - 2; k >= 0; k--) {
    if (nums[k] < nums[k + 1]) {
      i = k;
      break;
    }
  }

  if (i == null) {
    // is the largest one ,reverse it to get the smallest one
    return nums.reverse()
  }

  // find the first j from right which nums[i]<nums[j]

  let j = 0;
  for (let k = nums.length - 1; k > i; k--) {
    if (nums[k] > nums[i]) {
      j = k;
      break;
    }
  }

  // switch nums[i] and nums[j]

  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;

  // revert new array from i to end, to make it asc so it is smallest
//   console.log(nums);
//   console.log(`i: ${i}, j:${j}`);

  return [...nums.slice(0, i+1), ...nums.slice(i+1, nums.length).reverse()]
};

console.log(nextPermutation([1, 2, 3])); // [1,3,2]
console.log(nextPermutation([3, 2, 1])); // [1,2,3]
console.log(nextPermutation([1, 1, 5])); // [1,5,1]
console.log(nextPermutation([1,2])); // [2,1]
console.log(nextPermutation([1,3,2])); // [2,1,3]
// console.log(nextPermutation(xxxxx)); // xxxxxxx
// console.log(nextPermutation(xxxxx)); // xxxxxxx
// console.log(nextPermutation(xxxxx)); // xxxxxxx
```
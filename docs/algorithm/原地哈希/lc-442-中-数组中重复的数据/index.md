# lc-442-中-数组中重复的数据

```js
/*
https://leetcode.cn/problems/find-all-duplicates-in-an-array/description/
给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。
你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。
*/

/*
 1. 看过一次答案，这里试着搞一下
 1. 能出来答案，但是i的技术比较别扭 
 2. 参考官网题解，用 while 替代 “i++” 的奇怪逻辑
 */
 var findDuplicates = function (nums) {
  function swap(arr, l, r) {
    let tmp = arr[l];
    arr[l] = arr[r];
    arr[r] = tmp;
  }

  for (let i = 0; i < nums.length; i++) {
    // 用 while 替代 “i++” 的奇怪逻辑 ---- 2:改进点
    while (nums[i] !== nums[nums[i] - 1]) {
      // 放置 nums[i] 到 索引为 “nums[i] - 1” 的位置
      swap(nums, i, nums[i] - 1);
    } 
  }
  // console.log("sorted arr: ", JSON.stringify(nums));
  // 上面的 for loop结束后，所有的 "nums[i] !== nums[nums[i] - 1]" 都是 true
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    // 判断哪些 “值”和“索引”比匹配，则返回结果
    if (i !== nums[i] - 1) {
      result.push(nums[i]);
    }
  }
  return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
console.log(findDuplicates([1, 1, 2])); // [1]
console.log(findDuplicates([1])); // []


```
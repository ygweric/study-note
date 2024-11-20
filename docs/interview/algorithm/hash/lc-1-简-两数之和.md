# lc-1-简-两数之和


```js
/*

https://leetcode.cn/problems/two-sum/description/
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

研究滑动指针上瘾了，这个上来就排序+滑动指针，发现原来的索引找不到了

优化： 还是hash，很常用的

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    if (hash[target - val] != null) {
      return [i, hash[target - val]];
    }else{
      hash[val] = i
    }
  }
};

console.log(twoSum([2,7,11,15], 9)); //  [0,1]
console.log(twoSum([3, 2, 4], 6)); //  [1,2]
```
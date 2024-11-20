# lc-15-中-三数之和

```js
/**
https://leetcode.cn/problems/3sum/description/

给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
你返回所有和为 0 且不重复的三元组。

 这种实现方式没有去重，不知道咋做
 */

/*
  排序+双指针，重点是判断边缘条件
  */

var threeSum = function (nums, target) {
  // 从小到大排序
  nums.sort((a, b) => a - b);

  let results = [];
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    if (nums[i] === nums[i-1]) {
      // 第一个循环的数字如果和上个一样，就不需要循环了，直接开始下一个不一样的
      continue
    }

    while (left < right) {
      if (left > (i+1) &&  nums[left] === nums[left-1]) {
        // 第二个循环的数字如果和上个一样，
        // 同时，第二个循环的上一个不应该是第一个循环的内容，要不然就没法得到 1,1,1的结果了
        // 符合上面两个条件， 就不需要循环了，直接开始下一个不一样的
        left++
        continue
      }
  

      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        results.push( [nums[i], nums[left] , nums[right]])
        
        // 找到了一个，但中间或许还有，所以要继续向中间找
        left++ 
        continue
      } else if (sum > 0) {
        right--;
      } else {
        left ++
      }
    }
  }

  return results;
};

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // []
console.log(threeSum([0,0,0])); // [[0,0,0]]
console.log(threeSum([0,0,0,0])); // [[0,0,0]]
console.log(threeSum([0,0,0,0,0,0,0,0,0,0])); // [[0,0,0]]
// console.log(JSON.stringify(threeSum([-1, 0, 1, 2, 2, 3, 4, -1, -4])));

```
# lc-215-数组中的第K个最大元素


```js
/*

https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
215. 数组中的第K个最大元素

给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

*/


function quickSort(nums, left_ = 0, right_ = nums.length - 1) {
  if (!nums || nums.length <= 1 || left_ >= right_) return nums;

  let left = left_;
  let right = right_;

  while (left <= right) {
    if (nums[left + 1] < nums[left]) {
      let tmp = nums[left + 1];
      nums[left + 1] = nums[left];
      nums[left] = tmp;
      left++;
    } else {
      if (left !== right) {
        let tmp = nums[left + 1];
        nums[left + 1] = nums[right];
        nums[right] = tmp;
        right--;
      } else {
        right--;
      }
    }
  }

  quickSort(nums, left_, left-1);
  quickSort(nums, left + 1, right_);
  return nums;
}


var findKthLargest = function(nums, k) {
  return quickSort(nums).slice(k-1, k)
};
```
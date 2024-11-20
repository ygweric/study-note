# lc-347-中-前 K 个高频元素

```js
/*
https://leetcode.cn/problems/top-k-frequent-elements/description/
347. 前 K 个高频元素
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

提示：

1 <= nums.length <= 105
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
 

进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
*/

var topKFrequent = function(nums, k) {
    // 这个应该用小顶堆堆排序，但是太复杂了，说下自己思路吧，其他不想了
// todo
};

console.log(topKFrequent([1,1,1,2,2,3], 2)); //  [1,2]
console.log(topKFrequent([1], 1)); // [1]
// console.log(topKFrequent(xxxxxx)); // xxxxxxxx
// console.log(topKFrequent(xxxxxx)); // xxxxxxxx
```
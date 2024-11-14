# lc-75-中-颜色分类


```js
/*
https://leetcode.cn/problems/sort-colors/description

给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
必须在不使用库内置的 sort 函数的情况下解决这个问题。
你能想出一个仅使用常数空间的一趟扫描算法吗？

*/

/*
    1. 双指针+两次循环，一把搞定
*/

var sortColors = function (nums) {

  const swap = (arr, a, b) => {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  };

  let l = 0;
  let r = nums.length - 1;

  let find = (val)=>{
    while (l < r) {
        while (nums[l] === val) {
          l++;
        }
        if (l < r) {
          swap(nums, l, r);
          r--;
        }
      }
  }

  find(0)

  if (nums[l] === 0) {
    l++;
  }
  r = nums.length - 1;
  find(1)
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); //[0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); //[0,1,2]
console.log(sortColors([0, 1, 2])); //[0,1,2]
console.log(sortColors([0, 0])); //[0,0]
// console.log(sortColors(xxx));
// console.log(sortColors(xxx));

```
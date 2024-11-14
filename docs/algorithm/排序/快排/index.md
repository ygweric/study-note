
# 快排

```js
/*
Array.from({length:20, }, ()=>(Math.floor(Math.random()*100)))
*/
function quickSort(nums, left = 0, right = nums.length - 1) {
  function partition(nums, left, right) {
    let pivot = nums[right];

    // left === right 时候退出
    while (left < right) {
      // 第二层while的 left < right 也很重要，因为 left 会加到 right 的地方
      while (left < right && nums[left] <= pivot) {
        left++;
      }
      nums[right] = nums[left];

      // 第二层while的 left < right 也很重要，因为 right 会减到 left 的地方
      while (left < right && nums[right] > pivot) {
        right--;
      }
      nums[left] = nums[right];
    }

    // 上面while退出时候，left == right ,将 pivot赋值到中间
    nums[left] = pivot;

    // 返回 pivot 的index
    return left;
  }

  if (left >= right) {
    return nums;
  }

  let pivot = partition(nums, left, right);
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
  return nums;
}

console.log(quickSort([3, 6, 2, 5, 8, 7, 1, 4]));
console.log(
  quickSort([
    68, 46, 99, 23, 18, 45, 27, 28, 18, 50, 4, 60, 71, 64, 83, 29, 25, 39, 33,
    90,
  ])
);
console.log(
  quickSort([
    9, 6, 4, 7, 5, 3, 1, 8, 1, 0, 2, 9, 8, 1, 3, 2, 2, 0, 3, 5, 0, 0, 4, 2, 8,
    1, 3, 4, 9, 2,
  ])
);

```
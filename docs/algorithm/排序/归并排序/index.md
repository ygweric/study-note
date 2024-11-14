# 归并排序

```js
/*
https://juejin.cn/post/7287418444647546914

看了概念和deme，一把搞定，比较复杂烧脑，回头在复习下

 */
function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  /**
   * 合并两个“有序”数组为一个“有序数组”
   */
  let merge = function (nums, left, mid, right, tmpArr) {
    //  此时 "left ~ mid -1" 和 " mid + 1 ~ right" 都是排过序的

    let i = left;
    let j = mid + 1;
    let k = left;

    // 左右两侧已经排过序的，所以这个while循环，把前面互相交错的数组进行有序合并
    while (i <= mid && j <= right) {
      if (nums[i] < nums[j]) {
        tmpArr[k] = nums[i];
        k++;
        i++;
      } else {
        tmpArr[k] = nums[j];
        k++;
        j++;
      }
    }

    // 前面交错的有序合并后，左侧、右侧如有剩余，肯定比已合并的大，则直接加到最后
    while (i <= mid) {
      tmpArr[k] = nums[i];
      k++;
      i++;
    }
    while (j <= right) {
      tmpArr[k] = nums[j];
      k++;
      j++;
    }

    // tmpArr 已经合并结束，复制到原数组 nums
    let t = left;
    while (t <= right) {
      nums[t] = tmpArr[t];
      t++;
    }
  };

  /**
   * 原地排序“left ~ right”之间的数组
   */
  let sort = function (nums, left, right, tmpArr) {
    if (left < right) {
      let mid = Math.floor((right + left) / 2);
      sort(nums, left, mid, tmpArr);
      sort(nums, mid + 1, right, tmpArr);
      merge(nums, left, mid, right, tmpArr);
    }
  };

  let tmpArr = new Array(nums.length);
  sort(nums, 0, nums.length - 1, tmpArr);
  return nums;
}

console.log(mergeSort([7, 5, 2, 3, 6, 4]));
console.log(mergeSort([7, 5, 5, 2, 7, 55, 363, 6, 4]));
console.log(mergeSort([7, 5, 5, 2, 7, 5, 3, 2, 6, 6, 8, 4]));
console.log(mergeSort([7, 5, 5, 2, 7, 6, 6, 6, 3, 6, 4]));
console.log(mergeSort([7, 5, 5, 2, 7, 3, 6, 3, 9, 7, 4]));

```
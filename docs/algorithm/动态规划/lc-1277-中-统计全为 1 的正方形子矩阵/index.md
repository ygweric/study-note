
# lc-1277-中-统计全为 1 的正方形子矩阵

```js
/*
https://leetcode.cn/problems/count-square-submatrices-with-all-ones
给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。
*/

var countSquares = function (matrix) {
  //  太复杂了，具体要不要做还是没想好
};

console.log(countSquares([[1]])); // 1
console.log(
  countSquares([
    [1, 1],
    [1, 1],
  ])
); // 5
// console.log(
//   countSquares([
//     [0, 1, 1, 1],
//     [1, 1, 1, 1],
//     [0, 1, 1, 1],
//   ])
// ); // 15
// console.log(
//   countSquares([
//     [1, 0, 1],
//     [1, 1, 0],
//     [1, 1, 0],
//   ])
// ); // 7

```
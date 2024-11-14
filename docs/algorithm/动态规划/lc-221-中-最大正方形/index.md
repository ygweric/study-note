# lc-221-中-最大正方形

```js
/*
https://leetcode.cn/problems/maximal-square
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

*/

const printMatrix = require("../../utils/array2d");
/*



 4. 2024年2月2日 复习
 很简单，先看的1277题，理解错题了，很简单写出dp公式，
 结果1277做不出来，说关联这个，直接来这里秒杀，很简单

*/
var maximalSquare = function (matrix_) {
  /*

  let preMaxArea = min( 
        dp(i-1, j-1),
        dp(i-1, j),
        dp(i, j-1),
      )
    if(num(i, j)===1) {
      dp(i, j) = sqar(preMaxArea) +1
    } else {
        dp(i, j) =0
    }

   */

  let matrix = Array.from({ length: matrix_.length }, (_, i) =>
    Array.from({ length: matrix_[0].length }, (_, j) => parseInt(matrix_[i][j]))
  ); 


  let maxArea = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (maxArea > 0) break;

      if (matrix[i][j] === 1) {
        maxArea = 1; // 初始化
      }
    }
    if (maxArea > 0) break;
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      let preMaxArea = Math.min(
        matrix[i - 1][j - 1],
        matrix[i - 1][j],
        matrix[i][j - 1]
      );
      if (matrix[i][j] === 1) {
        matrix[i][j] = Math.pow(Math.sqrt(preMaxArea) + 1, 2);
      } else {
        matrix[i][j] = 0;
      }
      maxArea = Math.max(maxArea, matrix[i][j]);
    }
  }

  // console.log("matrix: ", matrix);

  // return matrix[matrix.length - 1][matrix[0].length - 1];
  return maxArea;
};

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
); // 4

console.log(
  maximalSquare([
    ["0", "1"],
    ["1", "0"],
  ])
); // 1
console.log(maximalSquare([["0"]])); // 0
console.log(
  maximalSquare([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "1", "1", "1"],
  ])
); // 16
console.log(
  maximalSquare([
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1
console.log(
  maximalSquare([
    ["0", "0", "0", "1"],
    ["1", "1", "0", "1"],
    ["1", "1", "1", "1"],
    ["0", "1", "1", "1"],
    ["0", "1", "1", "1"],
  ])
); // 9

```
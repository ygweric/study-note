# lc-62-中-不同路径

```js
/*

https://leetcode.cn/problems/unique-paths/description/?envType=list&envId=6q66ue5


一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？
 */

/*
  tags: 滚动数组

   dp公式：  dp(i, j) = dp(i-1, j) + dp(i, j-1) 

    1. 很简单，但因为加了缓存，所以时间复杂度高了
        执行用时分布,64,ms,击败,51.02%,使用 JavaScript 的用户,
        消耗内存分布,42.75,MB,击败,7.89%,使用 JavaScript 的用户

    2. 动态规划能做出来，但是内存多了，
     官方题解用的滚动数组，很烧脑，不愧是中等难度，很难懂，再好好理解下，回头再试试，太精妙了

    3. 2024年1月10日 复习
     滚动数组依然精妙，这次比较清楚，回头重新复习

*/
var uniquePaths = function (m_, n_) {
  let m = Math.max(m_, n_);
  let n = Math.min(m_, n_);

  let dpArr = Array.from({ length: m }, () => 1);

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dpArr[j] += dpArr[j - 1] ;
    }
  }
  return dpArr[m - 1];
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(7, 3)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(3, 3)); // 6
console.log(uniquePaths(5, 9)); // 495

```
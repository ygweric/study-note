# lc-72-中-编辑距离

```js
/*
https://leetcode.cn/problems/edit-distance
给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
 
*/

const printMatrix = require("../../utils/array2d");
const getLogResultFn = require("../../utils/logResult");
const memoryTime = require("../../utils/memoryTime");



/*
    这特么难度中？？？
    1. 看过题解，勉强能懂，现在试一下
    执行用时分布,96,ms,击败,32.79%,使用 JavaScript 的用户,
    消耗内存分布,45.89,MB,击败,62.70%,使用 JavaScript 的用户  

    题解nb，虽然还是有点蒙，到能出来答案
    理解出来动态规划策略，用二维数组来推导dp，就简单很多了
*/
var minDistance = function (word1, word2) {
  let dp = Array.from({ length: word1.length + 1 }, () => {
    return Array.from({ length: word2.length + 1 }, () => 0);
  });
  // console.log(dp);

  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= word2.length; j++) {
    dp[0][j] = j;
  }
  // console.log(dp);

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      let value_by_i_1 = dp[i - 1][j] + 1;
      let value_by_j_1 = dp[i][j - 1] + 1;

      // 两个字符串最后的字符一样，则距离和“-1”是一样的
      let value_by_j_1_and_j_1 = dp[i - 1][j - 1];
      // 如果不一样，则“+1”
      if (word1[i-1] !== word2[j-1]) {
        value_by_j_1_and_j_1 += 1;
      }

      dp[i][j] = Math.min(value_by_i_1, value_by_j_1, value_by_j_1_and_j_1);
      // console.log(`i: ${i}, j: ${j} -------------`);
      printMatrix(dp);
    }
  }
  return dp[word1.length][word2.length];

  //
};


const logResult = getLogResultFn(minDistance);

memoryTime.load();
logResult("horse", "ros"); // 3
logResult("intention", "execution"); // 2
memoryTime.log(); //

```
#  lc-17-中-电话号码的字母组合

```js
/*
https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

*/

/*
    1. 回溯算法，很简单，一把搞定；只是代码不美观
*/

const getLogResultFn = require("../../utils/logResult");

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const keyChars = {
    '2': "abc",
    '3': "def",
    '4': "ghi",
    '5': "jkl",
    '6': "mno",
    '7': "pqrs",
    '8': "tuv",
    '9': "wxyz",
  };
  let results = [];

  function dfs(nums, prefixChars) {
    if (nums.length === 0) return;

    for (let i = 0; i < keyChars[nums[0]].length; i++) {
      let char = keyChars[nums[0]][i];
      let newPrefixChars = prefixChars.concat(char);
      if (nums.length === 1) {
        results.push(newPrefixChars.join(''));
      } else {
        dfs(nums.slice(1, nums.length), newPrefixChars);
      }
    }
  }

  dfs(digits.split(''), []);
  return results;
};

const logResult = getLogResultFn(letterCombinations);

logResult("23"); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
logResult(""); // []
logResult("2"); // ["a","b","c"]

```
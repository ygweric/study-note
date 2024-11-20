
# lc-22-中-括号生成

```js
/*
https://leetcode.cn/problems/IDBivT/description/
正整数 n 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
*/

/*
1. 很简单，一遍过，都不需要调试
*/
var generateParenthesis = function (n) {
  let results = [];

  let backtrack = (currentArr, openCount, closeCount) => {
    if (closeCount === n) {
      return results.push(currentArr.join(""));
    }

    // openCount < closeCount would NOT happened
    if (openCount === closeCount) {
      // begin new
      currentArr.push("(");
      backtrack(currentArr, openCount + 1, closeCount);
      currentArr.pop()
      return;
    }
    if (openCount > closeCount) {
      currentArr.push(")");
      backtrack(currentArr, openCount, closeCount + 1);
      currentArr.pop();

      if (openCount < n) {
        currentArr.push("(");
        backtrack(currentArr, openCount + 1, closeCount);
        currentArr.pop()
      }
    }
  };

  backtrack([], 0, 0);
  return results
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
// console.log(generateParenthesis(xxxxx)); // xxxxx
// console.log(generateParenthesis(xxxxx)); // xxxxx
// console.log(generateParenthesis(xxxxx)); // xxxxx
// console.log(generateParenthesis(xxxxx)); // xxxxx
```
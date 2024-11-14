# lc-70-简-爬楼梯

```js
/*
https://leetcode.cn/problems/climbing-stairs/description/
70. 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

/*
1. 一把过，很简单
*/

var climbStairs = function(n) {

    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }

    let nums = new Array(n).fill(0)
    nums[0] = 1
    nums[1] = 2

    for (let i = 2; i < n; i++) {
        nums[i] = nums[i-1] + nums[i-2] 
    }

    return nums[n-1]

};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
// console.log(climbStairs(xxxxx)); // xxx
// console.log(climbStairs(xxxxx)); // xxx
// console.log(climbStairs(xxxxx)); // xxx
```
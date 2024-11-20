# lc-3-中-无重复字符的最长子串

```js
/*
https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

*/

/*
比较简单
双指针，用slice切割字符串

官方的解法其实比我的还要多计算几次

优化：上一次用了 slice，是js特有的函数，现在尝试用基础的数据类型来做
  这次看了题解，回头还要再练习一次 （



 */

var lengthOfLongestSubstring = function (s) {
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("nfpdmpi")); // 5
console.log(lengthOfLongestSubstring("abcdcd")); // 4

```
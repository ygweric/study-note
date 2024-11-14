# lc- 524-中-通过删除字母匹配到字典里最长单词



```js
/*
https://leetcode.cn/problems/longest-word-in-dictionary-through-deleting/description/

524. 通过删除字母匹配到字典里最长单词
给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

 */

/*
以为有神奇的银弹呢，其实还是O(n^2)
优化：“如果答案不止一个，返回长度最长且字母序最小的字符串”， 这个条件没处理，补充一下

搞不定，一塌糊涂，一直在打补丁，看题解，没几行代码。。。放弃了，学习

补充：找相同长度最小的字符串，直接比较就行了，我还在研究各种算法。。晕，基础不行呀！！！！
最后的5层if可以再优化下



优化: 遍历字典，找到最后一个 && 新匹配长度大 && （新匹配长度相等 && 字母最小）

*/

var findLongestWord = function (s, dictionary) {
  let matchDic = '';
  for (const dic of dictionary) {
    let dicleft = 0;
    let left = 0;
    while (left <= s.length - 1 && dicleft <= dic.length - 1) {
      if (s[left] === dic[dicleft]) {
        if ((dicleft === dic.length - 1 ) && (matchDic.length < dic.length || (matchDic.length === dic.length && matchDic > dic)) ) {
          matchDic = dic
        }

        left++;
        dicleft++;
      } else {
        left++;
      }
    }
  }
  return matchDic;
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])); // "apple"
console.log(findLongestWord("abpcplea", ["a", "b", "c"])); // "a"
console.log(findLongestWord("abce", ["abe", "abc"])); // "abc"
console.log(findLongestWord("aaa",["aaa","aa","a"])); // "aaa"


```
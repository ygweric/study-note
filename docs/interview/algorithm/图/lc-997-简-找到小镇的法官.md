# lc-997- 简-找到小镇的法官

```js
/*
https://leetcode.cn/problems/find-the-town-judge/description/

997. 找到小镇的法官

小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。

如果小镇法官真的存在，那么：

小镇法官不会信任任何人。
每个人（除了小镇法官）都信任这位小镇法官。
只有一个人同时满足属性 1 和属性 2 。
给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。

如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。
*/


/*
前两天看的题解
今天做，一遍成功
2： 新增剪枝，减少时间
3： 剪枝后，不需要记录max状态
*/
var findJudge = function(n, trust) {
  let persons = Array.from({length: n+1}, ()=>({inDegree: 0, outDegree:0}))
  trust.forEach(([a, b]) => {
    persons[a].outDegree++
    persons[b].inDegree++
  });
    
  for (let i = 1; i < persons.length; i++) {
    const person = persons[i];

    if (person.outDegree ===0 && person.inDegree === n-1) {
      return i
    }
  }

  return -1
};  

console.log(findJudge(1, [])); // 1
console.log(findJudge(2, [[1,2]])); // 2
console.log(findJudge(3, [[1,3],[2,3]])); // 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); //-1

```
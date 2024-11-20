# lc-207-中-课程表

```js
/*
https://leetcode.cn/problems/course-schedule/description/
207. 课程表
你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
*/


/*
 思路是清晰的，试了很多次才写完，特殊情况比较多，考虑的不够周全
*/
var canFinish = function(numCourses, prerequisites) {
  // let courseGraph = Array.from({length: numCourses}, (index)=>({inDegree: 0, index, outArray: []}))

  let courseGraph = new Array(numCourses)
  for (let i = 0; i < courseGraph.length; i++) {
    courseGraph[i] = {inDegree: 0, index: i, outArray: []}  // 这里加上index， 方便debug
    
  }

  let hasCircleRequire= false
  prerequisites.forEach(([a, b], index) => {
    if (a === b) {
      // 排除 [1,1] 的情况
      hasCircleRequire = true
    }
    courseGraph[a].inDegree++
    courseGraph[b].outArray.push(a)
  });
  if (hasCircleRequire) {
    return false
  }


  let lastFreeCouseCount = 0
  let freeCourseArr = []
  while (courseGraph.length && freeCourseArr.length !== numCourses) {
    freeCourseArr=[] // 新循环进来清空
    courseGraph.forEach(course => {
      if (course.inDegree<=0) {
        freeCourseArr.push(course)
      }
    });
    if (freeCourseArr.length === 0) {
      return false
    }
    if (freeCourseArr.length === lastFreeCouseCount) {
      // 没有找到更多的free课程
      return false
    }
    lastFreeCouseCount = freeCourseArr.length


    freeCourseArr.forEach(freeCourse => {
      freeCourse.outArray.forEach(outIndex=>{
        courseGraph[outIndex].inDegree --
      })
      freeCourse.outArray = [ ] // 需要清空，否则会持续减
    });
  }
  return true
};


console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
console.log(canFinish(20,[[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]])); // false
console.log(canFinish(3, [[2,0],[2,1]])); // true
console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
console.log(canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]])); // false
```
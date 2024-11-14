# lc-77-中-组合

```js
/**
 https://leetcode.cn/problems/combinations/description/

给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。


 */


// ---------------------------------------------------
/**
  这是时间复杂度是 n²
  改进：用tmp来节省空间复杂度

  4: 2024年1月8日 复习
 */









  
var combine = function(n, k) {

  // let getCombine = (from, to , count) =>

  let swap = (nums, l, r)=>{
    let tmp = nums[l]
    nums[l] = nums[r]
    nums[r] = tmp
  }

  const nums = Array.from({length: n}, (_,index)=> index)
  console.log(nums);

  let results = []

  let dfs = (l)=>{

    for (let i = l; i < nums.length; i++) {
      for (let j = 0; j < k; j++) {
      
        
        swap(nums, i, j)
        
        dfs(nums, i+1)
        swap(nums, i, j)
  
  
      }
      
    }



  }


  


  
};



// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
console.log(combine(4, 2)); 
console.log(combine(1, 1));  // [[1]]
```
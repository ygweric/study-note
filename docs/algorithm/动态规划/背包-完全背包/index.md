# 背包-完全背包

```js
/*
https://zhuanlan.zhihu.com/p/377231783

有N件物品和一个最多能背重量为W的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品都有无限个（也就是可以放入背包多次），求解将哪些物品装入背包里物品价值总和最大。

完全背包和01背包问题唯一不同的地方就是，每种物品有无限件。

*/

/*
  dp(i, j) : 
      i: 前(i-1)个物品， 1 ~ i-1, i最小为1
      j: 包容量 j
      dp(i, j)：前i个物品的总价值

  dp(i, j) =  max(
                  dp(i-1, j), // 不包含第i个
                  dp(i-1, j- weight[i] ) + value[i] // 包含第i个
              )

  j=0：dp(i, 0) = 0 // 背包容量为0， 无论多少个数，价值都是0 
  i=1: dp(1, j) = 0 // 物品个数为1，无论背包容量多少，价值都是 min(weight[i], size)
*/

/*
  1. 看了文章，算是一把搞定，主要算是有之前滚动数组的基础吧
  2. 2024年1月31日 又看了一遍dp推到公式，还算比较顺利写完了，算是加强了自己的理解
 */
let getMaxBagValue = (weights, values, size) => {
  /*
    dp(i, j) = max(
        dp(i-1, j ),
        dp(i-1, j - weight(i)) +value[i]
    )

    这个是二维数组，下面是推断为一维数组的原理===》
   由于取 max， dp(i, j) > = dp(i-x, j), 因为可选的物品越多，价值肯定越大
   所以可以改写为下面的

    dp(i, j) = max(
      max(dp(i, j)， dp(i-1, j)),
     max(dp(i, j- weight(i)) +value[i], dp(i-1, j - weight(i)) +value[i])
    )

    再次简化可得
    dp(i, j) = max(
       dp(i, j),
       dp(i, j- weight(i)) +value[i]
    )
    可以看到，dp(i, j)的值, 只和 <j 有关系，因此可以用以为数组来推断



*/
  let nums = new Array(size + 1).fill(0);
  // i, j=0时候，全部为0，没有意思，所以直接从i, j=1开始
  for (let i = 0; i < weights.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      // console.log(`i: ${i} j: ${j} nums: ${JSON.stringify(nums)}`);
      if (j - weights[i]> 0) { 
        //----- 这个要价格判断，不要不然报错
        nums[j] = Math.max(nums[j], nums[j - weights[i]] + values[i]);
      }
    }
  }

  return nums[nums.length - 1];

  //
};

console.log(
  getMaxBagValue(
    [5, 1, 2, 3, 4, 5], // weights
    [6, 2, 4, 4, 5, 6], // values
    6 // size
  )
); // 10

```
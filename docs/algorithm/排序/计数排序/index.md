# 计数排序

```js
/*

Array.from({length:20, }, ()=>(Math.floor(Math.random()*100)))

*/

  

/*

计数排序，看完介绍后，挺好理解的，

时间复杂度为 O(n)

  

*/

function countingSort(nums) {

  let max = Number.MIN_SAFE_INTEGER;

  let min = Number.MAX_SAFE_INTEGER;

  

  for (const num of nums) {

    max = Math.max(max, num);

    min = Math.min(min, num);

  }

  

  // 根据大小，从小到大放入countArr中

  let countArr = new Array(max - min + 1).fill(0);

  for (const num of nums) {

    countArr[num - min]++;

  }

  

  // 遍历 countArr， 从左到右，从小到大，依次展开到results中

  let results = [];

  for (let index = 0; index < countArr.length; index++) {

    while (countArr[index] > 0) {

      countArr[index]--;

      results.push(index + min);

    }

  }

  

  return results;

}

  

console.log(countingSort([4,4,7,3,7,7,0,1,4]));

console.log(countingSort([3, 6, 2, 5, 8, 7, 1, 4]));

console.log(

  countingSort([

    68, 46, 99, 23, 18, 45, 27, 28, 18, 50, 4, 60, 71, 64, 83, 29, 25, 39, 33,

    90,

  ])

);

console.log(

  countingSort([

    9, 6, 4, 7, 5, 3, 1, 8, 1, 0, 2, 9, 8, 1, 3, 2, 2, 0, 3, 5, 0, 0, 4, 2, 8,

    1, 3, 4, 9, 2,

  ])

);
```
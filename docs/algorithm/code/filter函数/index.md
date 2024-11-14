# 实现js的filter函数

```js
function filterFn(conditionFn) {
  let newNums = [];
  this.forEach((item) => {
    if (conditionFn(item)) {
      newNums.push(item);
    }
  });
  return newNums;
}
Array.prototype.filterFn = filterFn;

console.log([1, 2, 3, 4].filter((item) => item % 2 == 0));
console.log([1, 2, 3, 4].filterFn((item) => item % 2 == 0));

```
# lc-LCR159-简-库存管理 III

```js
/*
https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/description/
LCR 159. 库存管理 III
仓库管理员以数组 stock 形式记录商品库存表，其中 stock[i] 表示对应商品库存余量。请返回库存余量最少的 cnt 个商品余量，返回 顺序不限。

示例 1：

输入：stock = [2,5,7,4], cnt = 1
输出：[2]
示例 2：

输入：stock = [0,2,3,6], cnt = 2
输出：[0,2] 或 [2,0]

题解 https://www.bilibili.com/video/BV1Qu4y1P7kg?p=11&vd_source=80df5fba01fe79535a6107a33a26594c
 */

/*
1. 又是个堆排序，但是对我来说没有学习的必要，太难了
*/


var inventoryManagement = function(stock, cnt) {
    stock.sort((a,b)=>a-b)
    return stock.slice(0, cnt)
};

console.log(inventoryManagement( [2,5,7,4], 1)); // [2]
console.log(inventoryManagement([0,2,3,6], 2)); // [0,2] 或 [2,0]
// console.log(inventoryManagement(xxxxx, xx)); // xxx
// console.log(inventoryManagement(xxxxx, xx)); // xxx
// console.log(inventoryManagement(xxxxx, xx)); // xxx
```
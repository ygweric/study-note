
# 算法工具库js

算法在本地测试的时候想，需要的一些工具，主要包括
* 创建二叉树节点
* 打印矩形
* ...

## arr2tree.js
二叉树和数组之间相互转换

```js
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var generateTree = function (nums) {
  let nodeArr = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    let val = nums[i];
    if (val != null) {
      if (!nodeArr[i]) {
        nodeArr[i] = new TreeNode(val, null, null); // 第一次被初始化
      } else {
        nodeArr[i].val = val; // 在下面给 parentNode 设置左右孩子时候，已经 new 过了
      }
    }

    let curNode = nodeArr[i];
    let isLeft = i % 2 !== 0;
    if (i !== 0) {
      let parentNodeIndex = Math.floor((i - 0.1) / 2);
      if (!nodeArr[parentNodeIndex]) nodeArr[parentNodeIndex] = new TreeNode();

      let parentNode = nodeArr[parentNodeIndex];

      if (isLeft) {
        parentNode.left = curNode;
      } else {
        parentNode.right = curNode;
      }
    }
  }

  // console.log(JSON.stringify(nodeArr[0], null, 2));
  return nodeArr[0];
};

var getLevelTree = (root) => {
  const queue = [root];
  let numArr = [];

  while (queue.length > 0) {
    let node = queue.shift();
    // 这里所有空的子节点，都是null，出现 [-1, 0, 3, -2, 4, null, null, 8, null, null, null, null, null]
    numArr.push(node ? node.val : null);
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // 删除后面的null： [-1, 0, 3, -2, 4, null, null, 8, null, null, null, null, null]
  while (numArr[numArr.length - 1] == null) {
    numArr.pop();
  }
  return numArr;
};

// console.log(getLevelTree(generateTree([-1, 0, 3, -2, 4, null, null, 8])));
// console.log(getLevelTree(generateTree([3, 1, 2, 3, 4, 5, 6, 7, 8])));

module.exports = {
  TreeNode,
  generateTree,
  getLevelTree
};
```

## array2d.js
打印二维数组

```js
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      let row = '';
      for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + ' '; // 使用空格分隔每个元素
      }
      console.log(row.trim()); // 打印每一行并移除末尾的空格
    }
  }
  
  module.exports = printMatrix;
  
```

## chianList.js
链式结构转换

```js
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var generateChain = function (nums) {
  let preNode = null;
  let curNode = null;
  for (let i = nums.length - 1; i >= 0; i--) {
    let val = nums[i];

    curNode = new ListNode(val, null);
    if (preNode) {
      curNode.next = preNode;
    }
    preNode = curNode;
  }
  return curNode;
};

let getChainArray = (node) => {
  if (!node) {
    return null;
  }
  let arr = [];
  let curNode = node;
  arr.push(curNode.val);
  while (curNode.next) {
    curNode = curNode.next;
    arr.push(curNode.val);
  }

  return arr;
};

module.exports = {
  ListNode,
  generateChain,
  getChainArray,
};

```
## logResult.js

打印结果，好像用处不大，忘记了

```js
function getLogResultFn(fn) {
  return function () {
    console.log(fn(...arguments));
  };
}

module.exports = getLogResultFn;

```

## memoryTime.js
内存、耗时检测，leetcode的有点不准

```js
function usageSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 ) * 100) / 100 + " kb";
}

let now = null

function load(params) {
    now =  performance.now()
}
function log(params) {
    console.log(`time : ${(performance.now() - now).toFixed(4)} ms, memory: ${usageSize()}`);
}

const memoryTime = {
    load,
    log
}

module.exports = memoryTime;
```

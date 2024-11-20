# 实现promise

```js
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class PromiseA {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;

    this.onFulfilledFn = null
    this.onRejectedFn = null

    // 调用此方法就是成功
    let resolve = (value) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;

        this.onFulfilledFn(this.value)
      
        
      }
    } 

    // 调用此方法就是失败
    let reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedFn(this.reason)
      }
    }

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者  
      executor(resolve,reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    this.onFulfilledFn = onFulfilled
    this.onRejectedonFulfilledFn = onRejected

    if (this.status === FULFILLED) {
        onFulfilled(this.value)
      }
  
      if (this.status === REJECTED) {
        onRejected(this.reason)
      }
  
  }
}

new Promise((resolve, reject) => {
    resolve('成功 then ');
  }).then().then().then(data=>{
    console.log(data);
  },err=>{
    console.log('err',err);
  })
  
  


 new PromiseA((resolve, reject) => {
    resolve('成功 sync');
  }).then(
    (data) => {
      console.log('success', data)
    },
    (err) => {
      console.log('faild', err)
    }
  )
  

 new PromiseA((resolve, reject) => {
    // 传入一个异步操作
    setTimeout(() => {
      resolve('成功 async');
    },500);
  }).then(
    (data) => {
      console.log('success', data)
    },
    (err) => {
      console.log('faild', err)
    }
  )
  
```
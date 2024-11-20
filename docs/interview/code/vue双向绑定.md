# vue双向绑定

# defineProperty 实现
```js

// 验证更新是否触发
function updateView(newVal) {
  // console.log("视图更新", newVal, JSON.stringify(newVal));
  console.log("视图更新", newVal);
  // console.log("视图更新");
}

let cloneArrayPrototype = Object.create(Array.prototype);
const methods = ["push"];
methods.forEach((methodName) => {
  cloneArrayPrototype[methodName] = function () {
    updateView(arguments);
    Array.prototype[methodName].call(this, arguments);
  };
});

// 监听对象属性
function observe(target) {
  if (typeof target !== "object") {
    return;
  }

  if (Array.isArray(target)) {
    target.__proto__ = cloneArrayPrototype;
    return;
  }

  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      let value = target[key];
      Object.defineProperty(target, key, {
        get() {
          observe(value);
          return value;
        },
        set(newVal) {
          if (newVal !== value) {
            updateView(newVal);
            value = newVal;
          }
        },
      });
    }
  }
}

// 准备数据
const data = {
  name: "Yimwu",
  age: 1,
  myCars: ["Bugatti", "Koenigsegg"],
  information: {
    tel: "135xxxxx354",
    email: "15xxxxx@xx.com",
  },
};

// 监听数据
observe(data);

// 测试
data.name = "YI_new"; // YI
data.age = { num: 222221 }; //(监听成功)输出 --> 数据更新
data.information.tel = "13456xxx234_new"; // 13456xxx234
data.age.num = 1111111110; // 1111111110
data.myCars.push("AE86_new"); // (监听成功)输出 --> 数据更新
console.log(JSON.stringify(data, null, 2));

```

# proxy实现

```js
// 模拟数据更新
function update(val) {
  console.log("update view: ", val);
}

// proxy
function observe_proxy(data) {
  // console.log("observe_proxy data: ", data);
  return new Proxy(data, {
    get(target, key) {
      let value = target[key];
      // console.log("get: ", value, typeof value);
      if (typeof value === "object") {
        return observe_proxy(value);
      } else {
        return value;
      }
      // return key;
      // return Reflect.get(target,key)
    },
    set(target, key, newVal) {
      update(newVal);
      // if (typeof newVal === "object") {
      //   target[key] = observe_proxy(newVal);
      // }else{
      //   target[key] = newVal
      // }
      target[key] = newVal;
      return true
    },
  });
}
// 测试数据
const data = {
  name: "Yimwu",
  age: 1,
  myCars: ["Bugatti", "Koenigsegg"],
  information: {
    tel: "135xxxxx354",
    email: "15xxxxx@xx.com",
  },
};
//
const dataProxy = observe_proxy(data);
dataProxy.name = "YI_new"; // YI
dataProxy.age = { num: 222221 }; //(监听成功)输出 --> 数据更新
dataProxy.information.tel = "13456xxx234_new"; // 13456xxx234
dataProxy.age.num = 1111111110; // 1111111110
dataProxy.myCars.push("AE86_new"); // (监听成功)输出 --> 数据更新

// console.log(JSON.stringify(dataProxy, null, 2));

```
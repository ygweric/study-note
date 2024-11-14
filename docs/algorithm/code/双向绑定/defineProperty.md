
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
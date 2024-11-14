

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
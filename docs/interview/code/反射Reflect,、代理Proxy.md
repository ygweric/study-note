# 反射Reflect,、代理Proxy


 - [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
 - [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
 - [比较 Reflect 和 Object 方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)

## 反射Reflect

```js

//*
setTimeout(() => {
  console.log('>>>>>>>>>>>>> Reflect.construct');
  console.log(new String(123));
  console.log(Reflect.construct(String, [123]));
}, 0);
//*/

//*
setTimeout(() => {
  console.log('>>>>>>>>>>>>> Reflect.apply');
  function Person() {
    this.name = 'foo'
    this.getName = function (num) {
      return this.name + num
    }
  }
  this.name = 'bar'
  const person = new Person()
  console.log(person.getName(1));
  console.log(person.getName.apply(this, [2]));
  console.log(Reflect.apply(person.getName, this, [2]));
}, 0);
//*/

//*
setTimeout(() => {
  console.log('>>>>>>>>>>>>> Reflect.ownKeys');
  let myObject = Object.create(null) // 此时myObject并没有继承Object这个原型的任何方法,因此有：
  console.log('myObject.hasOwnProperty === undefined: ', myObject.hasOwnProperty === undefined); // 此时myObject是没有hasOwnProperty这个方法，那么我们要如何使用呢？如下：
  console.log('Object.prototype.hasOwnProperty.call(myObject, "foo"): ', Object.prototype.hasOwnProperty.call(myObject, 'foo')); // 是不是很恐怖，写这么一大串的代码！！！！
  console.log('Reflect.ownKeys(myObject): ', Reflect.ownKeys(myObject));
}, 0);
//*/

//*
setTimeout(() => {
  console.log('>>>>>>>>>>>>> Reflect.ownKeys -> Symbol');
  var s = Symbol('foo');
  var k = 'bar';
  var o = { [s]: 1, [k]: 1 };
  console.log('Object.getOwnPropertyNames(o): ', Object.getOwnPropertyNames(o));
  console.log('Object.getOwnPropertySymbols(o): ', Object.getOwnPropertySymbols(o));
  console.log('Reflect.ownKeys(o): ', Reflect.ownKeys(o));
}, 0);
//*/

//*
setTimeout(() => {
  console.log('>>>>>>>>>>>>> Reflect. get/set/has');
  const testObject = {
    a: 'you',
    b: 'like'
  }
  console.log('Reflect.get(testObject, "a"): ', Reflect.get(testObject, 'a'));
  Reflect.set(testObject, 'a', 'me')
  console.log('Reflect.get(testObject, "a"): ', Reflect.get(testObject, 'a'));
  console.log('Reflect.has(testObject, "a"): ', Reflect.has(testObject, 'a'));
  console.log('Reflect.has(testObject, "d"): ', Reflect.has(testObject, 'd'));
}, 0);
//*/

//*
setTimeout(() => {
  console.log('>>>>>>>>>>>>> Reflect.getPrototypeOf');
  let object = { name: 'rrr', age: 18 }
  console.log('Object.getPrototypeOf(object): ', Object.getPrototypeOf(object));
  console.log('Reflect.getPrototypeOf(object): ', Reflect.getPrototypeOf(object));

  console.log('Object.getPrototypeOf(1): ', Object.getPrototypeOf(1));
  // 等同于Object.getPrototypeOf(),唯一不同的是当传参target不是一个对象的时候：前者会强制将target转为一个对象。
  // console.log('Reflect.getPrototypeOf(1): ', Reflect.getPrototypeOf(1));
}, 0);
//*/

//*
setTimeout(() => {
  console.log('>>>>>>>>>>>>> for of/in Array');
  let array = [1, 2, 3]
  for (const iterator of array) {
    console.log(iterator);
  }
  for (const key in array) {
    console.log('1>>>> ', key);
    if (Object.hasOwnProperty.call(array, key)) {
      const element = array[key];
      console.log('2>>>> ', element);
    }
  }
  console.log('>>>>>>>>>>>>> for in Object');
  let object = { name: 'rrr', age: 18 }
  for (const key in object) {
    console.log('1>>>> ', key);
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      console.log('2>>>> ', element);
    }
  }
}, 0);
//*/


```

## 代理Proxy

```js

const target = {
  notProxied: "original value",
  proxied: "original value"
};

const handler = {
  get: function (target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    // return Reflect.get(...arguments);
    return target[prop];
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied);    // "replaced value"




const a = [
  {
    path: '4.mp3',
    isPlaying: true,
    lastBeginTime: 104,
    player: 'payer-1'
  },
  {
    path: '6.mp3',
    isPlaying: true,
    lastBeginTime: 106,
    player: 'payer-2'
  },
  {
    path: '5.mp3',
    isPlaying: false,
    lastBeginTime: 102,
    player: 'payer-3'
  },
]
isPlaying, lastBeginTime

6

```
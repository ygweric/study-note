# Object.xxx


## [Object.create()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
**`Object.create(proto, propertiesObject)`** 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）

```js
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};000
const me = Object.create(person);

me.__proto__ === person; // true
```


## Object.assign() 

**`Object.assign()`** 方法将所有[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)（`Object.propertyIsEnumerable()` 返回 true）和[自有](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)（`Object.hasOwnProperty()` 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。


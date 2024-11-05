# js模块的几种形式

探讨下面内容：
- js导入
- nodeJS导入
- ES Module导入
- vite、webpack导入

##  使用 `<script>` 标签直接引入
```html
<script src="https://cdn.jsdelivr.net/npm/library-name@version/dist/library.min.js"></script>
```
## 使用模块打包工具

```js
// ES6 模块语法 
import library from 'library-name';
```

## 使用 Node.js 的 require()

```js
const library = require('library-name');
```

## ES模块（ESM, ECMAScript Modules)

### import xxx from './xx.js';


这种导入方式用于导入模块的默认导出（default export）。当一个模块只有一个主要的导出项时，通常会使用默认导出。默认导出可以是一个函数、类、对象或其他任何值。

**module.js**

```js
// 默认导出一个函数
export default function myFunction() {
  console.log('This is a default export');
}
```

**main.js**

```js
import myFunction from './module.js';

myFunction(); // 输出: This is a default export
```

### import * as xx from './xx.js';

这种导入方式用于导入模块的所有命名导出（named exports）。它将所有命名导出作为一个对象导入，对象的属性名对应于模块中的导出名称。


**module.js**

```js
// 命名导出多个函数
export function function1() {
  console.log('This is function1');
}

export function function2() {
  console.log('This is function2');
}
```

**main.js**

```js
import * as myModule from './module.js';

myModule.function1(); // 输出: This is function1
myModule.function2(); // 输出: This is function2
```

### `import xxx` vs `import * as xx` 

1. **默认导出 vs 命名导出**：
- `import moduleName from './module.js';` 导入的是模块的默认导出。
- `import * as moduleName from './module.js';` 导入的是模块的所有命名导出。
2. **导入的结构**：
- 默认导出可以直接赋值给一个变量名。
- 命名导出会被封装在一个对象中，对象的属性名与模块中的导出名称一致。
3. **使用场景**：
- 当模块只有一个主要的导出项时，使用默认导出更为简洁。
- 当模块有多个导出项时，使用命名导出可以更好地组织和管理这些导出项。

















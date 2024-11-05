# js导入的几种形式

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


### 动态导入 import()

动态导入允许你在运行时按需加载模块，这对于提高性能和减少初始加载时间非常有用。

```js
// 动态导入模块
import('./module.js').then((module) => {
  // 使用模块中的功能
  module.functionName();
}).catch((error) => {
  console.error('Failed to load module', error);
});
```

### 使用 `type="module"` 的` <script>` 标签

在HTML中，可以通过设置`<script>`标签的type属性为module来引入ES模块。

```html
<script type="module">
  import { functionName } from './module.js';
  functionName();
</script>
```


## vite

### `import.meta.glob`

`import.meta.glob` 通常用于以下场景：

1. **按需加载组件**：在Vue 3等框架中，可以用来动态加载组件。
2. **批量导入文件**：例如，导入一个目录下的所有图片或JSON文件。
3. **懒加载路由**：在Vue Router或React Router中，可以用来动态加载路由组件。

### 基本用法

假设你有一个目录 `components`，里面包含多个组件文件，你可以使用 `import.meta.glob` 来动态导入这些组件。


```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 动态导入 components 目录下的所有 .vue 文件
const components = import.meta.glob('./components/*.vue');

for (const path in components) {
  const componentName = path.split('/').pop().replace(/\.vue$/, '');
  components[path]().then((module) => {
    app.component(componentName, module.default);
  });
}

app.mount('#app');
```

#### 解释

- **`import.meta.glob`**：返回一个对象，键是匹配的文件路径，值是动态导入的Promise。
- **`context.keys()`**：在Webpack中，返回所有匹配的文件路径。
- **`context(key)`**：在Webpack中，根据文件路径动态导入模块。


## webpack

`require.context` 是 Webpack 提供的一个强大的功能，用于创建一个动态的模块请求上下文。它允许你在运行时动态地导入一组模块，而不需要手动列出每个模块的路径。这对于处理大量的文件（如组件、图片、配置文件等）非常有用。

### 示例

假设你有一个 `components` 目录，里面包含多个 Vue 组件文件，你希望动态地导入这些组件。

#### 目录结构

```
src/
├── components/
│   ├── Button.vue
│   ├── Input.vue
│   └── Modal.vue
└── main.js
```

 main.js

```js
// 创建一个 require.context 对象
const requireComponent = require.context(
  './components', // 目录路径
  false,          // 是否递归搜索子目录
  /\.vue$/        // 匹配模式，只匹配 .vue 文件
);

// 遍历所有匹配的文件
requireComponent.keys().forEach((fileName) => {
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, ''); // 去掉文件扩展名

  const component = requireComponent(fileName).default;

  // 注册组件到 Vue 应用
  app.component(componentName, component);
});
```

### 解释

1. **创建 `require.context` 对象**：


```
const requireComponent = require.context(
  './components', // 目录路径
  false,          // 是否递归搜索子目录
  /\.vue$/        // 匹配模式，只匹配 .vue 文件
);
```

2. **遍历匹配的文件**：

```js
requireComponent.keys().forEach((fileName) => {
  // 处理文件名，提取组件名
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, ''); // 去掉文件扩展名

  // 导入组件
  const component = requireComponent(fileName).default;

  // 注册组件到 Vue 应用
  app.component(componentName, component);
});

```
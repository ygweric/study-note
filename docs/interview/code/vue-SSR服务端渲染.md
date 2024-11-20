# vue-SSR服务端渲染


## SSR vue静态页面
用`createSSRApp`渲染，`renderToString`得到对应的HTML， 拿到对应的html，可以通过express直接返回给接口

由于前段没有加载vue，因此无法进行交互

```js
// 此文件运行在 Node.js 服务器上
import { createSSRApp } from 'vue'
// Vue 的服务端渲染 API 位于 `vue/server-renderer` 路径下
import { renderToString } from 'vue/server-renderer'

const app = createSSRApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{ count }}</button>`
})

renderToString(app).then((html) => {
  console.log(html)
})
```

## SSR 客户端激活
在激活过程中，Vue 会创建一个与服务端完全相同的应用实例，然后将每个组件与它应该控制的 DOM 节点相匹配，并添加 DOM 事件监听器。

1. 用`server.use(express.static('.'))`来托管客户端文件，当做静态文件等待返回。
2. 通过[Import Map](https://github.com/WICG/import-maps)来在前端引入Vue
```html
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>
```
3. 将 `<script type="module" src="/client.js"></script>` 添加到 HTML 外壳以加载客户端入口文件。
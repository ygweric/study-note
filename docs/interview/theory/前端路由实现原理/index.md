# 路由的实现


在常用的前端框架（Vue, React 等）中，通常会有 hash 路由 和 history 路由两种路由方式。

# hash 路由：
* 监听 url 中 hash 的变化，渲染不同的内容，这种路由不向服务器发送请求，不需要服务端的支持；
* 事件hashchange只会在 hash 发生变化时才能触发，而第一次加载页面时并不会触发这个事件，因此我们还需要监听load事件。

## location属性

| 属性                | 含义                        |     |
| ----------------- | ------------------------- | --- |
| location.href     | 完整的urll                   |     |
| location.protocol | 当前URL的协议，包括 : ; 比如 https: |     |
| location.host     | 主机名和端口号                   |     |
| location.hostname | 主机名                       |     |
| location.port     | 端口号                       |     |
| location.pathname | url的路径部分，从 / 开始;          |     |
| location.search   | 查询参数，从 ? 开始               |     |
| location.hash     | hash值，从 # 开始的             |     |

## 示例代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <a href="#/">主页</a>
  <a href="#/home">home</a>
  <a href="#/index">index</a>
  <div id="content"></div>

  <script>
    /*
    URL中hash值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash部分不会被发送。
    hash值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash的切换。
    我们可以使用hashchange事件来监听hash的变化。
    */

    class Router {
      constructor({ routes }) {
        console.log(`Router constructor`);
        this.routes = routes;
        this.renderPages = {};
        this.init();
        this.routes.forEach((item) => {
          console.log(`setting renderPages[${item.path}]`);
          this.renderPages[item.path] = function () {
            document.getElementById('content').innerHTML = item.component;
          };
        })
      }

      init() {
        window.addEventListener('load', this.updateLocation.bind(this))
        window.addEventListener('hashchange', this.updateLocation.bind(this))
      }

      updateLocation() {
        let pathRes = window.location.hash.slice(1);
        console.log(`renderPages :${pathRes}`);
        console.log(`this.renderPages :`, this.renderPages);
        this.renderPages[pathRes]();
      }
    }

    new Router({
      routes: [
        {
          path: '',
          component: "主页"
        },
        {
          path: '/',
          component: "主页"
        },
        {
          path: '/home',
          component: "home"
        },
        {
          path: '/index',
          component: 'index'
        }
      ]
    })
  </script>
</body>

</html>

```
# history 路由：
* 监听 url 中的路径（path）变化，渲染不同的内容，这种路由不向服务器发送请求，需要客户端和服务端共同的支持；

### history路由的特点：

* url中path值的改变，不会重新加载页面。
* 通过popstate事件可以监听到path值的变化。

### 注意

* 和hash路由一样，popstate事件只会在 history 发生变化时才能触发，而第一次加载页面时并不会触发这个事件，因此我们还需要监听load事件。
* pushState和replaceState被调用时，不会触发触发 popstate 事件的，但是我们可以使用window.dispatchEvent来添加事件。


## window.history对象的常用方法

|方法|作用|
|----|----|----|
|pushState(obj, title, url)       |前进到指定的 url，history栈会新增一条记录，不刷新页面|
|replaceState(obj, title, url)    |用 url 替换当前的路由，history栈不会新增记录，不刷新页面|
|forward()                        |前进到下一个路由，如果存在的话|
|back()                           |后退到上一个路由|
|go(number)                       |进入到任意一个路由，正数为前进，负数为后退|


## 示例代码

### 前端代码

```html
<!-- 由于需要放在服务器总，因此demo在“/4-express-server/sites/路由-history.html”中 -->
<!--  需要放在服务器容器中 在/4-express-server中运行 node server.js, 打开 http://localhost:3000/sites/路由-history.html  -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div>由于需要放在服务器总，因此demo在“/4-express-server/sites/路由-history.html”中</div>
  <div> 需要放在服务器容器中 在/4-express-server中运行 node server.js, 打开 http://localhost:3000/sites/路由-history.html </div>
</body>

</html>

```

### 后端代码 (express)
```js
<!--  需要放在服务器容器中 在/4-express-server中运行 node server.js, 打开 http://localhost:3000/sites/路由-history-2.html  -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div>
      需要放在服务器容器中 在/4-express-server中运行 node server.js, 打开
      http://localhost:3000/sites/路由-history.html
    </div>
    <div class="container">
      <nav>
        <p><button class="back">back</button></p>
        <p><button class="go">go</button></p>
        <p><button class="pushstate">pushState</button></p>
        <p><button class="replacestate">replaceState</button></p>
      </nav>
      <div id="app">
        <p class="current">当前URL：<span></span></p>
        <p class="history-len">历史记录的长度：<span></span></p>
      </div>
    </div>

    <script>
      // 声明HistoryRouter
      class HistoryRouter {
        currentUrl = "";

        constructor() {
          this.refresh = this.refresh.bind(this);
          this.addStateListener(); // 添加pushstate/replacestate监听事件

          // 监听所有history事件
          window.addEventListener("load", this.refresh, false);
          window.addEventListener("popstate", this.refresh, false);
          window.addEventListener("pushState", this.refresh, false);
          window.addEventListener("replaceState", this.refresh, false);
        }

        /**
         * window只有 load/popsate的事件，没有pushstate/replacestate的事件，这个函数做下hook监听
         */
        addStateListener() {
          const listener = function (type) {
            var orig = history[type];
            return function () {
              var rv = orig.apply(this, arguments);
              var e = new Event(type);
              e.arguments = arguments;
              window.dispatchEvent(e);
              return rv;
            };
          };
          window.history.pushState = listener("pushState");
          window.history.replaceState = listener("replaceState");
        }
        // state事件统一回调入口
        refresh(event) {
          console.log(`refresh ${location.pathname}`);
          this.currentUrl = location.pathname;
          this.emit("change", location.pathname); //触发change事件
          document.querySelector("#app span").innerHTML = location.pathname;
        }

        // 事件管理emit/on模式
        handlers = {};
        on(evName, listener) {
          this.handlers[evName] = listener;
        }
        emit(evName, ...args) {
          const handler = this.handlers[evName];
          if (handler) {
            handler(...args);
          }
        }
      }

      //创建HistoryRouter
      const router = new HistoryRouter();
      //处理change事件
      router.on("change", function (curUrl) {
        console.log(`router.on change `, curUrl);
        document.querySelector(".current span").innerHTML = curUrl;
        document.querySelector(".history-len span").innerHTML = history.length;
      });

      //为button添加事件来测试
      document.querySelector(".back").addEventListener("click", function () {
        console.log(`click back`);
        window.history.back();
      });
      document.querySelector(".go").addEventListener("click", function () {
        console.log(`click go`);
        window.history.go(1);
      });
      document
        .querySelector(".pushstate")
        .addEventListener("click", function () {
          console.log(`click pushstate`);
          const url = Math.random().toString(36).slice(-6) + ".html";
          window.history.pushState({}, "", url);
        });
      document
        .querySelector(".replacestate")
        .addEventListener("click", function () {
          console.log(`click replacestate`);
          const url = Math.random().toString(36).slice(-6) + ".html";
          window.history.replaceState({}, "", url);
        });
    </script>
  </body>
</html>

```

# js路由


# react 路由


# vue 路由





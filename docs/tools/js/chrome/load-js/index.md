# 直接在Chrome控制台加载js

方便开发测试


下面方法在新的chrome里面会出现**cps**的安全错误，可以打开对应的js的文本内容，直接粘贴在控制台也可以！

--- 

替换下面**YORU_JS_URL** 为你的js路径

```js
;(function x(s) {
  var c = document.createElement('script')
  c.src = s
  document.getElementsByTagName('head')[0].appendChild(c)
})('YORU_JS_URL')
```

具体demo如下

```js
;(function x(s) {
  var c = document.createElement('script')
  c.src = s
  document.getElementsByTagName('head')[0].appendChild(c)
})('https://code.jquery.com/jquery-3.7.1.min.js')(function x(s) {
  var c = document.createElement('script')
  c.src = s
  document.getElementsByTagName('head')[0].appendChild(c)
})('https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.10/dayjs.min.js')(
  function x(s) {
    var c = document.createElement('script')
    c.src = s
    document.getElementsByTagName('head')[0].appendChild(c)
  },
)('https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.5.0/lz-string.min.js')
```

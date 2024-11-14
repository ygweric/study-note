# 左右两栏布局-flex=1

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        display: flex;
        width: 100%;
        height: 500px;
      }
      .left {
        width: 240px;
        height: 100%;
        background-color: lightskyblue;
      }
      .right {
        flex: 1;
        height: 100%;
        background-color: #ffff00;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="left">我是侧边栏</div>
      <div class="right">我是内容区域</div>
    </div>
  </body>
</html>

```

# 左右两栏布局-浮动+BFC

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        width: 100%;
        height: 100vh;
      }
      .left {
        float: left;
        width: 240px;
        height: 100%;
        background-color: lightskyblue;
      }
      .right {
        height: 100%;
        overflow: auto;
        background-color: #ffff00;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="left">我是侧边栏</div>
      <div class="right">我是内容区域</div>
    </div>
  </body>
</html>

```


# 左右两栏布局-浮动+margin

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        width: 100%;
        height: 500px;
      }
      .left {
        float: left;
        width: 240px;
        height: 100%;
        background-color: lightskyblue;
      }
      .right {
        margin-left: 240px;
        height: 100%;
        background-color: #ffff00;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="left">我是侧边栏</div>
      <div class="right">我是内容区域</div>
    </div>
  </body>
</html>

```

# 左右两栏布局-绝对布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        height: 500px;
        position: relative;
      }
      .left {
        width: 240px;
        height: 100%;
        position: absolute;
        background-color: lightskyblue;
      }
      .right {
        height: 100%;
        margin-left: 240px;
        background-color: #ffff00;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="left">我是侧边栏</div>
      <div class="right">我是内容区域</div>
    </div>
  </body>
</html>

```













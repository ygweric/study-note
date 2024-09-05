# npm常用命令和配置（包括yarn、pnpm等）



## 设置不同的源、镜像

yarn、pnpm如果没有单独配置，回先读取npm的配置内容

```
npm config set registry https://registry.npmjs.org 
npm config set registry https://registry.npmmirror.com
npm config set registry https://registry.npm.aliyun.com
yarn config set registry  https://registry.npmmirror.com
yarn config set registry registry.npm.aliyun.com
yarn config set registry https://registry.npmjs.org 
yarn config get registry
```

## 常用npm源

```
淘宝镜像: registry.npm.taobao.org/
cnpmjs镜像: registry.npmjs.com.cn/
华为云镜像: https://mirrors.huaweicloud.com/repository/npm/
阿里云镜像: registry.npm.aliyun.com/
npm官方镜像: registry.npmjs.org/
```

## 查看所有配置

```
npm config list
```



## 查看`npm link` 的项目详情
打开对应目录，查看相应软连接

```
npm ls -g --depth=0 --link=true # npm  
ls ~/AppData/Local/Yarn/Data/link/ # yarn  
```



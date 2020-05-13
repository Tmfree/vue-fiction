# vue-fiction

## 在线预览
> [项目地址][1]
> [线上地址][2]

## Build Setup

### 客户端
``` bash
# 下载或克隆下来，然后安装依赖
yarn or npm install

# 开发预览
yarn or npm serve

# 打包发布，生成的文件在dist文件夹中
yarn or npm build
```

### 服务端
``` bash
# 提取server文件夹,安装依赖
yarn or npm install

# 运行
node app.js
```
## 接口请求的变量修改

### 开发环境
```bash
# .env.development文件
VUE_APP_BASEURL="url"
```
### 生产环境
```bash
# .env.production文件
VUE_APP_BASEURL="url"
```
## 项目结构
```
|-- fiction
    |-- .env.development 开发环境变量
    |-- .env.production 生成环境变量
    |-- .gitignore
    |-- babel.config.js
    |-- package.json
    |-- postcss.config.js
    |-- README.md
    |-- vue.config.js
    |-- yarn.lock
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- server   服务器端接口Api
    |-- src
        |-- App.vue
        |-- main.js
        |-- assets
        |-- components
        |-- request 请求设置
        |-- router  路由
        |-- store
        |   |-- getter.js
        |   |-- index.js
        |   |-- module
        |       |-- common
        |       |-- rank
        |-- utils
        |   |-- navBar.js 
        |   |-- vw.css
        |-- views
            |-- About.vue
            |-- BookInfo.vue
            |-- CatDetail.vue
            |-- Category.vue
            |-- Home.vue
            |-- Layout.vue
            |-- Rank.vue
            |-- RankDetail.vue
            |-- Search.vue
```
## 预览

![效果图](static/1.png)

![效果图](static/2.png)

## 最后
要是感兴趣的话，可以自行看代码，大部分内容还是比较简单的，有问题的话欢迎提出了一起讨论

[1]: https://github.com/Tmfree/vue-fiction
[2]: https://tmfree.dowy.cn/
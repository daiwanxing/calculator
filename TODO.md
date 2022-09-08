### 待办

-   [x] 添加 eslint，对代码校验
-   [x] 完善 npmrc 文件，禁止用户通过其他包管理工具安装依赖
-   [x] 添加 prettier，控制代码格式
-   [x]  初次启动项目报错
-   [ ] 添加webpack生产配置文件
-   [ ] 添加docker CI脚本

### 搭建项目过程中遇到的问题

1. App.vue has not exported default

这个Bug很邪门，只有初次启动devServer 会 compiler error, 后续HMR该error自动消失，从Google上找了很多资料，有说和`shim-vue.d.ts`有关，也有说`ts-loader`有关，也有说和`vetur`以及`volar`有关。

经过自己的思考，该错误打印在控制台，那么可以将错误定位在和编译`lang=ts`的vue文件相关的，而要想对`<script lang="ts">`的vue文件进行编译到js，也就少了不ts-loader，毕竟它就是干这个活的。但查了ts-loader的Repo相关issue，也没有什么收获。最终我将问题定位到了`package.json`，查看ts-loader的版本为固定的`8.4.0`，我不知道当初搭建项目为什么会选择这个版本。然后将其升级到了最新的`9.*`，该问题消失...有的时候Bug就是这么奇怪，但还是得微笑对面它😄

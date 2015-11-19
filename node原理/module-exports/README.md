# 命令行形式
```bash
    node index.js
```
##说明
此测试模块调试了node运行时的模块引入机制，通过打印process.mainModule  
可以看到module的exports属性定义了对外接口，children数组定义了所有依赖的子模块  
module.path可以看到node_modules的加载路径
## 下面贴一段我的测试结果仅仅作为参考，读者可以参照代码写自己的测试用例
    /**
     * Module {
      id: '.',
      exports: { index: 'index' },
      parent: null,
      filename: '/Users/slashhuang/个人项目库/personal/node-demo/modules/module-exports/index.js',
      loaded: false,
      children:
       [ Module {
           id: '/Users/slashhuang/个人项目库/personal/node-demo/modules/module-exports/test.js',
           exports: [Object],
           parent: [Circular],
           filename: '/Users/slashhuang/个人项目库/personal/node-demo/modules/module-exports/test.js',
           loaded: true,
           children: [],
           paths: [Object] } ],
      paths:
       [ '/Users/slashhuang/个人项目库/personal/node-demo/modules/module-exports/node_modules',
         '/Users/slashhuang/个人项目库/personal/node-demo/modules/node_modules',
         '/Users/slashhuang/个人项目库/personal/node-demo/node_modules',
         '/Users/slashhuang/个人项目库/personal/node_modules',
         '/Users/slashhuang/个人项目库/node_modules',
         '/Users/slashhuang/node_modules',
         '/Users/node_modules',
         '/node_modules' ] }
     */
# 整个module依赖就是个大的DOM树     
#[联系作者](http://120.26.69.71/)    
     
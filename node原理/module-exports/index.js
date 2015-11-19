/**
 * Created by slashhuang on 15/11/19.
 */

//测试module和exports变量
console.log(require('./test'));
module.exports={
    index:'index'
};
console.log(process.mainModule);
//以下为打印的内容，可以看到node通过children,parent的形式【类似dom树的形式】加载模块依赖
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
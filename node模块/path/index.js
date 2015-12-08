/**
 * Created by slashhuang on 15/11/25.
 */

var path = require('path');

//normalize方法
// 遇到slash直接去除，遇到comma则按照文件向上一级或者当前路径的形式进行解析
console.log(path.normalize('/a/.///b/d/../c/'));  //   /a/b/c
console.log(path.normalize('/a/.///b/d/../../c/'));//   /a/c

//join方法
console.log(path.join(process.cwd(),'static','test'));

//basename ,dirname ,extname
var test_path = '/c/d/test.html';
console.log(path.basename(test_path)); //   test.html
console.log(path.dirname(test_path));//   /c/d
console.log(path.extname(test_path));//  .html

//resolve命令相当于shell里面的cd命令
console.log(path.resolve('../../'));

//relative返回相对路径
//比如执行path.relative(from,to);和下面的代码是等价的
//path.resolve(from, path.relative(from, to)) == path.resolve(to)
console.log(path.relative(process.cwd(),'/Users/slashhuang/个人项目库'));





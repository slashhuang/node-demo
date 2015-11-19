/**
 * Created by slashhuang on 15/11/19.
 */

//测试module和exports变量

//均为对象类型
var type_module_exports = typeof module.exports ;
var type_exports = typeof exports;

/**  本地变量
 * exports module __dirname __filename 和所有用var声明并在作用域顶端的数据等
 *
 *  在内存中 exports和module分别占据两块地址。
 *
 *      exports单纯的存储所有对外的接口变量组成对象
 *
 *      module存储 exports     (指向exports(如果exports是对象的话) )
 *                filename    (当前文件)
 *                paths 存储  (node_modules加载路径)
 *                等变量
 *     它们是两个变量。
 *
 *     可以采用exports.[name] = variable;
 *            module.exports = variable;
 *            module.exports[name]= variable;
 *            的形式定义对外接口。
 *
 *            module.exports定义总的对外接口
 *
 *     但是不能采用exports={}定义接口，因为exports指向新的内存地址,变量被覆盖。
 *
 *     !!!!! [导出的所有的内容都体现在process.mainModule.module.exports里面]
 *
 *     在node加载文件的时候，会传入exports,module,__filename,__dirname，在作用域的顶端接收存储变量
 *
 *
 */
/** 全局变量 process global root 和所有直接声明的变量(如这里的变量test)等
 *
 *  process属性列表 config存储所有node的配置信息
 *                 version存储node各类解析器的版本，包括最重要的openssl,v8引擎等
 *                 mainModule真正存储信息的地方
 *                 cwd()函数
 *                 abort()
 *                 assert()
 *                 binding()
 *                 chdir()
 *                 exit()
 *                 kill(pid,sig)
 *                 memoryUsage()
 *                 moduleLoadList 加载所有的二进制模块
 *                 pid
 *                 platform
 *                 stdin
 *                 stdout
 *                 events (毕竟基于事件驱动)
 *
 *  global属性列表  JSON解析器(!!!轻量级数据格式，它只有parse和stringify两个方法)
 *                 Math对象
 *                 NaN
 *                 undefined
 *                 console对象
 *                 Error等
 *                 其他变量原型
 *
 *                 setTimeout
 *                 setInterval
 *                      这里不是挂载在window对象下了，而是global
 *
 *
 */
//在node解析文件的时候

test = {hello:"hello"};//global variable

var test1={hello:"hello"};//local variable

console.log(exports == module.exports); // true:exports和module.exports指向相同的地址

global.setTimeout(function(){
    process.exit();
},1000);

try{
    throw global.TypeError('must be an object')
}
catch(e){
    console.error(e)
}
module.exports={test:'test'};
//console.log(process.mainModule);



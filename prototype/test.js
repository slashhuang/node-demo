/**
 * Created by slashhuang on 15/10/27.
 */
var mammal = function (name) {
    this.name=name||'hello';
};
mammal.prototype.says= function () {
    console.log(this);
    console.log(this.name);
};
var myMammal = new mammal('sheep');
console.log(myMammal.__proto__);//增加原型链

var cat = function(name){
    this.name=name;
    this.saying='meou';
};

cat.prototype = new mammal();
cat.prototype.purr =function(){
    console.log(this.says())
};
var finalTest = new cat('eat');

//测试函数变量提升
sayHi();//指向下面的函数
function sayHi() {
    console.log("hi");
}
//sayHello();//undefined
var sayHello = function(){
    console.log('hello world')
};
if(!("a" in window)) {
    var a = function() {
        window.a = 1;
    }
}
console.log(a); //undefined 该代码等价于：
var a;
if(("a" in window)) {
    a = function() { window.a = 1;
    }
}
console.log(a);
/** 总结
 *1）变量声明提升：变量申明在进入执行上下文就完成了。

 只要变量在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

 2）函数声明提升：执行代码之前会先读取函数声明，意味着可以把函数申明放在调用它的语句后面。

 只要函数在代码中进行了声明，无论它在哪个位置上进行声明， js引擎都会将它的声明放在范围作用域的顶部；

 3）变量or函数声明：函数声明会覆盖变量声明，但不会覆盖变量赋值。
 *
 */
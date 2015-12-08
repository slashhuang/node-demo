/**
 * Created by slashhuang on 15/11/27.
 */

var extend = require('extend');
var targetObj = {test:'test','test1':'test1'};
var obj1 = {hello:'hello','world':'world'};

//{ test: 'test', test1: 'test1', hello: 'hello', world: 'world' }
console.log(extend(true,targetObj,obj1));
console.log(targetObj);//this is changed target
console.log(obj1);//this is immutable


console.log(extend(targetObj,obj1));//this is changed target



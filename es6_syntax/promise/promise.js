/**
 * Created by slashhuang on 15/11/18.
 */
//所谓Promise，就是一个对象，用来传递异步操作的消息
var dom = document.getElementById('promise');
var results = document.getElementById('results');


//Promise实例的状态变为Resolved，就会触发then方法绑定的回调函数
function then_catch(){

    var p1 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('测试promise'), 500)
    });
    var p2 = new Promise(function (resolve) {
        setTimeout(() => resolve(p1), 1000)
    });
    p2.then(result => results.innerHTML = result);
    //catch为then(null,rejection)的别名
    p2.catch(error => results.innerHTML = error);
}

//如果Promise状态已经变成resolved，再抛出错误是无效的
function no_effect(){
    var promise = new Promise(function(resolve, reject) {
        resolve("ok");
        throw new Error('test');
    });
    promise
        .then(setTimeout(function(value) { results.innerHTML =value },2000))
        .catch(setTimeout(function() { alert('error') },2000));
}


//点击测试
dom.addEventListener('click',function(){
    then_catch();
    no_effect()
});





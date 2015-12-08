/**
 * Created by slashhuang on 15/12/8.
 */
/**
 * 写文件
 * fs.writeFile(path, data[, options], callback(err))
 *
 */
var fs=require('fs');
console.log('going to write into input.pages');
fs.writeFile('./input.pages','hello,testing writing into file',function(err){
    if(err){
        console.warn(err);
    }
    console.log('writing successful');
    fs.readFile('input.pages',function(err,data){
            //data为Uint8Array类型在javascript中，二进制流一般是一个[object ArrayBuffer]的对象，
            // 一般的javascript方法是没法处理这个object的。
            // 要处理它，我们需要用Uint8Array将它转换成一个8位的整形数组

       console.log('执行写入操作后，文件内容是',data.toString());

    })
});

/**
 * Created by slashhuang on 15/12/8.
 */

var fs=require('fs');
/**
 * 读取文件方法
 * fs.readFile(filePath,callback);异步读取文件
 * fs.readFileSync(filePath);同步读取文件
 */
//异步读取文件
fs.readFile('input.txt',function(err,data){
   if(err){
       return console.error(err);
   }else{
       console.log("异步读取文件为"+data.toString());
   }
});
//同步读取文件
var data=fs.readFileSync('input.pages');
console.log('同步读取文件'+data.toString());
console.log('program ended');



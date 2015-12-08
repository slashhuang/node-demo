/**
 * Created by slashhuang on 15/12/8.
 */
/**
 * 删除目录
 * fs.rmdir(path, callback)
 * 参考资料 http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
 */
var fs = require("fs");

console.log("Going to delete directory test");
fs.rmdir("test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("Going to read directory ./");
    fs.readdir("./",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});

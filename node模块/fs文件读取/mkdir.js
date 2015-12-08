/**
 * Created by slashhuang on 15/12/8.
 */
/**
 * 创建目录
 * fs.mkdir(path[, mode], callback)
 */

var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('./test/',function(err){
    if (err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");
});
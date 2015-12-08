/**
 * Created by slashhuang on 15/12/8.
 */

/**
 * fs.open(path, flags[, mode], callback)
 * 打开文件
 */

var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.pages', 'rs+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
});
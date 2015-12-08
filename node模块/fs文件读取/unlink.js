/**
 * Created by slashhuang on 15/12/8.
 */

/**
 * 删除文件
 *
 */
var fs = require("fs");
console.log("Going to delete an existing file");
fs.unlink('input.pages', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("File deleted successfully!");
});
/**
 * Created by slashhuang on 15/12/8.
 */
/**
 * 读取目录
 * fs.readdir(path, callback)
 */
var fs = require("fs");

fs.mkdir('/tm/test',function(err){
    if(err){
        console.warn(err);
    }
    console.log('making dir successful');
    console.log("Going to read directory ./tmp");
    fs.readdir("./tmp/",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});
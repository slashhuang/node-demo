/**
 * Created by slashhuang on 15/12/8.
 */

/**
 * 获取文件信息
 * fs.stat(path, callback(err, stats))
 * Method	Description
 stats.isFile()	Returns true if file type of a simple file.
 stats.isDirectory()	Returns true if file type of a directory.
 stats.isBlockDevice()	Returns true if file type of a block device.
 stats.isCharacterDevice()	Returns true if file type of a character device.
 stats.isSymbolicLink()	Returns true if file type of a symbolic link.
 stats.isFIFO()	Returns true if file type of a FIFO.
 stats.isSocket()	Returns true if file type of asocket.
 */
var fs=require('fs');
console.log('going to get file info');
fs.stat('./input.pages', function (err,stat) {
    if(err){
        console.error(err);
    }
    console.log(stat);
    console.log("Got file info successfully!");

    // Check file type
    console.log("isFile ? " + stat.isFile());
    console.log("isDirectory ? " + stat.isDirectory());
});

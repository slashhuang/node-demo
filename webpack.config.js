/**
 * Created by slashhuang on 15/11/18.
 */
var path =require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    context:process.cwd(),
    entry:{app:'./promise'},
    output: {
        path:path.join(__dirname,'dist'),
        filename: "babel-promise.js",
        publicPath: "/static/",//调试地址为相对路径,它会观察所有bundle的文件，从此publicPath更新内存中的js文件获取
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//添加此插件以增加hotmodulereplace功能
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel'],
                exclude: /node_modules/,
            }
        ]
    }
}
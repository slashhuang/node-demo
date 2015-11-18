/**
 * Created by slashhuang on 15/11/16.
 */
var request = require('request');
request('http://www.baidu.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);// Show the HTML for the Google homepage.
    }
});
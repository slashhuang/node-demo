/**
 * Created by slashhuang on 15/11/16.
 */

console.log(require.extensions['.js'].toString());
/**
 * 结果
 * { '.js': [Function],
 *    '.json': [Function],
 *   '.node': [Function: dlopen] }
 */

console.log(__dirname)
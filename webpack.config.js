/**
 * Created by Bin on 2018/3/9.
 */

module.exports = require('./config/webpack.dev.js')

// 命令切换方式
// 现在你可以将我们的基本配置转为一个函数，然后接受 env 参数，并在两个配置之间切换（通过 --env 设置）：
// "scripts": {
// ...
//   "build:dev": "webpack --env=dev --progress --profile --colors",
//   "build:dist": "webpack --env=prod --progress --profile --colors"
// }
//
// module.exports = function(env) {
//   return require(`./config/webpack.${env}.js`)
// }

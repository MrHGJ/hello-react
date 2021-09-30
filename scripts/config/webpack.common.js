const path = require('path')
module.exports = {
  // 定义了入口文件路径，其属性名 app 表示引入文件的名字。
  entry: {
    app: path.resolve(__dirname, '../../src/app.js'),
  },
  // 定义了编译打包之后的文件名以及所在路径。
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../../dist'),
  },
}

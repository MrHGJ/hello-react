const path = require('path')
const { isDev, PROJECT_PATH } = require('../constants')
module.exports = {
  // 定义了入口文件路径，其属性名 app 表示引入文件的名字。
  entry: {
    app: path.resolve(PROJECT_PATH, './src/app.js'),
  },
  // 定义了编译打包之后的文件名以及所在路径。
  output: {
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    // path.resolve: 可以将路径或者路径片段解析成绝对路径。
    path: path.resolve(PROJECT_PATH, './dist'),
  },
}

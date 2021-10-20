const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
      minify: isDev
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          },
    }),
  ],
  module: {
    rules: [
      // css样式文件处理
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false, // 默认就是 false, 若要开启，可在官网具体查看可配置项
              sourceMap: isDev, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
              importLoaders: 0, // 指定在 CSS loader 处理前使用的 laoder 数量
            },
          },
        ],
      },
      // scss样式文件处理
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev,
              importLoaders: 1, // 需要先被 sass-loader 处理，所以这里设置为 1
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ],
  },
}

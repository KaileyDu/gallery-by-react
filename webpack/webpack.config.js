const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9090',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/index.js'),  //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    ],
    output: {
      path: path.resolve(__dirname, '../dist'), // 输出的路径
      filename: 'app/[name]_[hash:8].js'  // 打包后文件
    },
    module: {
        rules: [
          // {
          //   enforce: 'pre',
          //   test: /\.(js|jsx)$/,
          //   loader: 'eslint-loader',
          //   exclude: /node_modules/,
          // },
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?outputStyle=expanded'
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}'
          },
          {
            test: /\.less$/,
            use: [{
              loader: 'style-loader',
            }, {
              loader: 'css-loader',
            }, {
              loader: 'less-loader',
              options: {
                sourceMap: true,
              },
            }],
          },
        ]
    },
　　 plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // Html-webpack-plugin配置
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.template.html'),
        inject: true
　　　 })
　　 ]
}
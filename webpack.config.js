const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //在设置出口的目录路径  
    filename: 'main.js'
  },
  module: {
    rules: [
      //配置各种loader
      //es6转化es5
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']//更方便的去引入所有的转化语法插件
          }
        }
      },
      //解析css
      {
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader'] //前后顺序不能颠倒
      },
      //解析图片 媒体文件
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      //配置vue相关loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/public/index.html'
    }),//加一个配置对象让vue可以找到对应的模板挂载点,本质就是让vue去找对应的html文件
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  devServer: {
    port: 9000,
    open: true,
    quiet:true
  },
  devtool:'cheap-module-eval-source-map',
};
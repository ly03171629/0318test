const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: ["@babel/polyfill", './src/main.js'],
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
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from:'./src/public',
      to:path.resolve(__dirname, 'dist'),//配置的绝对路径
      ignore:['index.html']
    }])//为了把css拷贝到dist下
  ],
  devServer: {
    port: 9000,
    open: true,
    quiet:true,
    proxy: {

      // http://localhost:9000/api/users/info  我们请求的路径
        
      // http://localhost:4000/api/users/info  代理转发的初始路径
      "/api": {
          target: "http://localhost:4000",
          pathRewrite: {"^/api" : ""},  //代理会把身份标识的东西去掉替换为空串
          //  http://localhost:4000/api/users/info   =》  http://localhost:4000/users/info
          changeOrigin:true  //协议  IP  端口任何改变都会解决
      }
    }
  },
  devtool:'cheap-module-eval-source-map',
  resolve:{
    extensions: [".js", ".json", ".vue"], //自动解析包含的扩展名文件，以后导入不用带扩展名
    alias: {
      //配置别名的地方
      '@': path.resolve(__dirname, 'src'), //这个别名代表以后@就是src的绝对路径
    }
  }
};
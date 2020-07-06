//一、
//1、创建components文件夹，在内部去定义MyButton组件
//2、在src内部创建App组件用来组装以后所有的组件
//3、在Vue当中去注册App组件并且进行渲染

//二、
//配置vue-loader
//1、安装（记得安装之前把vue安装上）
//2、配置loader
//3、配置插件  插件不需要下载 安装了vue-loader 里面会带
//4、把原来的style-loader 改为 vue-style-loader

//三、
/*
1、报错：[Vue warn]: Cannot find element: #root
原因：我们的插件 htmlwebpackplugin 没有告诉vue配套的html是谁，得在webpack配置文件实例化这个插件对象的时候，添加配置
解决：new HtmlWebpackPlugin({
      template:'./src/public/index.html'
    }),

2、[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. 
Either pre-compile the templates into render functions, or use the compiler-included build.
原因：因为我们默认导入的vue是不带解析器的版本，所以我们自己注册和配置的模板没办法去解析
解决：
    1、
    //不用自己写注册和template配置，使用下面的render函数去做 
    // render: h => h(App)  // 注册我们的App组件，并且会把App组件进行渲染，并且runtime-only版本Vue可以使用
    //内部会带着解析的功能

    //使用自己写的注册和template配置，把vue导入的版本修改为带解析器的版本
    2、把导入的vue改为不是runtime-only版本
    import Vue from 'vue/dist/vue.esm.js'
*/

import Vue from 'vue'
import App from './App'
new Vue({
  el:'#root',
  render: h => h(App)  // 注册我们的App组件，并且会把App组件进行渲染，并且runtime-only版本Vue可以使用

  // render:function(createElement){
  //   return createElement(App)
  // }

  // components:{
  //   App
  // },
  // template:'<App/>'//就是vue渲染的模板，之前我们写在挂载点下面，现在我们换了个位置去写
})



import Vue from 'vue'
import App from '@/App'
import store from '@/vuex/store'


Vue.config.productionTip = false

const vm = new Vue({
  el:'#root',
  render: h => h(App),
  store   //如果我们声明使用（注册）store(vuex)，那么每个组件对象都可以通过this.$store拿到我们的store对象
})

import Vue from 'vue'
import App from '@/App'
import vueResource from 'vue-resource'
import store from '@/vuex/store'
Vue.use(vueResource)

Vue.config.productionTip = false

const vm = new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el:'#root',
  render: h => h(App),
  store
})

// console.log(vm)
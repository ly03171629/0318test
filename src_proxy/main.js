import Vue from 'vue'
import App from '@/App'
// import "@babel/polyfill";
// import vueResource from 'vue-resource'
// Vue.use(vueResource)

Vue.config.productionTip = false

const vm = new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el:'#root',
  render: h => h(App)
})

console.log(vm)
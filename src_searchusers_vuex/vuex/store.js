import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
  isFirst:true,
  isLoading:false,
  errMsg:'',
  users:[]
}
const mutations = {
  REQUESTING(state){
    state.isFirst = false
    state.isLoading = true
  },
  REQUEST_SUCCESS(state,userList){
    state.users = userList
    state.isLoading = false  //请求成功拿到数据，显示用户信息
  },
  REQUEST_FAILD(state,error){
    state.errMsg = error.message
    state.isLoading = false //请求失败拿到错误信息，显示错误信息
  }
}
const actions = {
  search(context,q){
    //在发送ajax请求之前，让页面显示正在请求中
    context.commit('REQUESTING')
    //就可以根据searchName去发送ajax请求
    axios({
      url:'https://api.github.com/search/users',
      method:'get',
      params:{
        q
      }
    }).then(response => {
      let userList = response.data.items.map(item => {
        return {
          userName:item.login,
          userUrl:item.url,
          userImg:item.avatar_url
        }
      })
      context.commit('REQUEST_SUCCESS',userList)
    }).catch(error => {
      context.commit('REQUEST_FAILD',error)
    })
  }
}
const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
//是专门用来存（状态）数据的地方，它是一个包含多个属性和属性值的对象
  count:0
}

const mutations = {
//专门用来更新数据的各种方法组成的对象
//这些个方法，必须是直接修改数据的方法， 不能在这些方法内部存在 判断  循环  异步
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}

const actions = {
//专门用来和组件行为（用户行为）进行对接的各种方法组成的对象
//还有一个作用，用来对接成功后，告知相应的mutations中的对应方法去修改数据
  // increment(context){
  //   //接到用户的操作请求（用户分发）之后，提交给相关的修改数据的函数去修改
  //   //在这里可以去写 if  for   异步
  //   context.commit('INCREMENT')
  // }




  iincrement({commit}){
    //接到用户的操作请求（用户分发）之后，提交给相关的修改数据的函数去修改
    //在这里可以去写 if  for   异步
    commit('INCREMENT')
  },

  decrement({commit}){
    //接到用户的操作请求（用户分发）之后，提交给相关的修改数据的函数去修改
    //在这里可以去写 if  for   异步
    commit('DECREMENT')
  },

  incrementIfOdd({commit,state}){
    //action内部的方法可以if for 异步 但是mutations里面的不行
    if(state.count % 2 === 1){
      commit('INCREMENT')
    }
  },

  incrementAsync({commit}){
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  }
}

const getters = {
//一系列的方法，计算属性get方法，根据我们state内的数据计算出来用户要使用的数据
}

//

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})






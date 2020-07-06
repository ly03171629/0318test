<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo"></Header>
      <Main :todosList="todos"  :deleteOne="deleteOne"></Main>
      <Footer :todos="todos" @updateAll="updateAll" @deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

// Vue.component('Header',Header) //全局定义并注册

export default {
  name: "App",
  components:{
    Header,
    Main,
    Footer
  },


  mounted(){
    // this.$bus.$on('updateOne',this.updateOne) //全局事件总线绑定事件

    //消息的订阅
    PubSub.subscribe('haha', this.updateOne) //消息订阅和发布订阅消息  谁接收数据谁就订阅消息
  },



  data(){
    return {
      todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    }
  },
  watch:{
    // todos(newVal,oldVal){

    // }
    todos:{
      deep:true,
      handler(newVal,oldVal){
        localStorage.setItem('TODOS_KEY',JSON.stringify(newVal))
      }
    }
  },
  methods:{
    addTodo(todo){
      // console.log(111)
      this.todos.unshift(todo)
    },
    updateOne(msg,index){
      this.todos[index].isOver = !this.todos[index].isOver
    },
    deleteOne(index){
      this.todos.splice(index,1)
    },
    updateAll(val){
      this.todos.forEach(item => item.isOver = val)
    },
    deleteAll(){
      this.todos = this.todos.filter(item => !item.isOver)
    }
  }
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo" ref="header"></Header>  props通信-->
      <!-- <Header ref="header"></Header>  自定义事件第一种写法-->
      <Header @addTodo="addTodo"></Header>
      <Main :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"></Main>
      <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default {
  name: "",
  components: {
    Header,
    Main,
    Footer
  },
  //自定义事件的第一种方式写法
  // mounted(){
  //   // this.$refs.header.$on('addTodo',this.addTodo)
  //   this.$refs.header.$once('addTodo',this.addTodo)
  // },


  //$off用来解绑自定义事件
  // beforeDestroy(){
  //   this.$refs.header.$off('addTodo')//解绑儿子身上的自定义事件
  // },


  data() {
    return {
      todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    };
  },
  //一般监视：我们没办法去监视数组内部对象的数据，它是在监视数组本身的数据
  // watch:{
  //   todos(newVal,oldVal){
  //     //监视todos，只要todos发生改变，就该存储到localStorage里面
  //     localStorage.setItem('TODOS_KEY',JSON.stringify(newVal))
  //   }
  // },
  //深度监视  监视todos内部所有的数据
  watch:{
    todos:{
      deep:true,//代表打开深度监视
      handler(newVal,oldVal){
        localStorage.setItem('TODOS_KEY',JSON.stringify(newVal))
      }
    }
  },  

  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },

    //修改单个todo的完成状态
    updateOne(index) {
      this.todos[index].isOver = !this.todos[index].isOver;
    },
    //删除单个todo
    deleteOne(index) {
      this.todos.splice(index, 1);
    },

    //修改所有的完成状态
    updateAll(val){
      this.todos.forEach(item => item.isOver = val)
    },

    //删除所有打勾的完成的
    deleteAll(){
      //在原来的数组当中过滤出没有完成的所有组成的一个新数组，然后赋值给todos
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

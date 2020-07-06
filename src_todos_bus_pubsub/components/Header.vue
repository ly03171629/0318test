<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="addT"/>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      content:''
    }
  },
  props:{
    // addTodo:Function
  },
  methods:{
    addT(){
      //回车之后干活
      let {content} = this
      if(content.trim()){
        let id = Date.now()
        let isOver = false
        let todo = {
          id,
          content,
          isOver
        }

        // this.addTodo(todo) //props通信方式
        this.$emit('addTodo',todo) //自定义事件子传父
      }else{
        alert('请输入内容')
      }
      this.content = ''
    }
  }
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

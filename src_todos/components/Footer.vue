<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
      <!-- isCheckAll的数据是和checked属性值进行关联的 -->
      <!-- 
        v-model 如果input当中是有value的，那么v-model影响的就是value的值
        对于文本输入框密码输入框来说一定是有value的
        对于单选输入框和多选输入框，如果没有写value,那么影响的的是checked的值
       --> 
    </label>
    <span>
      <span>已完成{{overNum}}</span> / 全部{{allNum}}
    </span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "",
  props:{
    todos:Array,
    updateAll:Function,
    deleteAll:Function
  },
  methods:{
    deleteA(){
      //调用父组件传过来的方法把所有打勾的干掉
      this.deleteAll()
    }
  },
  computed:{
    overNum(){
      return this.todos.filter(item => item.isOver).length
      // return this.todos.filter(function(item){
      //   return item.isOver
      // }).length
    },
    allNum(){
      return this.todos.length
    },
    isCheckAll:{//checked属性值
      get(){
        //一开始打勾的状态，是需要去计算的
        return this.overNum === this.allNum && this.allNum > 0
      },
      set(val){
        
        //点击了全选，相当于在修改打勾的状态，修改后需要干点事
        //把我们的数据所有的修改状态
        console.log(val)
        this.updateAll(val)
      }
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

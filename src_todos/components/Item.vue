<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false" :class="{myClass:isShow}">
    <label>
      <input type="checkbox" :checked="todo.isOver" @click="updateO"/>
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteO">删除</button>
  </li>
</template>

<script>
export default {
  name: "",
  props:{
    todo:Object,
    updateOne:Function,
    index:Number,
    deleteOne:Function
  },
  data(){
    return {
      isShow:false
    }
  },
  
  methods:{
    //点击复选框调用App组件的方法更新单个的完成状态
    updateO(){
      this.updateOne(this.index)
    },

    // //点击删除按钮，调用App组件的方法去删除单个todo
    deleteO(){
      this.deleteOne(this.index)
    }


  }
};
</script>

<style scoped>
/*item*/

.myClass{
  background-color: hotpink;
}

li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>

<template>
  <li @mouseenter="isShow=true" @mouseleave="isShow=false" :class="{myClass:isShow}">
    <label>
      <input type="checkbox" :checked="todoItem.isOver" @click="updateO"/>
      <span>{{todoItem.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteO">删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: "",
  props:['todoItem','index','deleteOne'],
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    updateO(){
      //谁发送数据谁就发布消息
      PubSub.publish('haha', this.index);
      // this.$bus.$emit('updateOne',this.index) //全局事件总线触发事件
      // this.updateOne(this.index)
    },
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

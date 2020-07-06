<template>
  <div>
    <Child>
      <template slot="btn">
        <button>点我</button>
      </template>
      <template slot="aa">
        <a href="http://www.atguigu.com">点我去学习</a>
      </template>
      <template slot="ss">
        <span>嘿嘿</span>
      </template>
    </Child>


    <Child>
      <template>
        <h2>我爱你</h2>
      </template>
    </Child>



    <Child2 :todos="todos">
      <!-- 决定子组件内部的结构，比如假设isOver为true,那么内容需要包含在span当中并且内容前面带√ -->
      <!-- slot-scope会把子组件传递过来的数据，放在一个对象当中作为属性 -->

      <!-- 什么时候用作用域插槽： 当碰到数据是在子组件当中展示的，而结构是由父组件决定的，此时必然使用作用域插槽 -->
      <template slot-scope="scopePerps">
        <span v-if="scopePerps.todo.isOver">
          √
        </span>
        {{scopePerps.todo.content}}
      </template>
    </Child2>



    
  </div>
</template>

<script>
import Child from '@/components/Child'
import Child2 from '@/components/Child2'
export default {
  name: '',
  components:{
    Child,
    Child2
  },
  data(){
    return {
      todos:[
        {id:1,content:'抽烟',isOver:false},
        {id:2,content:'喝酒',isOver:true},
        {id:3,content:'烫头',isOver:false}
      ]
    }
  },

}
</script>

<style scoped>

</style>

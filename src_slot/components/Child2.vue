<template>
  <div>
    <h1>我爱你赵丽颖</h1>
    
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        <slot :todo="todo">
          <!-- 这个:todo="todo" 是作用域插槽的一部分，会传递给父组件当中固定的某个区域 -->
          {{todo.content}}
        </slot>
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  name: '',
  props:['todos']
}
</script>

<style scoped>

</style>

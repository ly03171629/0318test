<template>
  <div>
    <h1>我爱你赵丽颖</h1>
    <!-- slot如果没有起名，我们称作默认插槽 -->
    <slot name="btn">
      <!-- 占位置，这里面的结构内容不确定，得由父组件给我 -->
    </slot>

    <slot name="aa">
      <!-- 占位置，这里面的结构内容不确定，得由父组件给我 -->
    </slot>

    <slot name="ss">
      <!-- 占位置，这里面的结构内容不确定，得由父组件给我 -->
    </slot>

      <!-- 一般我们在用的时候，默认插槽一般只有一个 -->
    <slot></slot>


    <!-- 作用域插槽 -->

  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style scoped>

</style>

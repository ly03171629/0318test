<template>
  <div>
    <button @click="count++">点击了{{count}}次</button>
    <h2>我爱你赵丽颖</h2>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
      count:0
    }
  }
}
</script>

<style scoped>
h2{
  color:hotpink
}
</style>

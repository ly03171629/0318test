<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "",
  data(){
    return {
      searchName:''
    }
  },
  methods:{
    // ...mapActions(['search'])

    search(){
      //和store里面的某个actions方法去对应
      //如果传递参数只有一个，可以直接传
      //如果传递多个，必须使用对象
      this.$store.dispatch('search',this.searchName)
    }
  }
};
</script>

<style scoped>
</style>

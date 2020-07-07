<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">如果是奇数加{{count}}</button>
    <button @click="incrementAsync">异步加{{count}}</button>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  name: '',
  //数据定义到vuex（store）里面


  // methods:mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
  methods:{
    //最原始的写法
    // increment(){
    //   //this.$store.dispatch分发触发 store对象内部actions内部对应的方法
    //   this.$store.dispatch('increment')
    // },
    // decrement(){
    //   this.$store.dispatch('decrement')
    // },
    // incrementIfOdd(){
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementAsync(){
    //   this.$store.dispatch('incrementAsync')
    // }
      // 使用mapActions简化methods的写法
      //1、如果methods方法名称和store对象actions内部的方法名称一致，可以使用下面这样的写法
      // ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])

      //2、如果methods方法的名称和store对象actions内部的方法名称不一致，那么就不能使用数组这样的写法
      ...mapActions(['decrement','incrementIfOdd','incrementAsync']),
      ...mapActions({'increment':'iincrement'})
  },

  computed:{
    // count(){
    //   return this.$store.state.count
    // }
    ...mapState(['count'])

    // {
    //   // count(){
    //   //   return this.$store.state.count
    //   // }
    // }



  }
  






  //之前的，数据是定义在组件内的
  // data(){
  //   return {
  //     count:0
  //   }
  // },
  // methods:{
  //   increment(){
  //     this.count++
  //   },
  //   decrement(){
  //     this.count--
  //   },
  //   incrementIfOdd(){
  //     if(this.count % 2 === 1){
  //       this.count++
  //     }
  //   },
  //   incrementAsync(){
  //     setTimeout(() => {
  //       this.count++
  //     }, 1000);
  //   }
  // }
}
</script>

<style scoped>
</style>

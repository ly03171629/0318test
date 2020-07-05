<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username"/>
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Add",
  props:['addComment'],
  data(){
    return {
      username:'',
      content:''
    }
  },
  methods:{
    addC(){
      //点击提交，要执行的回调函数

      //收集数据形成新的comment对象
      let {username,content} = this
      //验证数据的可靠性
      if(username.trim() && content.trim()){
        let id = Date.now()
        let comment = {
          username,
          content,
          id
        }

        //把新的comment对象添加到我们的comments数组当中
        //数据在哪定义，更新数据的方法就应该在哪去定义，而其它组件想要去修改数据，必须调用更新数据的方法去做
        this.addComment(comment)

        this.username = ''
        this.content = ''
      }else{
        alert('请输入评论信息')
      }

      
    }

  }
};


function fn(){}

var fn1 = fn

fn1()

fn()








</script>

<style scoped>
</style>

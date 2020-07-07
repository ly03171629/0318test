const express = require('express')
const app = express()


//路由：key和value的映射关系
app.get('/users/info', function (req, res) {
  let response = {
    status:200,
    data:{
      total:2,
      items:[
        {id:1,username:'zhaoliying'},
        {id:2,username:'yangmi'},
      ]
    }
  }
  res.send(JSON.stringify(response))
})

app.listen(4000,()=>{
  console.log('服务器已经开始服务监听http://localhost:4000')
})
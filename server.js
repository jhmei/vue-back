let http = require('http')

let users = [{ id: 2, name: 'zhangsan' }, { id: 22, name: 'lisi' }, { id: 222, name: 'wangwu' }]
let server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/plain;charset=utf-8') // 解决中文乱码
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users))
  } else {
    res.end('Not Found')
  }
})
server.listen(3000, () => {
  console.log('后端API接口服务器已经启动在3000端口了')
})

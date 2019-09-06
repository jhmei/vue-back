let http = require('http')

let users = [{ id: 6, name: '张三' }, { id: 7, name: '李四' }, { id: 8, name: '王五' }]
let server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url === '/api/users') {
    res.end(users)
  } else {
    res.end('Not Found')
  }
})
server.listen(3000, () => {
  console.log('后端API接口服务器已经启动在3000端口了')
})

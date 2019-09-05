let http = require('http')

let users = [{ id: 666, name: '张三' }, { id: 888, name: '李四' }, { id: 999, name: '王五' }]
let server = http.createServer(function(req, res) {
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

let http = require('http')

let users = [{ id: 2, name: '请问' }, { id: 22, name: '以为' }, { id: 222, name: '认为' }]
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

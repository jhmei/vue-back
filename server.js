const http = require('http')

const list = [
  { id: 8, name: '请问' },
  { id: 88, name: '以为' },
  { id: 888, name: '认为' }
]

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain;charset=utf-8') // 解决中文乱码
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url === '/api/list') {
    res.end(JSON.stringify(list))
  } else {
    res.end('Not Found')
  }
})

server.listen(3000, () => {
  console.log('后端服务已经启动在3000端口')
})

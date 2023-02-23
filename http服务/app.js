const http = require('http')
const server = require('./server')
const router = require('./router')
// http.createServer((req, res) => {
//   console.log('请求', req)
//   console.log('响应', res)
//   res.end('hello nodejs')
// }).listen(8888)

// console.log('服务启动成功');
server.start(router.route)
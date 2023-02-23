const http = require('http')
const url = require('url')

function start(route){
  function onRequest(req, res){
    let pathname = url.parse(req.url).pathname
    console.log('请求头信息',req.headers)
    route(pathname)
    res.write('hello')
    res.end()
  }

  http.createServer(onRequest).listen(8888)
  console.log('服务已启动')
}

exports.start = start
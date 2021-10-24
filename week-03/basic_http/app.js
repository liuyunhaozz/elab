var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
    // console.log('接收到了用户请求');
    // console.log(request.url)
    response.setHeader('content-type', 'text/html;charset=utf-8')
    if (request.url == '/') {
        response.end('hello')
    } else if (request.url == '/login') {
        response.end('this is login')
    } else {
        response.end('额')
    }
    
})

server.listen(8080, function() {
    console.log('服务器启动成功')
})
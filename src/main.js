const http = require('http');

const server = http.createServer((Request,Response)=>{
    Response.write('不要脸');
    Response.end();
})

server.listen(3000,()=>{
    console.log('∈服务器启动');
});
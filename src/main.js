const http = require('http');

const server = http.createServer((Request,Response)=>{
   switch(Request.url)
   {
        case '/':
            Response.writeHead(200,{
            'Content-Type':'text/html'
            });
           Response.write('<input />');
           break;
        case '/login':
            Response.writeHead(200,{
                'Content-Type':'text/html'
            });
           Response.write('用户名:<input />');
           Response.write('密码:<input />');
           Response.write('<button />');
           break;
        case '/JSON':
            const dtat={
                'id':1,
                'title':'关山月',
                'content':'明月出天山，苍茫云海间'
            }

            const jsonData = JSON.stringify(data);
            Response.writeHead(200,{
                'Content-Type':'application/json;charset=utf-8'
            });
            Response.write(jsonData);
            break;
        default:
            Response.write('404');
            break;
   }
   Response.end();
})

server.listen(3000,()=>{
    console.log('∈服务器启动');
});
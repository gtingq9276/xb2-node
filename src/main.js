const express = require('express');
const port =3000;
const app =express();

/**
 * 使用JSON中间件
 */
app.use(express.json());

app.listen(port,()=>{
    console.log("ΘΞω服务器启动");
});

const data =[
    {
        id:1,
        title:'春望',
        content:'国破山河在'
    },
    {
        id:2,
        title:'彩云追月',
        content:'明月几时有'
    },
    {
        id:3,
        title:'春夜喜雨',
        content:'随风潜入夜'
    }
];

/**
 * 根目录
 */
app.get('/',(require,respond)=>{
    respond.send(data);
});

/**
 * 参数传递
 */
app.get('/posts/:postID',(require,respond)=>{
    const {postID} = require.params;
    console.log(postID);
    const posts = data.filter(item=>item.id == postID);
    respond.send(posts[0]);
});
/**
 * 登录
 */
app.get('/login/:username/:pwd',(require,respond)=>{
    console.log(require.params);
    const {username,pwd} =require.params;
    if(username == 'abc' && pwd == '123')
    {
        respond.send('success');
    }
    else
    {
        respond.send('fail');
    }
    
});
/**
 * 取内容
 */
app.post('/content',(request,respond)=>{

    const {content} = request.body;
    
    /**
     * 设置状态码
     */
    //respond.status(201);
    
    //request.header['application/x-www-form-urlencoded']
    console.log(request.params);
    console.log(request.data);
    console.log(request.data);
    console.log(request.headers);
    respond.send(request.headers);

    // respond.send({
    //     "msg":`成功接收数据: ${request.body}`
    // });
});


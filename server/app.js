const Koa = require('koa');
const app = new Koa();


const KoaRouter = require('koa-router');
routers = new KoaRouter();

const bodyparser = require('koa-bodyparser');
app.use(bodyparser());


const cors = require('koa2-cors');
app.use(cors({
    origin: function(ctx){
        return "*";
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));


const jwt = require('jsonwebtoken');
let secret = "yspwf";






const path = require('path');
const { uploadFile } = require('./upload.js');

const fs = require('fs');
const koaBody = require('koa-body');
app.use(koaBody({
    multipart: true,
    formidable:{
        maxFileSize: 200*1024*1024 
    }
}));






routers.get('/user/login', async (ctx, next)=>{
    console.log(ctx.request.query);
    ctx.body = "33333";
    // let token = jwt.sign({
    //     name:'ysp',
    // },secret,{expiresIn:'2h'});

    // ctx.body = {'token':token, 'error':'', 'success':true};
});



routers.get("/", async (ctx, next)=>{
    
    // let res = await fileupload.upload();
    // console.log(res);

});



routers.post("/upload", async (ctx, next)=>{

    //console.log(ctx.req);

    /*
    //上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    //创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname,'image/album/')+`/${file.name}`;

    //创建可写流
    const upStream = fs.createWriteStream(filePath);

    //可读流通过管道写入可写流
    reader.pipe(upStream);
    */




    /*
    let result = { success: false }
    let serverFilePath = path.join( __dirname, './image' )

    // 上传文件事件
    result = await uploadFile( ctx, {
      fileType: 'album',
      path: serverFilePath
    })
   ctx.body = result;
   */
});


app.use(routers.routes()).use(routers.allowedMethods());


app.listen("8000", ()=>{
    console.log("server is runing ...");
});
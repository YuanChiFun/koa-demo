const fs = require('fs');
const Koa = require('Koa');
const app = new Koa();

app.use(async ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./template/demo-3.html');
})

console.log('http://192.168.1.118:2333');
app.listen(2333);
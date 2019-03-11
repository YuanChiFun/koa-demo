const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.response.body = 'Hello Koa';
})

console.log('http://192.168.1.118:2333');
app.listen(2333);
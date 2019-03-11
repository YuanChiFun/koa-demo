const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    ctx.response.body = 'Hello Koa';
}

app.use(main);
console.log('http://192.168.1.118:2333');
app.listen(2333);